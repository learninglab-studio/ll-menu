const llTimeTools = require('./ll-time-tools')
const dateFns = require('date-fns')
const { zonedTimeToUtc, utcToZonedTime, formatInTimeZone } = require('date-fns-tz')


const stringify = (obj) => {
    return `\`\`\`\n${JSON.stringify(obj, null, 4)}\n\`\`\``
}

const sortByProperty = (arr, prop) => {
    let sorted = arr.reduce((newArray, e) => {
        if (newArray.hasOwnProperty(e[prop])) {
            return {...newArray, [e[prop]]: [...newArray[e[prop]], e] }
        } else {
            return {...newArray, [e[prop]]: [e]}
        } 
    }, {})
    return sorted
}

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}

function simplifyDescription(d) {
    let dString = d.toString()
    let cleanString = removeTags(dString)
    return cleanString.substring(0, 500)
}

function actionMarkdown(actions, tStatus){
    let markdown = ``
    let theseActions = actions.filter(action => {return (action.tStatus == tStatus)})
    if (theseActions.length > 0) {
        markdown+=`\n### ${tStatus}`
        theseActions.forEach(a => { markdown+= `\n- ${a.fields.Name} (**${a.fields.AssignedTo_Name ? a.fields.AssignedTo_Name.join(", ") : ""}**)` })
        return markdown+="\n"
    } else {
        return
    }
}

const groupEvents = (atEventObjects) => {
    const events = atEventObjects.map(e=>{
        return {
            ...e,
            startLlDate: formatInTimeZone(e.fields.Start, 'America/New_York', 'yyyyMMdd'),
            startDay: formatInTimeZone(e.fields.Start, 'America/New_York', 'EEEE'),
            startTime: formatInTimeZone(e.fields.Start, 'America/New_York', 'H:mm'),
        }
    })
    let sortedEvents = sortByProperty(events, "startLlDate")
    return sortedEvents
}

const getAttendeesString = (emailString) => {
    if (emailString.length > 0) {
        let emails = emailString.split(", ")
        let names = emails.map(e=>{ return e.substring(0, e.indexOf('@'));})
        return names.join(', ')
    } else {
        return "no attendees"
    }
}

export default function generateWeeklyMarkdown (data) {
    let theMarkdown = `# weekly markdown\n\nall the things for this week.\n\n## Actions\n`
    let actions = data.actions.map(e=>{ return { ...e, tStatus: e.fields.TemporalStatus } })
    // console.log(JSON.stringify(actions, null, 4))
    // add all actions
    theMarkdown+=actionMarkdown(actions, "InProgress")
    theMarkdown+=actionMarkdown(actions, "Now")
    theMarkdown+=actionMarkdown(actions, "Today")
    theMarkdown+=actionMarkdown(actions, "Tomorrow")
    theMarkdown+=actionMarkdown(actions, "ThisWeek")
    theMarkdown+=actionMarkdown(actions, "NextWeek")
    // add all events
    const events = groupEvents(data.events)
    theMarkdown+=`\n\n## Events\n`;
    for (const day in events) {
        if (Object.hasOwnProperty.call(events, day)) {
            const element = events[day];
            theMarkdown+=`\n### ${events[day][0].startDay} • ${events[day][0].startLlDate}\n`
            for (let i = 0; i < events[day].length; i++) {
                const e = events[day][i];
                theMarkdown+=`\n- **${e.startTime} •** ${e.fields.Title}. ${e.fields.Description ? simplifyDescription(e.fields.Description) : "" } (_${e.fields.Attendees ? getAttendeesString(e.fields.Attendees) : ""}_)`
            }
        }
    }
    theMarkdown+=`\n\n## Microprojects\n`
    for (let index = 0; index < data.microprojects.length; index++) {
        const mp = data.microprojects[index];
        theMarkdown+=`\n- **${mp.fields.Name}:** ${mp.fields.Documents_URLs}.`
    }
    theMarkdown+=`\n\n## Projects\n`
    for (let index = 0; index < data.projects.length; index++) {
        const project = data.projects[index];
        theMarkdown+=`\n- **${project.fields.Name}:** ${project.fields.TemporalFocusStatus}.`
    }
    theMarkdown+=`\n\n## Shoots\n`
    for (let index = 0; index < data.shoots.length; index++) {
        const shoot = data.shoots[index];
        theMarkdown+=`\n- **${shoot.fields.Start}:** ${shoot.fields.Title}. (_${shoot.fields.Attendees ? getAttendeesString(shoot.fields.Attendees) : ""}_)`
    }
    return theMarkdown

}

// - **9:00**. LL Team Meeting. (CC, DD, LP, MK, JK, 308)