import React from "react";

const Footer = () => {
  return (
    <div className="bg-black ">
      <footer className="bg-teal-800/10 rounded-lg shadow-sm sticky bottom-0  dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4  text-center">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              WeatherAlerts
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
