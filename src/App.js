import './App.css';
import AppRouter from "./router/AppRouter";
import {useEffect, useState} from "react";
import AuthService from "./service/auth.service";
import {useDispatch} from "react-redux";
import {setUserLogin} from "./redux/features/auth";

function App() {
  const [token, setToken] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    AuthService.getUserProfile().then(res => {
      // xu ly login thanh cong
      dispatch(setUserLogin({
        userName: res.data.display_name
      }))
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <AppRouter/>
  );
}

export default App;
