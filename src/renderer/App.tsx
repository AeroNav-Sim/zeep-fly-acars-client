import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { createTheme, MantineProvider, Input } from "@mantine/core";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Flights from "./components/Flights";
import FlightDetail from "./components/FlightDetail";
import Settings from "./components/Settings";
import Login from "./components/Login";
import "@mantine/core/styles.css";

// Layout component that includes navigation
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

// Create router configuration
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
