import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: uuidv4(),
      title: "테스트 제목 1",
      contents: "테스트 내용 1",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "테스트 제목 2",
      contents: "테스트 내용 2",
      isDone: true,
    },
    {
      id: uuidv4(),
      title: "테스트 제목 3",
      contents: "테스트 내용 3",
      isDone: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
