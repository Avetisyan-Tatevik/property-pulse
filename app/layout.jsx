import React from "react";
import "@/assets/styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rental, find property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
