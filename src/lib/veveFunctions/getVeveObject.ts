import { EmptyArray, ICheckbox, ICollectible, INumber, IRichText, ISelect, ITitle, IUrl } from "../interfaces"
import { getNumber, getSelect, getTitle, getUrl, getCheckbox, getText} from "./converters"

export interface IVeveObject {
  name: ITitle,
  releaseDate: IRichText,
  releaseAmount: INumber,
  availableAmount: INumber,
  rarity: ISelect,
  storePrice: INumber,
  edition: ISelect,
  provider: IRichText,
  series: IRichText,
  brand:  IRichText,
  licensor:  IRichText,
  priceStatistics:  IRichText,
  userStatistics:  IRichText,
  imageLink: IUrl,
  imageLinkCloudflare: IUrl,
  slug: IRichText,
  instances: EmptyArray,
  isUserFavorite: ICheckbox,
  category: ISelect,
  uuid: IRichText
}

// type IVeveObject = {
//     [Key in string]?: CreatePageParameters["properties"]
// }

export const getVeveObject = (data: ICollectible): IVeveObject => {
    const input = {
        name: getTitle(data.name),
        releaseDate: getText([data.releaseDate]),
        releaseAmount: getNumber(data.releaseAmount),
        availableAmount: getNumber(data.availableAmount),
        rarity: getSelect(data.rarity),
        storePrice: getNumber(data.storePrice),
        edition: getSelect(data.edition),
        provider: getText([data.provider]),
        series: getText([data.series]),
        brand: getText([data.brand]),
        licensor: getText([data.licensor]),
        priceStatistics: getText([data.priceStatistics]),
        userStatistics: getText([data.userStatistics]),
        imageLink: getUrl(data.imageLink),
        imageLinkCloudflare: getUrl(data.imageLinkCloudflare),
        slug: getText([data.slug]),
        instances: getText(data.instances),
        isUserFavorite: getCheckbox(data.isUserFavorite),
        category: getSelect(data.category),
        uuid: getText([data.uuid])
    }

    return input
}