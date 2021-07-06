import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Board } from "./components/Board";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import "./styles/style.scss";
function App() {
  // const socket = io("localhost:8080");

  // useEffect(() => {
  //   console.log("socket", socket);
  // }, []);
  const isLoggedIn = localStorage.getItem("loggedin");

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/register"
          render={(props) =>
            isLoggedIn ? <Redirect to="/" /> : <Register props={props} />
          }
        />
        <Route path="/" component={Board} />
      </Switch>
    </Router>
  );
}

export default App;
