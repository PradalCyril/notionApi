export const formatNames = (names, pokemon) => {
    let pokemonCopy = { ...pokemon }
    for (let i = 0; i < names.length; i++) {
      const name = names[i]
      const lang = name.language.name
      if (lang === 'ja') pokemonCopy = { ...pokemonCopy, JP: name.name }
      else if (lang === 'zh-Hans') pokemonCopy = { ...pokemonCopy, CH: name.name }
      else if (lang === 'de') pokemonCopy = { ...pokemonCopy, DE: name.name }
      else if (lang === 'en') pokemonCopy = {
        ...pokemonCopy,
        EN: name.name,
        PT: name.name,
        TU: name.name,
        TH: name.name,
        RU: name.name
      }
      else if (lang === 'fr') pokemonCopy = { ...pokemonCopy, FR: name.name }
      else if (lang === 'it') pokemonCopy = { ...pokemonCopy, IT: name.name }
      else if (lang === 'ko') pokemonCopy = { ...pokemonCopy, KO: name.name }
      else if (lang === 'es') pokemonCopy = { ...pokemonCopy, SP: name.name }
      else continue
    }
    return pokemonCopy
  }