import { EmptyArray, ICheckbox, ICollectible, INumber, IRichText, ISelect, ITitle, IUrl } from "../interfaces";
export interface IVeveObject {
    name: ITitle;
    releaseDate: IRichText;
    releaseAmount: INumber;
    availableAmount: INumber;
    rarity: ISelect;
    storePrice: INumber;
    edition: ISelect;
    provider: IRichText;
    series: IRichText;
    brand: IRichText;
    licensor: IRichText;
    priceStatistics: IRichText;
    userStatistics: IRichText;
    imageLink: IUrl;
    imageLinkCloudflare: IUrl;
    slug: IRichText;
    instances: EmptyArray;
    isUserFavorite: ICheckbox;
    category: ISelect;
    uuid: IRichText;
}
export declare const getVeveObject: (data: ICollectible) => IVeveObject;
