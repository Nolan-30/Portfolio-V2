import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./assets/components/pages/Header";
import Footer from "./assets/components/pages/Footer";
import Home from "./assets/components/pages/Home";
import Project from "./assets/components/pages/Project";
// import ProjectDetail from "./assets/components/pages/ProjectDetail"; // On le crée à l'étape 3
import Stack from "./assets/components/pages/Stack";
import FadeContent from "./assets/components/animations/FadeContent";
import { ScrollProgress } from "./assets/components/animations/ScrollProgress";

const MainPage = () => (
  <>
    <Home />
    <Project />
    <Stack />
  </>
);

function App() {
  return (
    <Router>
      <ScrollProgress />
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      />

      <Header />

      {/* <Routes>
  
        <Route path="/" element={<MainPage />} />

       
        <Route path="/projet/:id" element={<ProjectDetail />} />
      </Routes> */}

      <MainPage />
      <Footer />
    </Router>
  );
}

export default App;
