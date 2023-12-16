
import state from "./store";

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