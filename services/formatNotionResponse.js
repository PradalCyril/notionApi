export const formatNotionResponse = (data) => {
    if(!data) return [];
    const formatedData = Object.keys(data).reduce((acc, e) => {
        const d = data[e]
        if(d.type === "rich_text") return {...acc, [e] : d["rich_text"][0].text.content } 
        else if(d.type === 'number') return {...acc, [e]: d.number}
        else if(d.type === 'files') return {...acc, [e]: d.files}
        else if(d.type === 'url') return {...acc, [e]: d.url}
        else return acc
    }, {})
    return formatedData
}
