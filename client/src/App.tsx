import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = io("localhost:8080");

  useEffect(() => {
    console.log("socket", socket);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
