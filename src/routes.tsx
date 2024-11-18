import Home from "./pages/Home";
import Login from "./pages/login/Index";
import ContentManagement from "./pages/AdminPanel/ContentManagement/ContentManagement";
import Users from "./pages/AdminPanel/Users/Users";
import Packages from "./pages/AdminPanel/Packages/Packages";
import Tags from "./pages/AdminPanel/Tags/Tags";
import Surah from "./pages/AdminPanel/Surah/Surah";

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
    path: "/adminPanel/contentManagement/tags",
    element: <Tags />,
  },
  {
    path: "/adminPanel/contentManagement/surah",
    element: <Surah />,
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
