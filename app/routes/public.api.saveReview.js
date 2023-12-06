import { json } from "@remix-run/node";

import { reviewModel, shopModel } from "../db.server"

import axios from "axios"
export const action = async ({ request }) => {

    const data = JSON.parse(await request.text())

    switch (request.method) {
        case "POST": {
            try {
                
                const shop = await shopModel.findOne({shop:data.shop})
                let config = {
                    method: 'get',
                    url: `https://${shop.shop}/admin/api/2023-07/customers/${data.customerId}.json`,
                    headers: {
                        'X-Shopify-Access-Token': shop.accessToken,
                    },
                };

                const customer = await axios.request(config)

                console.log("jjj",customer)

            } catch (error) {
                console.log("error", error)
                return json({
                    error: "Something went wrong..."
                });
            }
        }
    }
};