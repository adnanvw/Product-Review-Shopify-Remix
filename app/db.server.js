
import mongoConnect from "./MONGODB/connection";

import shopModel from "./MONGODB/models/ShopModel";
import reviewModel from "./MONGODB/models/ReviewModel"

mongoConnect()
export {
  shopModel,reviewModel
}
