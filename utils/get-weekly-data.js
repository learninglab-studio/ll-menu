const airtableTools = require('./airtable-tools')

const cleanEvents = async (records) => {
    const cleanEvents = []
    for (let i = 0; i < records.length; i++) {
        const element = records[i];
        // cleanEvents.push({...records, })
    }
}

module.exports.getActions = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Actions",
        view: "THE_MENU"
    })
    return records
}

module.exports.getEvents = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "ll-plan",
        view: "THE_MENU"
    })
    return records
}

module.exports.getShoots = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "ll-media-plan",
        view: "THE_MENU"
    })
    return records
}

module.exports.getProjects = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Projects",
        view: "THE_MENU"
    })
    return records
}

module.exports.getMicroprojects = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Microprojects",
        view: "THE_MENU"
    })
    return records
}

