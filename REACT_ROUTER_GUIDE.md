# Guia do React Router no Projeto Electron

Este guia explica como o React Router foi implementado no projeto ACARS Client e como você pode usá-lo.

## Instalação

Primeiro, instale as dependências necessárias:

```bash
npm install react-router-dom @types/react-router-dom
```

## Estrutura Implementada

### 1. Configuração Principal (`App.tsx`)

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/flights/:id" element={<FlightDetail />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
```

### 2. Navegação (`Navigation.tsx`)

```tsx
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
```

## Hooks Úteis do React Router

### 1. `useNavigate` - Navegação Programática

```tsx
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/flights"); // Navega para /flights
    navigate("/flights/123"); // Navega para detalhes do voo
    navigate(-1); // Volta uma página
  };

  return <button onClick={handleClick}>Navegar</button>;
};
```

### 2. `useParams` - Parâmetros de URL

```tsx
import { useParams } from "react-router-dom";

const FlightDetail = () => {
  const { id } = useParams(); // Pega o parâmetro :id da URL

  return <div>Detalhes do voo #{id}</div>;
};
```

### 3. `useLocation` - Informações da Localização Atual

```tsx
import { useLocation } from "react-router-dom";

const MyComponent = () => {
  const location = useLocation();

  console.log(location.pathname); // Caminho atual
  console.log(location.search); // Query string
  console.log(location.hash); // Hash da URL

  return <div>Página atual: {location.pathname}</div>;
};
```

## Tipos de Rotas

### 1. Rotas Simples

```tsx
<Route path="/" element={<Home />} />
<Route path="/flights" element={<Flights />} />
```

### 2. Rotas com Parâmetros

```tsx
<Route path="/flights/:id" element={<FlightDetail />} />
```

### 3. Rotas Aninhadas (Nested Routes)

```tsx
<Route path="/flights" element={<Flights />}>
  <Route path=":id" element={<FlightDetail />} />
  <Route path="new" element={<NewFlight />} />
</Route>
```

### 4. Rotas com Wildcard

```tsx
<Route path="*" element={<NotFound />} />
```

## Navegação com Links

### Link Simples

```tsx
import { Link } from "react-router-dom";

<Link to="/flights">Ver Voos</Link>;
```

### Link com Estado

```tsx
<Link to="/flights/123" state={{ from: "dashboard" }}>
  Ver Detalhes
</Link>
```

### Link com Query String

```tsx
<Link to="/flights?status=active&type=commercial">Voos Ativos</Link>
```

## Considerações para Electron

### 1. BrowserRouter vs HashRouter

- **BrowserRouter**: Usa a API History do navegador (recomendado)
- **HashRouter**: Usa hash na URL (#) - útil se você tiver problemas com o BrowserRouter no Electron

```tsx
// Se precisar usar HashRouter
import { HashRouter } from "react-router-dom";

<HashRouter>{/* suas rotas */}</HashRouter>;
```

### 2. Integração com o Main Process

Se precisar navegar programaticamente do main process:

```tsx
// No main process
mainWindow.webContents.send("navigate", "/flights");

// No renderer process
ipcRenderer.on("navigate", (event, path) => {
  navigate(path);
});
```

## Exemplos Práticos

### 1. Página com Breadcrumbs

```tsx
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumbs">
      <Link to="/">Início</Link>
      {pathnames.map((name, index) => (
        <span key={name}>
          {" > "}
          <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>{name}</Link>
        </span>
      ))}
    </nav>
  );
};
```

### 2. Proteção de Rotas

```tsx
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = checkAuth(); // sua lógica de auth

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Uso
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  }
/>;
```

### 3. Loading States

```tsx
import { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

<Route
  path="/lazy"
  element={
    <Suspense fallback={<div>Carregando...</div>}>
      <LazyComponent />
    </Suspense>
  }
/>;
```

## Dicas e Boas Práticas

1. **Organização**: Mantenha os componentes de página em arquivos separados
2. **Lazy Loading**: Use `React.lazy()` para carregar componentes sob demanda
3. **Error Boundaries**: Implemente error boundaries para capturar erros de roteamento
4. **SEO**: Considere usar `react-helmet` para meta tags dinâmicas
5. **Analytics**: Integre analytics para rastrear navegação dos usuários

## Troubleshooting

### Problema: Página não carrega no Electron

**Solução**: Verifique se está usando `BrowserRouter` e se o Electron está configurado corretamente.

### Problema: Links não funcionam

**Solução**: Certifique-se de que os componentes estão dentro do `BrowserRouter`.

### Problema: Parâmetros não são capturados

**Solução**: Verifique se a rota está definida corretamente com `:paramName`.

## Recursos Adicionais

- [Documentação oficial do React Router](https://reactrouter.com/)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [Electron + React Router](https://www.electronjs.org/docs/tutorial/security)
