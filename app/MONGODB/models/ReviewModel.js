import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
},{
    timestamps: true,
    strict: false 
})

const reviewModel = mongoose.model("review", reviewSchema);

export default reviewModel;




