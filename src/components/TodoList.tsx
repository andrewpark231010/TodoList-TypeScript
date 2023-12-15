// src/components/TodoList.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../Slice/todoSlice";

interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

interface TodoListProps {
  isDone: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ isDone }) => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector((state: { todos: Todo[] }) => state.todos);

  return (
    <div>
      <h2>{isDone ? "Done...!" : "Working..."}</h2>
      {todos
        .filter((t) => t.isDone === isDone)
        .map((todo) => (
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
            key={todo.id}
          >
            <p>Title: {todo.title}</p>
            <p>Contents: {todo.contents}</p>
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                dispatch(toggleTodo(todo.id));
              }}
            >
              {isDone ? "취소" : "완료"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
