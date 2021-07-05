import { useEffect } from "react";
import { io } from "socket.io-client";
import "./styles/style.scss"
import { Cards } from './components/Cards';

function App() {
  const socket = io("localhost:8080");

  useEffect(() => {
    console.log("socket", socket);
  }, []);
  return (
    <Cards/>
  
  );
}

export default App;
