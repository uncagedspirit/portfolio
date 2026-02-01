import React from "react";
import BioSection from "./components/BioSection";
import RightSection from "./components/RightSection";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[35%]">
        <BioSection />
      </div>

      <div className="w-[65%] overflow-y-auto thin-amber-scrollbar">
        <RightSection />
      </div>
    </div>
  );
}

export default App;
