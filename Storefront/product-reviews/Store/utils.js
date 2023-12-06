
import state from "./store";


export const showAddReview=()=>{
    console.log("jkljkl")
    state.addReview={
        open:true
    }
}
export const hideAddReview=()=>{
    state.addReview={
        open:false 
    }
}
export const showSeeReview=()=>{
    state.seeReview={
        open:true
    }
}
export const hideSeeReview=()=>{
    state.seeReview={
        open:false 
    }
}