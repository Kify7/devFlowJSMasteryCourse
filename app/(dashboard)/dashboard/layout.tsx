import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2 className="text-3xl text-red-300">Dashboard Layout</h2>
      {children}
    </div>
  );
};

export default Layout;
