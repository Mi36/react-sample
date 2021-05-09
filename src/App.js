import "./App.css";
import Header from "./components/Header";
import { FaTimes } from "react-icons/fa";
import Addtask from "./components/Addtask";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const tasks = [
    { id: "25", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "26", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "27", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "28", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "29", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "30", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
  ];

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      console.log(data);
    };
    fetchTasks();
  }, []);
  const addTask = () => {
    console.log("add task");
  };
  return (
    <Router>
      <div className="container">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/">
            <Header />
          </Route>
          <Route path="/addtask" exact component={Addtask}>
            <Addtask onAdd={addTask} />
          </Route>
        </Switch> */}
        <Header />
        <Addtask onAdd={addTask} />
        {tasks.map((task, index) => (
          <div className="task" key={task.id}>
            <h1>
              {task.tex} <FaTimes style={{ color: "red", curser: "pointer" }} />
            </h1>
            <p>{task.day}</p>
          </div>
        ))}
      </div>
    </Router>
  );
}

export default App;
