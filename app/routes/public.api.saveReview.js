import { json } from "@remix-run/node";

import { reviewModel, shopModel } from "../db.server"

import axios from "axios"

export const action = async ({ request }) => {

    const data = JSON.parse(await request.text())

    switch (request.method) {
        case "POST": {
            try {

                const shop = await shopModel.findOne({ shop: data.shop })
                let config = {
                    method: 'get',
                    url: `https://${shop.shop}/admin/api/2023-07/customers/${data.customerId}.json`,
                    headers: {
                        'X-Shopify-Access-Token': shop.accessToken,
                    },
                };

                const customer = await axios.request(config)

                // console.log("jjj",customer.data.customer)

                const customerInfo = customer.data.customer

                if (customerInfo.email) {
                    await reviewModel.findOneAndUpdate({ email: customerInfo.email, productId: data.productId }, {
                        email: customerInfo.email,
                        name: `${customerInfo.first_name} ${customerInfo.last_name}`,
                        productId: data.productId,
                        review: data.review,
                        rating: data.rating
                    }, { upsert: true, new: true })
                }
                return json({
                    success: "Review Saved Successfully."
                }, { status: 200 });

            } catch (error) {
                console.log("error", error)
                return json({
                    error: "Something went wrong..."
                }, { status: 400 });
            }
        }
    }
};