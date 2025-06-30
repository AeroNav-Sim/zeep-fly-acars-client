import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to your Electron application with React!</p>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
