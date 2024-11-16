import Home from "./pages/Home";
import Login from "./pages/login/Index";
import ContentManagement from "./pages/AdminPanel/ContentManagement/ContentManagement";
import Users from "./pages/AdminPanel/Users/Users";
import Packages from "./pages/AdminPanel/Packages/Packages";

const adminPanelRoutes = [
  {
    path: "/adminPanel/contentManagement",
    element: <ContentManagement />,
  },
  {
    path: "/adminPanel/contentManagement/packages",
    element: <Packages />,
  },
  {
    path: "/adminPanel/Users",
    element: <Users />,
  },
];
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  ...adminPanelRoutes,
];

export default routes;
