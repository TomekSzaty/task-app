import React from "react";
import axios from "axios";
import './App.css';


const baseURL = "http://localhost:8080/v1/tasks";

function App() {

  const [task, setTask] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTask(response.data);
    });
  }, []);

  if (!task) return null;

const thingsElements = task.map(thing => 
<div className="Tasks">
  <div className="List">
    <ul>
      <li key={thing.id}>{thing.title} :--------: {thing.content}</li>
    </ul>
  </div>
</div>
);

  return (
    <div className="App">
      <h1>Moja tablica zadań.</h1>
        {thingsElements}     
    </div>
  );
}

export default App;
