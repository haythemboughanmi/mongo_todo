import { useEffect, useState } from "react";
import{useDispatch, useSelector}from "react-redux"
import './App.css';
import { add_todo, delete_todo, get_todos, update_todo } from "./redux/action/action";

function App() {
  const dispatch=useDispatch()
  const [text,setText]=useState('')
  const[iscomplit,setIscomplit]=useState(false)
 useEffect(() => {
   dispatch(get_todos())
 }, [dispatch])
 const todos=useSelector((state)=>state.todos)
 const handleclick=()=>{
  var ob={
    text:text,
    iscomplit:iscomplit
  }
  dispatch(add_todo(ob))
 }
  return (
    <div className="App">
      <input onChange={(e)=>setText(e.target.value)}></input>
      <button onClick={handleclick}>add</button>
      {todos.map((e)=>
      <div>
        <h1>{e.text}</h1>
        <button onClick={()=>dispatch(delete_todo(e._id))}>delete</button>
        <button onClick={()=>dispatch(update_todo(e._id,{text}))}>edit</button>
      </div>)}
    </div>
  );
}

export default App;
