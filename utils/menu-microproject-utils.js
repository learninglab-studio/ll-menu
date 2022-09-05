import { getISODay } from 'date-fns'
import llog from './ll-loggers'
const airtableTools = require('./airtable-tools')

module.exports.getAllMicroprojects = async () => {
    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Microprojects",
        view: "THE_MENU"
    })
    return records
}

module.exports.getOneMicroprojectBySlug = async (slug) => {
    const records = await airtableTools.findRecordByValue({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Microprojects",
        view: "THE_MENU",
        field: "slug",
        value: slug
    })
    return records
}