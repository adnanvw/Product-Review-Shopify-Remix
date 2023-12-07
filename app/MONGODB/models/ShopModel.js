import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
    id: String,
    shop: String,
    state: String,
    isOnline: Boolean,
    scope: String,
    accessToken: String
})

const shopModel = mongoose.model( mongoose.models.shopify_sessions || "shopify_sessions", shopSchema);

export default shopModel;




