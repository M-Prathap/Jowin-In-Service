import "./App.css";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TrustedPartner from "./components/TrustedPartnerSection/TrustedPartner";
import CoreServices from "./components/CoreServices/CoreServices";
import Contact from "./components/Content/Contact.js";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <ServicesSection />
      <TrustedPartner />
      <CoreServices />
      <Contact />
      <footer>
        <p>Copyright Velocity Inc.Made in Webflow. </p>
      </footer>
    </div>
  );
}

export default App;
