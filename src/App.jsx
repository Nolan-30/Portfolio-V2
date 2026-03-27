import "./App.css";
import Header from "./assets/components/pages/Header";
import Footer from "./assets/components/pages/Footer";
import Home from "./assets/components/pages/Home";
import Project from "./assets/components/pages/Project";
import Stack from "./assets/components/pages/Stack";
import FadeContent from "./assets/components/animations/FadeContent";
import { ScrollProgress } from "./assets/components/animations/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      ></FadeContent>
      <Header />

      <Home />
      <Project />
      <Stack />

      <Footer />
    </>
  );
}

export default App;
