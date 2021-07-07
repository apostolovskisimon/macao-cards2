import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Board } from "./components/Board";
import Navbar from "./components/Navbar";
import Authenticate from "./components/Authenticate";
import "./styles/style.scss";
import { RootState } from "./store/store";
import { setIsLoggedIn } from "./store/slices/authSlice/authSlice";
import { useEffect } from "react";
import Onboarding from "./components/Onboarding/Onboarding";
import CreateGame from "./components/CreateGame";

function App() {
  // const socket = io("localhost:8080");

  // useEffect(() => {
  //   console.log("socket", socket);
  // }, []);
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("loggedin");
    if (isUserLoggedIn) dispatch(setIsLoggedIn(true));
    else dispatch(setIsLoggedIn(false));
  }, []);

  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/authenticate" component={Authenticate} />
        <Route exact path="/" component={Onboarding} />
        <Route exact path="/game" component={Board} />
        <Route exact path="/create" component={CreateGame} />
      </Switch>
    </Router>
  );
}

export default App;
