import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "UnCompleted", label: "UnCompleted" },
];
const NavBar = ({ unCompletedTodos, onChange, selectedOption }) => {
  if (!unCompletedTodos)
    return (
      <header>
        <h2>Set Your Today Todos...!</h2>
      </header>
    );
  return (
    <header>
      <span>{unCompletedTodos}</span>
      <h2>Are Not Completed.</h2>
      <Select
        onChange={onChange}
        value={selectedOption}
        options={options}
        className="select"
      />

      {/* <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="UnCompleted">UnCompleted</option>
      </select> */}
    </header>
  );
};

export default NavBar;
