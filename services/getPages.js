import { databaseId, languages, notion } from "../config.js"
import { formatNotionResponse } from "./formatNotionResponse.js"

const sortPages = (data) => {
    const responses = data.sort((a, b) => a.number - b.number)
    return responses
}

const formater = async (id, filter, language) => {
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

    const formatedResult = response.results.map((el) => {
        const formatedData = formatNotionResponse(el.properties);
        const lang = languages[language];
        const formatedResponse = {
            name: formatedData[lang || languages.en],
            image: `/assets/pokemons/${formatedData.Number}-${formatedData.EN}.png`,
            number: formatedData.Number
        }
        return formatedResponse
    })

    return { next_cursor: response.next_cursor, formatedResult }

}


export const getPages = async (filters, language) => {
    let pages = []
    let next_cursor = undefined

    while (next_cursor !== null) {
        const response = await formater(next_cursor, filters, language)
        pages.push(response.formatedResult)
        next_cursor = response.next_cursor
    }

    const sortedPages = sortPages(pages.flat())
    return sortedPages
}