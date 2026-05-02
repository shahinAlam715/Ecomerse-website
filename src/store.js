import { configureStore } from '@reduxjs/toolkit'
import CounterSliceReducer from  "./Components/CounterSlice"

export default configureStore({
  reducer: {
    product: CounterSliceReducer
  }
})