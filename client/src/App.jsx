import { useState } from "react";
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";
import "./App.css";
import Alert from "./components/Alert";

function App() {
  const [alert, setalert] = useState(false);

  return (
    <>
      <Navbar />

      <div className="absolute inset-0 -z-10 h-full w-full items-center  py-22 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00FFFF_100%)]">
        <div className="h-[30px]">{alert && <Alert />}</div>

        <MainCard />
      </div>
    </>
  );
}

export default App;
