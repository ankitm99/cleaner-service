import { create } from "zustand";

const useGlobalStore = create((set, get) => ({
  // Default variable
  theme: "light",
  serviceOptions: [
    {
      option: "Full House Deep Cleaning",
      url: "/services",
      content:
        "Our full house deep cleaning ensures every corner of your home is sparkling clean. From floors to ceilings, we've got you covered!",
    },
    {
      option: "Kitchen Deep Cleaning",
      url: "/services",
      content:
        "We clean your kitchen thoroughly, including cabinets, countertops, appliances, and floors — making it shine and smell fresh!",
    },
    {
      option: "Sofa & Carpet Cleaning",
      url: "/services",
      content:
        "Revitalize your sofas and carpets with our deep shampooing service. Say goodbye to stains and dirt!",
    },
    {
      option: "Bathroom Deep Cleaning",
      url: "/services",
      content:
        "We sanitize and scrub your bathroom — tiles, fittings, and floors — leaving it fresh and germ-free.",
    },
    {
      option: "Commercial Deep Cleaning",
      url: "/services",
      content:
        "Tailored for offices, stores, and commercial spaces — ensuring a clean, productive environment for your team and customers.",
    },
  ],

  sidebarOpen: false,

  // Getter function
  getTheme: () => get().theme,
  getServiceOptions: () => get().serviceOptions,
  getSidebarOpen: () => get().sidebarOpen,
  // Setter function
  setServiceOptions: (serviceOptions) =>
    set({ serviceOptions: serviceOptions }),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen: sidebarOpen }),
}));

export default useGlobalStore;
