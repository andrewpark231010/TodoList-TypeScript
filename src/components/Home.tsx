// src/components/Home.tsx
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Slice/todoSlice";
import TodoList from "./TodoList";

interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector((state: { todos: Todo[] }) => state.todos);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContents("");
  };

  return (
    <main
      style={{
        backgroundColor: "#c3f7c9",
        padding: "10px",
      }}
    >
      <div>
        <h3>ToDo List</h3>
        <div>
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              type="text"
              placeholder="내용을 입력하세요."
              value={contents}
              onChange={(event) => setContents(event.target.value)}
            />
            <button type="submit">제출</button>
          </form>
        </div>
      </div>
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </main>
  );
};

export default Home;
