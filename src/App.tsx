import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works
} from "./components";
import SectionWrapper from "./hoc/SectionWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat, bg-center">
          <Navbar />
          <Hero />
        </div>

        <SectionWrapper Component={About} idName="about" />
        <SectionWrapper Component={Experience} idName="experience" />
        <SectionWrapper Component={Tech} idName="tech" />
        <SectionWrapper Component={Works} idName="works" />
        <SectionWrapper Component={Feedbacks} idName="feedbacks" />

        <div className="relative z-0">
          <SectionWrapper Component={Contact} idName="contact" />
          {<SectionWrapper Component={StarsCanvas} idName="star-canvas" />}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App