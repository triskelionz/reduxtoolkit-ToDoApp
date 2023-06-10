import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: nanoid(),
        title: "Learn redux",
        completed: false,
      },
    ],
  },
  reducers: {
    newTodo: (state, action) => {
      state.items.push(action.payload);
    },

    list: (state, action) => {
      const { id } = action.payload;

      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },

    destroy: (state, action) => {
      const id = action.payload;

      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { newTodo, list, destroy } = todosSlice.actions;
export default todosSlice.reducer;
