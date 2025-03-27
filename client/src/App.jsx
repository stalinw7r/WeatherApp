import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container bg-red-100 mx-auto my-5 p-5">
        tjos os
        <div className="currentCard border rounded-md p-2 flex flex-col md:flex-row ">
          <div className="mainInfo">wer</div>
          <div className="details">werwe</div>
        </div>
      </div>
    </>
  );
}

export default App;
