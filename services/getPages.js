import { megaDatabaseId, databaseId, languages, notion } from "../config.js"
import { createFilters } from "./createFilters.js"
import { formatNotionResponse } from "./formatNotionResponse.js"

const sortPages = (data) => {
    const responses = data.sort((a, b) => a.number - b.number)
    return responses
}

const formater = async (id, filter, language, defaultFilters) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter,
        sorts: [
            {
                property: "Number",
                direction: "ascending",
            }
        ],
        start_cursor: id,
        page_size: 100 // 1 - 100 items limited by notion.
    })

    const promisedFormatedResult = response.results.map(async (el) => {
        const formatedData = formatNotionResponse(el.properties);
        const lang = languages[language];
        let formatedResponse = {
            name: Object.keys(languages).reduce((acc, lng) => ({ ...acc, [lng]: formatedData[languages[lng] || languages.en] }), {}),
            image: formatedData.Image,
            number: formatedData.Number,
            level: formatedData.RaidLevel
        }

        const filterData = defaultFilters.find((e) => e.value === formatedResponse.number)
        if (!filterData || !filterData.isMega) return formatedResponse
        const megaResponse = await notion.databases.query({
            database_id: megaDatabaseId,
            filter: { and: [{ number: { equals: filterData.value }, property: 'Number', type: 'number' }, { number: { equals: filterData.version || 1 }, property: 'Version', type: 'number' }] }
        })
        const megaData = megaResponse.results[0] || {}
        const formatedMegaData = formatNotionResponse(megaData.properties) || {}
        formatedResponse = { ...formatedResponse, level: 4, image: formatedMegaData.Url }
        return formatedResponse
    })
    const formatedResult = await Promise.all(promisedFormatedResult);
    return { next_cursor: response.next_cursor, formatedResult }

}


export const getPages = async (filters, language, defaultFilters) => {
    let pages = []
    let next_cursor = undefined

    while (next_cursor !== null) {
        const response = await formater(next_cursor, filters, language, defaultFilters)
        pages.push(response.formatedResult)
        next_cursor = response.next_cursor
    }

    const sortedPages = sortPages(pages.flat())
    return sortedPages
}