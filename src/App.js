import React from "react";
import TemperatureInput from "./components/Temperatureinput";

function App() {
  return (
    <div className="container max-w-screen-sm mx-auto px-4">
      <div className="flex items-center h-screen">
        <div className="bg-cyan rounded p-4">
          <TemperatureInput scale="c" />
          <TemperatureInput scale="f" />
        </div>
      </div>
    </div>
  );
}

export default App;
