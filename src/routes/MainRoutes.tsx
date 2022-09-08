import { useRoutes } from "react-router-dom"
import { About } from "../page/About"
import { Home } from "../page/Home"

export const MainRoutes = () => {
    
    return useRoutes([
        { path: "/", element: <Home/>},
        { path: "sobre/:id", element: <About/>},
    ])
}