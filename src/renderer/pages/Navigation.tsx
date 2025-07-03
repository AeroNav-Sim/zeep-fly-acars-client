import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <div className="nav-container">
      <div className="nav-brand">
        <h2>ACARS Client</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/flights">Voos</Link>
        </li>
        <li>
          <Link to="/settings">Configurações</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
