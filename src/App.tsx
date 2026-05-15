import "./App.css";
import Hero from "./components/Hero.js";
import Service from "./components/Service.js";
import ServiceProvided from "./components/Provide.js";
import TradingPlatform from "./components/TradingPlatform.js";
import WhyZeroTrade from "./components/WhyZeroTrade.js";
import Roadmap from "./components/Roadmap";
import CRMBackOffice from "./components/CrmBack.js";
import Infographic from "./components/Infographic.js";
import OurServices from "./components/OurServices.js";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Hero />
      <Service />
      <ServiceProvided />
      <TradingPlatform />
      <WhyZeroTrade />
      <Roadmap />
      <CRMBackOffice />
      <Infographic />
      <OurServices />
      <ContactForm />
    </>
  );
}

export default App;
