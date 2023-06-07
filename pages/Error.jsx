import React from "react";
import { Header, Footer } from "../components";

const ErrorPage = ({ error }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="mb-4">An error occurred:</p>
          <p className="text-red-500 mb-4">{error.message}</p>
          <p className="mb-4">Please try again later or contact support.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ErrorPage;
