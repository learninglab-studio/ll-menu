const airtableTools = require('./airtable-tools')

module.exports.getActions = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Actions"
    })
    return records
}

module.exports.getEvents = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "ll-plan",
        view: "NEXT_TWO_WEEKS"
    })
    return records
}

module.exports.getProjects = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Projects"
    })
    return records
}

module.exports.getMicroprojects = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Microprojects"
    })
    return records
}