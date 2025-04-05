import { useState } from "react";
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";
import "./App.css";
import Alert from "./components/Alert";
import axios from "axios";
import ForecastSummary from "./components/ForecastSummary";
import Footer from "./components/Footer";

function App() {
  const [alert, setalert] = useState(false);

  return (
    <>
      <Navbar />

      <div className="relative inset-0 -z-10 h-full w-full items-center   [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00FFFF_100%)]">
        <MainCard />
        <ForecastSummary />
        <Footer />
      </div>
    </>
  );
}

export default App;
