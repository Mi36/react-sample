import "./App.css";
import Header from "./components/Header";

function App() {
  const tasks = [
    { id: "25", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "26", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "27", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "28", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "29", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
    { id: "30", tex: "dsdsdsdsd", day: "dsds/dsdsd/dsdsd", reminder: "flase" },
  ];
  return (
    <div className="container">
      <Header />
      {tasks.map((task, index) => (
        <div className="task">
          <h1 key={index}>{task.tex}</h1>
          <p>{task.day}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
