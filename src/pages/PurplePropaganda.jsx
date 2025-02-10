import React from "react";
import Header from "../components/Header";
import Links from "../components/Links";
import Release from "../components/Releases";

const PurplePropaganda = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <Header />
      <Links />
    </div>
  );
};

export default PurplePropaganda;