

import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { list, destroy } from "../redux/todos/todosSlice";

const TodoList = () => {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="todoList">
        {items.map((item) => (
          <li key={item.id} className={item.completed ? "completed" : false}>
            <div className="view">
              <input
                className="list"
                type="checkbox"
                onChange={() => dispatch(list({ id: item.id }))}
              />
              <label maxlength={100}>{item.title} </label>

              <div className="btn-section">
                <button className="layout">
                  <AiFillEdit className="btn-edit" />
                </button>
                <button
                  className="layout"
                  onClick={() => dispatch(destroy(item.id))}
                >
                  <AiFillDelete className="btn-delete" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
