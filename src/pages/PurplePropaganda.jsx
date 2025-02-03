import React from "react";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Links from "../components/Links";

const PurplePropaganda = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <Header />
      <Links />
    </div>
  );
};

export default PurplePropaganda;