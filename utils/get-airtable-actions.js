const airtableTools = require('./airtable-tools')

module.exports = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Actions"
    })
    return records
}