import Home from "./pages/Home";
import Login from "./pages/login/Index";
import ContentManagement from "./pages/AdminPanel/ContentManagement/ContentManagement";
import Users from "./pages/AdminPanel/Users/Users";
import Packages from "./pages/AdminPanel/Packages/Packages";
import Tags from "./pages/AdminPanel/Tags/Tags";
import Surah from "./pages/AdminPanel/Surah/Surah";
import Nav from "./pages/AdminPanel/Nav/Nav";
import Articles from "./pages/AdminPanel/Articles/Articles";
import News from "./pages/AdminPanel/News/News";
import Banner from "./pages/AdminPanel/Banner/Banner";

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
    path: "/adminPanel/contentManagement/nav",
    element: <Nav />,
  },
  {
    path: "/adminPanel/contentManagement/news",
    element: <News />,
  },
  {
    path: "/adminPanel/contentManagement/articles",
    element: <Articles />,
  },
  {
    path: "/adminPanel/contentManagement/banner",
    element: <Banner />,
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
