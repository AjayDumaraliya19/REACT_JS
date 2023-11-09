import "./App.css";
import { data } from "./Commponant/Order";

function App() {
  return (
    <div className="App">
      <div>
        {data
          .filter((e) => e.status === "Pending")
          .map((e, index) => (
            <div key={index}>
              <h1>{e.Food}</h1>
              <h1>{e.Price}</h1>
              <h1>{e.status}</h1>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
