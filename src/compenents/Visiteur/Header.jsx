
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <Link to="/"><img src="#" alt="#" /></Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="#">Service</NavLink>
          </li>
          <li>
            <NavLink to="#">Véhicules d'occasions</NavLink>
          </li>
          <li>
            <NavLink to="#">A propos de nous </NavLink>
          </li>
          <li>
            <NavLink to="#">Avis</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="#">Connexion</Link>
      </div>
    </div>
  );
}
