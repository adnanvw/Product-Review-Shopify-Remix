
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


export const showToast = (message, error) => {
    state.toast = {
        error: error,
        open: true,
        message: message
    };
};

export const hideToast = () => {
    state.toast = {
        error: false,
        open: false,
        message: ''
    };
};

export const showLoader=()=>{
    state.loader={
        open:true
    }
}
export const hideLoader=()=>{
    state.loader={
        open:false 
    }
}