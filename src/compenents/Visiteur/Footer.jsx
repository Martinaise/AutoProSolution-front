
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <h4>Horaires d'ouvertures</h4>
        <div>
            <p>Lundi</p>
            <p>Mardi</p>
            <p>Mercredi</p>
            <p>Jeudi</p>
            <p>Vendredi</p>
            <p>Samedi</p>
            <p>Dimanche</p>
        </div>
      </div>
      <div> <Link>Contact</Link></div>
      <div>
        <Link to="#">f</Link>
        <Link to="#">i</Link>
        <Link to="#">t</Link>
      </div>
    </>
  );
}
