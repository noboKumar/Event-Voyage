import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <div>
      <header className="sticky top-0 z-10">
        <NavBar></NavBar>
      </header>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
