import React from "react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="container max-w-screen-sm mx-auto px-4">
      <div className="flex items-center h-screen">
        <div className="bg-cyan rounded p-4">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
