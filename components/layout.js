import React from "react";
// import Mainheader from "@/components/header/header";
// import Footercom from "@/components/footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Mainheader /> */}
      <main>{children}</main>
      {/* <Footercom /> */}
    </div>
  );
};

export default Layout;
