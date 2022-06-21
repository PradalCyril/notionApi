var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { Client } from "@notionhq/client";
// import { CreatePageParameters, CreatePageResponse } from "@notionhq/client/build/src/api-endpoints";
import fetch from "node-fetch";
export * from './veveFunctions/converters';
// import { getNumber, getSelect, getTitle, getUrl, getCheckbox, getText } from "./veveFunctions/converters/index.js"
// const notion = new Client({ auth: process.env.NOTION_KEY });
// const databaseId = process.env.NOTION_DATABASE_ID;
// async function addItem(data: ICollectible) {
//   try {
//     if (!databaseId) return
//     console.log({ ...getVeveObject(data) })
//     // @ts-ignore-next-line
//     const response: CreatePageResponse = await notion.pages.create({
//       parent: { database_id: databaseId },
//       // @ts-ignore-next-line
//       properties: { ...getVeveObject(data) },
//     });
//     console.log(response);
//     console.log("Success! Entry added.");
//   } catch (error) {
//     console.error(error.body);
//   }
// }
export const getItem = (addItem) => __awaiter(void 0, void 0, void 0, function* () {
    const responses = yield fetch("https://my-nft-tracker-backend.azurewebsites.net/api/nfts/4d587ac2-2100-496f-9e44-28dd6b794432")
        .then((response) => response.json())
        .then((data) => ({
        name: data['name'],
        releaseDate: data['releaseDate'],
        releaseAmount: data['releaseAmount'],
        availableAmount: data['availableAmount'],
        rarity: data['rarity'],
        storePrice: data['storePrice'],
        edition: data['edition'],
        provider: data['provider'],
        series: data['series'].uuid,
        brand: data['brand'].uuid,
        licensor: data['licensor'].uuid,
        priceStatistics: data['priceStatistics'].uuid,
        userStatistics: data['userStatistics'],
        imageLink: data['imageLink'],
        imageLinkCloudflare: data['imageLinkCloudflare'],
        slug: data['slug'],
        instances: data['instances'],
        isUserFavorite: data['isUserFavorite'],
        category: data['category'],
        uuid: data['uuid']
    }));
    addItem(responses);
});
// const collectible: ICollectible = {
//   name: responses.name,
//   releaseDate: responses.releaseDate,
//   releaseAmount: responses.releaseAmount,
//   availableAmount: responses.availableAmount,
//   rarity: responses.rarity,
//   storePrice: responses.storePrice,
//   edition: responses.edition,
//   provider: responses.provider,
//   series: responses.series,
//   brand: responses.brand,
//   licensor: responses.licensor,
//   priceStatistics: responses.priceStatistics,
//   userStatistics: responses.userStatistics,
//   imageLink: responses.imageLink,
//   imageLinkCloudflare: responses.imageLinkCloudflare,
//   slug: responses.slug,
//   instances: responses.instances,
//   isUserFavorite: responses.isUserFavorite,
//   category: responses.category,
//   uuid: responses.uuid
// }
// export interface IVeveObject {
//   name: ITitle,
//   releaseDate: IRichText,
//   releaseAmount: INumber,
//   availableAmount: INumber,
//   rarity: ISelect,
//   storePrice: INumber,
//   edition: ISelect,
//   provider: IRichText,
//   series: IRichText,
//   brand:  IRichText,
//   licensor:  IRichText,
//   priceStatistics:  IRichText,
//   userStatistics:  IRichText,
//   imageLink: IUrl,
//   imageLinkCloudflare: IUrl,
//   slug: IRichText,
//   instances: EmptyArray,
//   isUserFavorite: ICheckbox,
//   category: ISelect,
//   uuid: IRichText
// }
// type IVeveObject = {
//   [Key in string]?: CreatePageParameters["properties"]
// }
// export const getVeveObject = (data: ICollectible): IVeveObject => {
//   const input = {
//     name: getTitle(data.name),
//     releaseDate: getText([data.releaseDate]),
//     releaseAmount: getNumber(data.releaseAmount),
//     availableAmount: getNumber(data.availableAmount),
//     rarity: getSelect(data.rarity),
//     storePrice: getNumber(data.storePrice),
//     edition: getSelect(data.edition),
//     provider: getText([data.provider]),
//     series: getText([data.series]),
//     brand: getText([data.brand]),
//     licensor: getText([data.licensor]),
//     priceStatistics: getText([data.priceStatistics]),
//     userStatistics: getText([data.userStatistics]),
//     imageLink: getUrl(data.imageLink),
//     imageLinkCloudflare: getUrl(data.imageLinkCloudflare),
//     slug: getText([data.slug]),
//     instances: getText(data.instances),
//     isUserFavorite: getCheckbox(data.isUserFavorite || false),
//     category: getSelect(data.category),
//     uuid: getText([data.uuid])
//   }
//   //@ts-ignore-next-line
//   return input
// }
