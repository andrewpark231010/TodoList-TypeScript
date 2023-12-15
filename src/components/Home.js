import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Slice/todoSlice";
import TodoList from "./TodoList";

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
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
        <h3>INPUT 영역</h3>
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
}

export default Home;
