import MainContent from "./components/MainContent";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import useGlobalStore from "./store/useGlobalStore";
import ScrollToTop from "./components/ScrollToTop";
import Appointment from "./components/Appointment";

export default function App() {
  const { getSidebarOpen, setSidebarOpen } = useGlobalStore();
  const sidebarOpen = getSidebarOpen();
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Ensures scroll resets on route change */}
      <div className="relative h-screen">
        <div className="flex-1">
          <Header />
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* Parent route with child routes */}
            <Route path="services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
