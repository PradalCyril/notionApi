import { getUrl } from '../getUrl.js'
import { addItem } from '../addItem.js';

export * from './formatNames.js'

export const getPokemonList = (data) => {
    if (!data) return []
    return data.results || []
}


export const downloadFromDbUploadToNotion = async (data) => {
    const response = await getUrl(data.url);
    const list = getPokemonList(response);

    for (let i = 0; i < list.length; i++) {
        const el = { ...list[i], number: i + 1 };
        const response = await getUrl(el.url);
        const r = await getUrl(`https://pokeapi.co/api/v2/pokemon-species/${i + 1}/`)
        const pokemon = { ...formatNames(r.names, el), image: response.sprites.front_default }

        await addItem(pokemon); // 1 -
        
        // downloadImages(pokemon.image, `${pokemon.number}-${pokemon.name}.png`, function(){
        //   console.log('done');
        // }); // 2 -
    }
    return 
}