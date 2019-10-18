//> Fetching
import axios from 'axios';

/*const spread_shop_config = {
    shopName: 'sonnenarm',
    prefix: 'https://shop.spreadshirt.de',
    baseId: 'shop',
};*/

export function getSpreadShopItems() {
    axios.get(`https://api.spreadshirt.net/api/v1/shops/205909?mediaType=json`, {
        headers: {
            authorization: `SprdAuth apiKey="${process.env.REACT_APP_SPREADSHIRT_KEY}}"`,
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log('error ' + error);
    });
}

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
