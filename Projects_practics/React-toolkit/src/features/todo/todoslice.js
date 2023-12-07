/** Here file name use todoslice for naming conversion know about we use redux toolkit */
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello word..!" }],
};
export const todoslice = createSlice({
  name: "todos", // a name used in action type
  initialState,
  reducers: {},
});
