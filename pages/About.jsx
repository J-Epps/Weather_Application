import React from "react";
import { Header, Footer } from "../components";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">About</h1>
          <p className="mb-4">
            Your weather application description goes here.
          </p>
          <p className="mb-4">
            Include any relevant information about the purpose, features, and
            team behind the application.
          </p>
          <p className="mb-4">
            Feel free to style this page as per your design preferences using
            Tailwind CSS classes.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
