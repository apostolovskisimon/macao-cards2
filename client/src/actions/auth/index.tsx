import axios from "axios";
import { FormValues } from "../../components/Register/RegisterComponent";
import config from "../../config.json";

const api: string = config.API_URL;

export const handleRegister = async (data: FormValues) => {
  try {
    const res = await axios.post(api + "users/register", data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const handleLogin = async (
  data: FormValues,
  history: any,
  setIsLoggedIn: any
) => {
  try {
    const res = await axios.post(api + "users/login", data);
    console.log(res);
    localStorage.setItem("loggedin", "true");
    setIsLoggedIn(true);
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
