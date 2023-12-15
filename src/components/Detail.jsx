import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Detail component
const Detail = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return <div>해당하는 TodoList가 없습니다.</div>;
  }

  return (
    <div>
      <h2>상세 페이지</h2>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.body}</p>
        <button>
          <Link to="/">이전</Link>
        </button>
      </div>
    </div>
  );
};

export default Detail;
