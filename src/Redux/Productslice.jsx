import {createSlice} from '@reduxjs/toolkit'
const proList = createSlice({
    name: "productInfo",
    initialState:{
        item:[],
        cartItem:[]
    },
    reducers:{
        addItem:(state,action)=>{
            console.log("44444",action.payload)
            state.item.push(action.payload)
        },
        addToCart:(state,action)=>{
            const itemOne = action.payload
            const exsistingItem = state.cartItem.find(findCart=>findCart.idCategory === itemOne.idCategory)
            if(exsistingItem){
                exsistingItem.quantity+=1
            }else{
                state.cartItem.push({...itemOne, quantity:1});
            }
            
        }

    }

})
export const {addItem,addToCart} = proList.actions
export default proList.reducer