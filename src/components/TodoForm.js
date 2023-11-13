import { useEffect, useRef, useState } from "react";
const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // add entered input to todos
    if (!input) {
      alert("enter todo!");
      return;
    }
    props.submitTodo(input); //add or edit
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? "update value ..." : "add new todo..."}
          ref={inputRef}
        />
        <button type="submit"
        className={`btn ${props.edit? "":"addTodo"}`}>{props.edit ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default TodoForm;
