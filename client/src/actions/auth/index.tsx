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

export const handleLogin = async (data: FormValues, history: any) => {
  try {
    const res = await axios.post(api + "users/login", data);
    console.log(res);
    history.push("/");
    // localStorage.setItem("loggedin", "true");
  } catch (error) {
    console.log(error);
  }
};
