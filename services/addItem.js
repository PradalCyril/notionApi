import { databaseId, notion } from "../config.js";


const addLang = (lang, data) => {
    return {
        [lang]: {
            rich_text: [
                {
                    text: {
                        content: data || ""
                    }
                }
            ]
        },
    }
}

export const addItem = async (data) => {
    try {
        if (!databaseId) return;
        const langs = {
            ...addLang('KO', data.KO),
            ...addLang("FR", data.FR),
            ...addLang("DE", data.DE),
            ...addLang("SP", data.SP),
            ...addLang("IT", data.IT),
            ...addLang("EN", data.EN),
            ...addLang("PT", data.PT),
            ...addLang("TU", data.TU),
            ...addLang("TH", data.TH),
            ...addLang("RU", data.RU),
            ...addLang("JP", data.JP),
            ...addLang("CH", data.CH),
        }

        const properties = {
            Name: {
                title: [
                    {
                        text: {
                            content: data.name
                        }
                    }
                ]
            },
            Number: {
                number: data.number
            },
            Image: {
                url: data.image || ""
            },
            Url: {
                url: data.url || ""
            },
            ...langs,
        }


        const response = await notion.pages.create({
            parent: {
                type: "database_id",
                database_id: databaseId,
            },
            properties
        });
        console.log("🚀 ~ file: addItem.js ~ line 72 ~ addItem ~ response", response)

        // console.log(response);
        console.log("Success! Entry added.");

    } catch (error) {
        console.error(error.body);

    }
}