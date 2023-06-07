import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Weather App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
