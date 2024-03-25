import { Outlet } from "react-router-dom"
import SideNavbar from "../../../compenents/Admin/SideNavbar"

const AdminView = () => {
    return (
        <div className="g-sidenav-show bg-gray-100">
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            <SideNavbar />
            <main className="main-content position-relative border-radius-lg ">
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
                    <div className="container-fluid py-1 px-3">
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 justify-content-end" id="navbar">
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <div className="text-white font-weight-bold px-0">
                                        <i className="fa fa-user me-sm-1"></i>
                                        <span className="d-sm-inline d-none">Nom prénom</span>
                                    </div>                         
                                </li>
                                <li className="nav-item d-flex align-items-center ms-4">
                                    <div className="text-white px-0">
                                        <span className="material-symbols-outlined pt-2">logout</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid py-4">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default AdminView