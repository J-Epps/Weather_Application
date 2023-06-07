import React from "react";
import { Header, Footer } from "../components";

const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
          <p className="mb-4">
            This is the terms of service page. Replace this text with your terms
            of service content.
          </p>
          <p className="mb-4">
            You can provide information about the terms and conditions users
            must agree to when using your website or application. Include
            details on user responsibilities, intellectual property rights,
            limitations of liability, and any other relevant terms.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
