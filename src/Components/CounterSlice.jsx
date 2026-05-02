import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'product',
   initialState: {
    carItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
   
  },
  reducers: {
    addtoCart: (state, action) => {
      
      let findproduct = state.carItem.findIndex((item)=>

          item.id == action.payload.id

      )
       if (findproduct !== -1) {

        state.carItem[findproduct].quntity += 1

        localStorage.setItem("cart",JSON.stringify(state.carItem))
        
       } else {
        
        state.carItem =[...state.carItem, action.payload]

        localStorage.setItem("cart", JSON.stringify(state.carItem))

       }

      

    },

    increment: (state, action)=>{
      
      if ( state.carItem[action.payload].quntity < 10) {
        
        state.carItem[action.payload].quntity += 1

        localStorage.setItem("cart", JSON.stringify(state.carItem))
      }


    },

    decrement: (state, action)=>{

      if ( state.carItem[action.payload].quntity > 1) {
        
        state.carItem[action.payload].quntity -= 1
         localStorage.setItem("cart", JSON.stringify(state.carItem))
      }
    },

    productRemove: (state, action)=>{
        state.carItem.splice(action.payload, 1)
         localStorage.setItem("cart", JSON.stringify(state.carItem))
    }


  
  },
})


export const { addtoCart, increment, decrement, productRemove} = CounterSlice.actions

export default CounterSlice.reducer