import React from "react";
import { Settings, Header, Footer } from "../components";

const SettingsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Settings</h1>
          <Settings />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SettingsPage;
