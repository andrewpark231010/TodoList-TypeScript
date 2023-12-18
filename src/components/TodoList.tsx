// src/components/TodoList.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../Slice/todoSlice";
import * as S from "../styledComponents/StyledComponents"

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
          <S.contentBox
           
            key={todo.id}
          >
            <p>Title: {todo.title}</p>
            <p>Contents: {todo.contents}</p>
            <S.buttonBox>
            <S.todoListConfirmButton
              onClick={() => {
                dispatch(toggleTodo(todo.id));
              }}
            >
              {isDone ? "취소" : "완료"}
            </S.todoListConfirmButton>
            <S.todoListDeleteButton
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              삭제
            </S.todoListDeleteButton>
            </S.buttonBox>
          </S.contentBox>
        ))}
    </div>
  );
};

export default TodoList;
