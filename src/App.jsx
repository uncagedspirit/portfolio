import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BioSection from "./components/BioSection";
import RightSection from "./components/RightSection";
import AllProjects from "./components/AllProjects";

function App() {
  const basename = import.meta.env.BASE_URL;
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
              <div className="w-full lg:w-[35%]">
                <BioSection />
              </div>
              
              <div className="w-full lg:w-[65%] lg:overflow-y-auto lg:thin-amber-scrollbar">
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