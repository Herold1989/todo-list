import React, {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai"
import ToDo from "./ToDo";

  const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`}

function App() {

  const [todos, setTodos] =useState(["Learn React", "Clean the Dishes"])

  return (
    <div className={style.bg}>
    <div className={style.container}>
      <h3 className={style.heading}>To-Do APP</h3>
      <form className={style.form}>
        <input className={style.input} type="text" placeholder="Add To-Do" />
        <button className={style.button}><AiOutlinePlus size = {30}/></button>
      </form>
      <ul>
        <ToDo/>
      </ul>
    </div>

    </div>
  );
}

export default App;
