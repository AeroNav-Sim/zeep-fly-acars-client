import { Link } from "react-router-dom";

const Flights = () => (
  <div className="page">
    <h1>Voos</h1>
    <p>Gerencie seus voos aqui.</p>
    <div className="flights-container">
      <div className="flight-card">
        <h3>Voo #1234</h3>
        <p>
          <strong>Origem:</strong> SBGR - São Paulo/Guarulhos
        </p>
        <p>
          <strong>Destino:</strong> SBKP - Campinas/Viracopos
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="status-active">Em Andamento</span>
        </p>
        <Link to="/flights/1234" className="btn btn-primary">
          Ver Detalhes
        </Link>
      </div>
      <div className="flight-card">
        <h3>Voo #5678</h3>
        <p>
          <strong>Origem:</strong> SBKP - Campinas/Viracopos
        </p>
        <p>
          <strong>Destino:</strong> SBGR - São Paulo/Guarulhos
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="status-completed">Concluído</span>
        </p>
        <Link to="/flights/5678" className="btn btn-primary">
          Ver Detalhes
        </Link>
      </div>
    </div>
  </div>
);

export default Flights;
