// import "./App.css";
// import Hero from "./components/Hero.js";
// import Navbar from "./components/Navbar.js";
// import Service from "./components/Service.js";
// import ServiceProvided from "./components/Provide.js";
// import TradingPlatform from "./components/TradingPlatform.js";
// import WhyZeroTrade from "./components/WhyZeroTrade.js";
// import Roadmap from "./components/Roadmap";
// import CRMBackOffice from "./components/CrmBack.js";
// import Infographic from "./components/Infographic.js";
// import OurServices from "./components/OurServices.js";
// import ContactForm from "./components/ContactForm";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Service />
//       <ServiceProvided />
//       <TradingPlatform />
//       <WhyZeroTrade />
//       <Roadmap />
//       <CRMBackOffice />
//       <Infographic />
//       <OurServices />
//       <ContactForm />
//     </>
//   );
// }

// export default App;
// App.tsx

import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

// Home Components
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

// Pages
// import Blog from "./pages/Blog";
import Services from "../src/pages/Sevices";
import Contact from "../src/pages/Contact";
import Footer from "./components/Footer.js";
import DemoTest from "../src/pages/DemoTest.js";

function HomePage() {
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

function App() {
  const location = useLocation();

  // Hide navbar/footer on demo page
  const hideLayout = location.pathname === "/demo";
  return (
    <>
      {/* <Navbar /> */}
      {!hideLayout && <Navbar />}
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Blog */}
        {/* <Route path="/blog" element={<Blog />} /> */}

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<DemoTest />} />
      </Routes>
      {!hideLayout && <Footer />}

      {/* <Footer /> */}
    </>
  );
}

export default App;
