import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => dispatch(removeTodo(todo.id))}>
        remove
      </button>
    </li>
  );
}

export default TodoItem;
