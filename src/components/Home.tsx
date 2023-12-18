// src/components/Home.tsx
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Slice/todoSlice";
import TodoList from "./TodoList";
import * as S from "../styledComponents/StyledComponents"

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

    if (!title || !contents) {
      window.alert("제목과 내용을 모두 입력하세요.");
      return;
    }

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
    <main>
      <div>
        <S.Header>
          <S.headerFont>ToDo List</S.headerFont>
        
        <S.inputForm>
          <form onSubmit={handleAddTodo}>
            <S.inputBox
              type="text"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <S.inputBox
              type="text"
              placeholder="내용을 입력하세요."
              value={contents}
              onChange={(event) => setContents(event.target.value)}
            />
            <S.submitButton  type="submit">제출</S.submitButton>
          </form>
        </S.inputForm>
        </S.Header>
      </div>
      <S.todoContainer>
        <S.todoListContainer>
      <TodoList isDone={false} />
      </S.todoListContainer>
      <S.todoListContainer>
      <TodoList isDone={true} />
      </S.todoListContainer>
      </S.todoContainer>
    </main>
  );
};

export default Home;
