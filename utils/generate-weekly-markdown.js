export default function generateWeeklyMarkdown (data) {
    let theMarkdown = `#weekly markdown\ngoes here`
    console.log(`about to generate markdown from data:\n${JSON.stringify(data, null, 4)}`)
    return theMarkdown
}