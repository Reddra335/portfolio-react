import { useState } from "react";
import { ToastProvider } from "./components/ui/ToastProvider";
import GridBackground from "./components/layout/GridBackground";
import ProgressBar from "./components/layout/ProgressBar";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import LabPanel from "./components/layout/LabPanel";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Work from "./components/sections/Work";
import LabNotes from "./components/sections/LabNotes";
import Testimonials from "./components/sections/Testimonials";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="relative">
        <ProgressBar />
        <GridBackground />
        <Header
          onMenuOpen={() => setSidebarOpen(true)}
          onPanelOpen={() => setPanelOpen(true)}
        />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <LabPanel open={panelOpen} onClose={() => setPanelOpen(false)} />

        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Work />
          <LabNotes />
          <Testimonials />
        </main>

        <Footer />
      </div>
    </ToastProvider>
  );
}
