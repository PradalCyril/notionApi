// filters = [{ field: string, value: string }]

export const createFilters = (filters) => {
    const formatedfilters = filters.reduce((acc, f) => {
        if (typeof f.value === 'string')
            return {
                ...acc, or: [...acc.or, {
                    rich_text: { equals: f.value },
                    property: f.field,
                    type: "rich_text",
                }
                ]
            }
        if (typeof f.value === 'number')
            return {
                ...acc, or: [...acc.or, {
                    number: { equals: f.value },
                    property: f.field,
                    type: "number",
                }]
            }
        return acc
    }, { or: [] })
    return formatedfilters
}