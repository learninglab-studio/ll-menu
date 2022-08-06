const stringify = (obj) => {
    return `\`\`\`\n${JSON.stringify(obj, null, 4)}\n\`\`\``
}

export default function generateWeeklyMarkdown (data) {
    let theMarkdown = `# weekly markdown\n\nall the things for this week.\n\n## Actions\n`
    const actions = data.actions.map(action=>{
        return `\n- ${action.fields.Name} (**${action.fields.AssignedTo_Name ? action.fields.AssignedTo_Name.join(", ") : ""}** • _${action.fields.TemporalStatus}_)`
        
    })
    actions.forEach(element => {
        theMarkdown+=element
    });
    theMarkdown+=`\n## Events\n\n`;
    for (let index = 0; index < data.events.length; index++) {
        const event = data.events[index];
        theMarkdown+=`\n- **${event.fields.Start}:** ${event.fields.Title}. ${event.fields.Description ? event.fields.Description : "" } (_${event.fields.Attendees ? event.fields.Attendees.split(", ").join(', ') : ""}_)`
    }
    theMarkdown+=`\n\n## Microprojects`
    theMarkdown+=`\n\n## Projects`
    // console.log(`about to generate markdown from data:\n${JSON.stringify(data, null, 4)}`)
    return theMarkdown
}

// - **9:00**. LL Team Meeting. (CC, DD, LP, MK, JK, 308)