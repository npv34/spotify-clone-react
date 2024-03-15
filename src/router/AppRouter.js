import {Route, Routes} from "react-router-dom";
import Master from "../layouts/Master/Master";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/"} element={<Master/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter;