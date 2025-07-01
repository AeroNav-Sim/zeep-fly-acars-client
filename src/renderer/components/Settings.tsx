const Settings = () => (
  <div className="page">
    <h1>Configurações</h1>
    <p>Configure suas preferências.</p>
    <div className="settings-container">
      <div className="setting-group">
        <h3>Configurações do SimConnect</h3>
        <div className="setting-item">
          <label>Porta do SimConnect:</label>
          <input type="number" defaultValue={500} />
        </div>
        <div className="setting-item">
          <label>Atualização (ms):</label>
          <input type="number" defaultValue={100} />
        </div>
      </div>

      <div className="setting-group">
        <h3>Configurações da Interface</h3>
        <div className="setting-item">
          <label>Tema:</label>
          <select defaultValue="light">
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </div>
        <div className="setting-item">
          <label>Idioma:</label>
          <select defaultValue="pt-BR">
            <option value="pt-BR">Português</option>
            <option value="en-US">English</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);

export default Settings;
