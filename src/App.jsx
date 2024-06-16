import { BrowserRouter } from "react-router-dom";

import {
  About,
  LogoSlider,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Team,
  CompanyBackground,
  Achievements,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <CompanyBackground />
        <Achievements />
        <LogoSlider />
        {/* <Experience />
        <Tech />
        <Works />
        <Feedbacks /> */}
        <Team />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
