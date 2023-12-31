import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todos/todosSlice'



export const store = configureStore({
  reducer: {
    todos:todosSlice,
  },
})

export default store;