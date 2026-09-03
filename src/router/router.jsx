import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import ProjectDetailPage from "../pages/ProjectDetailPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import PhotographyPage from "../pages/PhotographyPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import MaintenancePage from "../pages/MaintenancePage.jsx";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MaintenancePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "projects/:slug",
        element: <ProjectDetailPage />,
      },
      {
        path: "photography",
        element: <PhotographyPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "maintenance",
        element: <MaintenancePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
