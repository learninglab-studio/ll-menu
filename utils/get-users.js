import { getISODay } from 'date-fns'
import llog from './ll-loggers'

const airtableTools = require('./airtable-tools')

const getUsers = async (person) => {

    const records = await airtableTools.findMany({
        baseId: process.env.AIRTABLE_22_23_WORK_BASE,
        table: "Users",
        view: "THE_MENU"
    })
    return records
}

export default getUsers