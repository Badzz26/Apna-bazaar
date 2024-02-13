import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="bg-light" style={{ minHeight: "70vh" }}>{children}</main>
    </div>
  );
};

export default Layout;
