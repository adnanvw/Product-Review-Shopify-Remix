import { json } from "@remix-run/node";
import { reviewModel } from "../db.server"
import axios from "axios";

export const loader = async ({ request }) => {

    try {

        const { admin, session } = await authenticate(request)

        const result = await reviewModel.aggregate([
            {
                $group: {
                    _id: "$productId",
                    averageRating: { $avg: "$rating" },
                },
            },
            {
                $sort: { averageRating: -1 },
            },
            {
                $limit: 5,
            },
        ]);

        

        const getProduct = async (id) => {
            let config = {
                method: 'get',
                url: `https://${session.shop}/admin/api/2023-10/products/${id}.json`,
                headers: {
                    'X-Shopify-Access-Token': session.accessToken,
                },
            };

            const product = await axios.request(config)

            return product.data.product

        }

        let finalArray = []

        for (let product of result) {
            const data = await getProduct(product._id)
            finalArray.push({ rating: product.averageRating, productTitle: data.title, image: data.images[0].src })
        }

        return json({ finalArray }, { status: 200 })

    } catch (error) {
        console.log("error", error)
        return json({
            error: "Something went wrong..."
        }, { status: 400 });
    }

}