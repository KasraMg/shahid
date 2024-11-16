import React from "react";
import Topbar from "../components/modules/topbar/Topbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Topbar />
      <div
      dir="rtl"
        className="mt-20 rounded-t-[120px] md:px-10 xs:!px-4 px-24 sm:pt-10 pt-20 bg-white" 
      >
        {props.children}
      </div>
    </>
  );
};

export default Layout;
