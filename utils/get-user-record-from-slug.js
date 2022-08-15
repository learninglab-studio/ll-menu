const airtableTools = require('./airtable-tools')
const llog = require('./ll-loggers')

const getUserRecordFromSlug = async (slug) => {
    llog.red(`looking for records for ${slug}`)
    let record = await airtableTools.findRecordByValue({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Users",
        view: "THE_MENU",
        field: "Slug",
        value: slug
    })
    llog.cyan(record)
    return record
}

export default getUserRecordFromSlug