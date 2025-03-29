import { useState } from "react";
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";
import "./App.css";
import Alert from "./components/Alert";

function App() {
  const [alert, setalert] = useState(true);

  return (
    <>
      <Navbar />

      <div class="absolute inset-0 -z-10 h-full w-full items-center  py-22 [background:radial-gradient(125%_125%_at_50%_10%,#43c3ee_40%,#085c8c_100%)]">
        {alert && <Alert />}
        <MainCard />
      </div>
    </>
  );
}

export default App;
