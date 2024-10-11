import {configureStore} from '@reduxjs/toolkit'
import itemReducer from './Productslice'




export default configureStore({
    reducer:{
        productInfo:itemReducer
    }
})