import SidebarOption from "./SidebarOption";
import useGlobalStore from "../store/useGlobalStore";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { getServiceOptions } = useGlobalStore();
  return (
    <div
      className={`fixed top-0 rounded-l-md right-0 h-full w-64 bg-green-800 text-white p-4 transform ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-40`}
    >
      <div className="h-12"></div>
      {/* Accordion Component */}
      <SidebarOption label="HOME" path="cleaner-service" />
      <SidebarOption label="ABOUT US" path="/about" />
      <SidebarOption
        label="SERVICES"
        isAccordion={true}
        subOptions={getServiceOptions()}
      />
      <SidebarOption label="GALLERY" />
      <SidebarOption label="VIDEO" />
      <SidebarOption label="CONTACT US" path="contact" />
      <SidebarOption label="BOOK AN APPPOINTMENT" path="appointment" />
    </div>
  );
}
