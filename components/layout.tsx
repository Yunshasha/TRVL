import React, { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ marginTop: "80px" }}>{children}</main>
      <Footer />
    </div>
  );
}
