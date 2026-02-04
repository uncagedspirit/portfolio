import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BioSection from "./components/BioSection";
import RightSection from "./components/RightSection";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex h-screen overflow-hidden">
              <div className="w-[35%]">
                <BioSection />
              </div>
              <div className="w-[65%] overflow-y-auto thin-amber-scrollbar">
                <RightSection />
              </div>
            </div>
          }
        />

        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;