import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToFlights = () => {
    navigate("/flights");
  };

  const handleNavigateToSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="page">
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao ACARS Client!</p>
      <div className="features">
        <div className="feature">
          <h3>🎯 Rastreamento de Voos</h3>
          <p>Monitore seus voos em tempo real com integração ao SimConnect.</p>
          <button className="btn btn-primary" onClick={handleNavigateToFlights}>
            Ver Voos
          </button>
        </div>
        <div className="feature">
          <h3>📊 Relatórios Detalhados</h3>
          <p>Gere relatórios completos de suas operações de voo.</p>
          <button className="btn btn-secondary">Gerar Relatório</button>
        </div>
        <div className="feature">
          <h3>⚙️ Configurações Avançadas</h3>
          <p>Personalize o cliente conforme suas necessidades.</p>
          <button
            className="btn btn-primary"
            onClick={handleNavigateToSettings}
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
