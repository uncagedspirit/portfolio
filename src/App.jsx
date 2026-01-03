import React from 'react'
import BioSection from './components/BioSection'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left: BioSection stays fixed */}
      <div className="w-[35%]">
        <BioSection />
      </div>

      {/* Right: ProjectsSection scrolls */}
      <div className="w-[65%] overflow-y-auto">
        <ProjectsSection />
      </div>
    </div>
  )
}

export default App
