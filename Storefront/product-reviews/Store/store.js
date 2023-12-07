import { proxy } from "valtio"

const state = proxy({
    addReview: {
        open: false,
    },
    seeReview:{
        open:false 
    },
    toast: {
        open: false,
        error: false,
        message: ""
    },
    loader:{
        open:false 
    }
})


export default state