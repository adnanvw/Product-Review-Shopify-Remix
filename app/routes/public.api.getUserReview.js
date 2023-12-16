import { json } from "@remix-run/node";

import { reviewModel } from "../db.server"

export const action = async ({ request }) => {

    const data = JSON.parse(await request.text())

    switch (request.method) {
        case "POST": {
            try {
                const reviewData = await reviewModel.findOne({ productId: data.productId, customerId: data.customerId })
                return json({
                    reviewData
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