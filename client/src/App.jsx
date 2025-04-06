import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";
import "./App.css";
import Alert from "./components/Alert";
import axios from "axios";
import ForecastSummary from "./components/ForecastSummary";
import Footer from "./components/Footer";

function App() {
  const [alert, setalert] = useState(false);
  const [value, setvalue] = useState("Kitchener, ON");
  const [display, setdisplay] = useState(false);
  // const [currentdata, setcurrentdata] = useState();

  useEffect(() => {
    if (value !== undefined || value !== null) {
      setdisplay(true);
    }
  }, []);

  const onValueChange = (newvalue) => {
    setvalue(newvalue);
  };
  // console.log(value);
  return (
    <>
      <div>
        <Navbar handleValue={onValueChange} />
        <div className="relative inset-0 -z-10 h-full w-full items-center   [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00FFFF_100%)]">
          {display && (
            <div>
              <MainCard city={value} />

              <Footer />
            </div>
          )}
          {!display && <div className="min-h-screen">thisi</div>}
        </div>
      </div>
    </>
  );
}

export default App;
