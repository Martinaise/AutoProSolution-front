import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/Visiteur/HomeView";
import LoginView from "../views/Admin/LoginView";
import AdminView from "../views/Admin/AdminView";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
    },
    {
        path: "/admin",
        element: <AdminView />,
    },
    {
        path: "/admin/login",
        element: <LoginView />,
    },
])

export default routes