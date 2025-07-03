import { useParams, useNavigate } from "react-router-dom";

const FlightDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/flights");
  };

  return (
    <div className="page">
      <div className="page-header">
        <button className="btn btn-secondary" onClick={handleGoBack}>
          ← Voltar aos Voos
        </button>
        <h1>Detalhes do Voo #{id}</h1>
      </div>

      <div className="flight-details">
        <div className="detail-section">
          <h3>Informações do Voo</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Número do Voo:</label>
              <span>#{id}</span>
            </div>
            <div className="detail-item">
              <label>Aeronave:</label>
              <span>Boeing 737-800</span>
            </div>
            <div className="detail-item">
              <label>Origem:</label>
              <span>SBGR - São Paulo/Guarulhos</span>
            </div>
            <div className="detail-item">
              <label>Destino:</label>
              <span>SBKP - Campinas/Viracopos</span>
            </div>
            <div className="detail-item">
              <label>Status:</label>
              <span className="status-active">Em Andamento</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Dados de Voo</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Altitude Atual:</label>
              <span>FL350 (35,000 ft)</span>
            </div>
            <div className="detail-item">
              <label>Velocidade:</label>
              <span>450 kts</span>
            </div>
            <div className="detail-item">
              <label>Combustível:</label>
              <span>75%</span>
            </div>
            <div className="detail-item">
              <label>Tempo de Voo:</label>
              <span>1h 23m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
