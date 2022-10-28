import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    // Use json-server to create back-end server (`json-server ./data/db.json --port 3001`)
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random integer between 0 - 14
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        // set the new solution value with the value of "word" key
        setSolution(randomSolution.word);
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {
        solution 
          && <Wordle solution={solution} />
      }
    </div>
  );
}

export default App;
