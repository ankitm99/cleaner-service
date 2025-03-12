import useGlobalStore from "../store/useGlobalStore";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const SidebarToggle = () => {
  const { getSidebarOpen, setSidebarOpen } = useGlobalStore();
  const sidebarOpen = getSidebarOpen();
  return (
    <button
      className="fixed top-3 right-4 px-4 py-2 rounded-md z-50 transition-transform duration-300 ease-in-out"
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      {/* Icon Transition */}
      <span
        className={`block text-white transition-transform duration-300 ${
          sidebarOpen ? "rotate-180 scale-110" : "rotate-0"
        }`}
      >
        {sidebarOpen ? (
          <XMarkIcon className="w-6 h-6 text-white" />
        ) : (
          <Bars3Icon className="w-8 h-8 text-green-700" />
        )}
      </span>
    </button>
  );
};
export default SidebarToggle;
