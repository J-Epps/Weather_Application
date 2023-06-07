import React from "react";
import { Header, Footer } from "../components";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">
            This is the privacy policy page. Replace this text with your privacy
            policy content.
          </p>
          <p className="mb-4">
            You can provide information about how you collect, use, and protect
            user data, as well as any third-party services or cookies used on
            your website.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
