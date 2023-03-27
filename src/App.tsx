import { Route, Routes } from "react-router-dom"
import Login from "./views/login";
import Layout from "./layout";


const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout />} />
                <Route path={"/login"} element={<Login />} />
            </Routes>
        </>
    )
}

export default App
