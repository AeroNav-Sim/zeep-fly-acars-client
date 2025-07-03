import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { createTheme, MantineProvider, Input } from "@mantine/core";
// import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import FlightDetail from "./pages/FlightDetail";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import "@mantine/core/styles.css";

const RootLayout = () => {
  return (
    <div className="app">
      {/* <Navigation /> */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "flights",
        element: <Flights />,
      },
      {
        path: "flights/:id",
        element: <FlightDetail />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

const theme = createTheme({
  black: "#f1f1f1",
  white: "#1a1a1a",
  fontFamily: "Inter, sans-serif",
  primaryColor: "blue",
  primaryShade: 6,
  components: {
    Input: Input.extend({
      styles: {
        input: {
          backgroundColor: "rgba(35, 119, 201, 0.1)",
          color: "white",
        },
      },
    }),
  },
});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
