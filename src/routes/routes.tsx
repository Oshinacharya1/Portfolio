import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Projects from "../pages/projects";
import Navigation from "../components/navigation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <div className="min-h-[calc(100vh-80px)] bg-red-900">
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
