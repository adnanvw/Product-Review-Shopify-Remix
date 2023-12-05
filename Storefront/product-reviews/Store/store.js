import { proxy } from "valtio"

const state = proxy({
    addReview: {
        open: false,
    },
    seeReview:{
        open:false 
    }
})


export default state