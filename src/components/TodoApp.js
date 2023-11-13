import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import NavBar from "./NavBar";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilterdTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    const savedTodos = [...todos, newTodo];
    setTodos(savedTodos);
    saveToLocal(savedTodos);
  };

  const completeTodo = (id) => {
    // item => find index , clone todo , todos
    const index = todos.findIndex((item) => item.id === id);
    // clone todo:
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;

    // clone todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    saveToLocal(updatedTodos);
    
  };

  const removeTodo = (id) => {
    const remainTodos = todos.filter((t) => t.id !== id);
    setTodos(remainTodos);
    saveToLocal(remainTodos);

  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((item) => item.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    saveToLocal(updatedTodos);

  };

  const saveToLocal = (todos)=>{
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilterdTodos(todos.filter((t) => t.isCompleted));
        break;
      case "UnCompleted":
        setFilterdTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilterdTodos(todos);
        break;
    }
  };

  const selectHandler = (e) => {
    console.log(e);
    setSelectedOption(e);
    filterTodos(e.value);
  };
  return (
    <div className="container">
      <NavBar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        onChange={selectHandler}
        selectedOption={selectedOption}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
