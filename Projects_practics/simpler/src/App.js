import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Data } from "./Components/Data";

function App() {
  const [data, setdata] = useState(Data);

  return (
    <div>
      <Navbar />
      <h1 className="text-center">Welcome to our website</h1>
      {Data
        .filter((e) => e.Availability === "false")
        .map((e, index) => {
          <div key={index}>
            <h2>{e.ProductName}</h2>
            <h2>{e.Price}</h2>
            <h2>{e.Description}</h2>
          </div>;
        })}
    </div>
  );
}

export default App;
