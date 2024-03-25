import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/Visiteur/HomeView";
import LoginView from "../views/Admin/LoginView";
import AdminView from "../views/Admin/Admin/AdminView";
import ServiceView from "../views/Admin/Services/ServiceView";
import CreateServiceView from "../views/Admin/Services/CreateServiceView";
import UpdateServiceView from "../views/Admin/Services/UpdateServiceView";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
    },
    {
        path: "/admin",
        element: <AdminView />,
        children: [
            {
                path: "services",
                element: <ServiceView />
            },
            {
                path: "new-service",
                element: <CreateServiceView />
            },
            {
                path: "update-service/:id",
                element: <UpdateServiceView />
            }
        ]
    },
    {
        path: "/admin/login",
        element: <LoginView />,
    },
])

export default routes