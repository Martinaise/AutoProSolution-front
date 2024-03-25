import { NavLink } from "react-router-dom"

const SideNavbar = () => {
    return (
        <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
                    <img src="/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                    <span className="ms-1 font-weight-bold">Garage V. Parrot</span>
                </a>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/services">
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-symbols-outlined text-primary text-lg opacity-10">construction</i>
                            </div>
                            <span className="nav-link-text ms-1">Services</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-symbols-outlined text-primary text-lg opacity-10">contact_mail</i>
                            </div>
                            <span className="nav-link-text ms-1">Contacts</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-symbols-outlined text-primary text-lg opacity-10">garage</i>
                            </div>
                            <span className="nav-link-text ms-1">Voitures</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-symbols-outlined text-primary text-lg opacity-10">person</i>
                            </div>
                            <span className="nav-link-text ms-1">Utilisateurs</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-symbols-outlined text-primary text-lg opacity-10">reviews</i>
                            </div>
                            <span className="nav-link-text ms-1">Avis clients</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideNavbar