import { useState } from "react";
import { useDispatch } from "react-redux";
import { newTodo } from "../redux/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddTodo = () => {
  const [title, setTitle] = useState("");
 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
   

      dispatch(newTodo({ id: nanoid(), title,completed:false }));
      setTitle("");
    } 
    
   
  

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form-input"
        placeholder="Enter your notes..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button className="form-btn">ADD</button>
    </form>
  );
};

export default AddTodo;
