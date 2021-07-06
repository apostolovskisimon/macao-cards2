import { useEffect } from "react";
import { io } from "socket.io-client";
import "./styles/style.scss";
import { Board } from "./components/Board";
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  const socket = io("localhost:8080");

  useEffect(() => {
    console.log("socket", socket);
  }, []);
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route  exact path="/" component={Register}/>
        <Route path="/" component={Board}/>
      </Switch>
   
    </Router>
  );
}

export default App;
