import { ECategories, EEditions, ERarity } from "../../enums";
import { EmptyArray } from "../notion/RichTextItemRequest";
export declare type Uuid = string;
export declare type Url = string;
export interface ICollectible {
    name: string;
    releaseDate: string;
    releaseAmount: number;
    availableAmount: number;
    rarity: ERarity;
    storePrice: number;
    edition: EEditions;
    provider: null;
    series: Uuid;
    brand: Uuid;
    licensor: Uuid;
    priceStatistics: Uuid;
    userStatistics: null;
    imageLink: Url;
    imageLinkCloudflare: Url;
    slug: null;
    instances: EmptyArray;
    isUserFavorite: boolean;
    category: ECategories;
    uuid: Uuid;
}
