import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Home from "./assets/components/Home";
import Project from "./assets/components/Project";
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
      >
        {/* Anything placed inside this container will be fade into view */}
      </FadeContent>
      <Header />

      <Home />
      <Project />

      <Footer />
    </>
  );
}

export default App;
