import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ScrollToUp from "./utils/ScrollToUp";
import { Toaster } from "./components/shadcn/ui/toaster";
import Auth from "./utils/auth";

const App: React.FC = () => {
  const router = useRoutes(routes);
  return (
    <>
      {/* <ScrollToUp /> */}
      {router}
      <Auth />
      <Toaster />
    </>
  );
};

export default App;
