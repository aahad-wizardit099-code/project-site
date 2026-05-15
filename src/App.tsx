import "./App.css";
import Hero from "./components/Hero";
import Service from "./components/Service";
import ServiceProvided from "./components/Provide";
import TradingPlatform from "./components/TradingPlatform";
import WhyZeroTrade from "./components/WhyZeroTrade";
import Roadmap from "./components/Roadmap";
import CRMBackOffice from "./components/CRMBack";
import Infographic from "./components/Infographic";
import OurServices from "./components/OurServices";
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
