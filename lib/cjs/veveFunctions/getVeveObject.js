"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVeveObject = void 0;
const converters_1 = require("./converters");
// type IVeveObject = {
//     [Key in string]?: CreatePageParameters["properties"]
// }
const getVeveObject = (data) => {
    const input = {
        name: (0, converters_1.getTitle)(data.name),
        releaseDate: (0, converters_1.getText)([data.releaseDate]),
        releaseAmount: (0, converters_1.getNumber)(data.releaseAmount),
        availableAmount: (0, converters_1.getNumber)(data.availableAmount),
        rarity: (0, converters_1.getSelect)(data.rarity),
        storePrice: (0, converters_1.getNumber)(data.storePrice),
        edition: (0, converters_1.getSelect)(data.edition),
        provider: (0, converters_1.getText)([data.provider]),
        series: (0, converters_1.getText)([data.series]),
        brand: (0, converters_1.getText)([data.brand]),
        licensor: (0, converters_1.getText)([data.licensor]),
        priceStatistics: (0, converters_1.getText)([data.priceStatistics]),
        userStatistics: (0, converters_1.getText)([data.userStatistics]),
        imageLink: (0, converters_1.getUrl)(data.imageLink),
        imageLinkCloudflare: (0, converters_1.getUrl)(data.imageLinkCloudflare),
        slug: (0, converters_1.getText)([data.slug]),
        instances: (0, converters_1.getText)(data.instances),
        isUserFavorite: (0, converters_1.getCheckbox)(data.isUserFavorite),
        category: (0, converters_1.getSelect)(data.category),
        uuid: (0, converters_1.getText)([data.uuid])
    };
    return input;
};
exports.getVeveObject = getVeveObject;
