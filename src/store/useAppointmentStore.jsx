import { create } from "zustand";

const useAppointmentStore = create((set) => ({
  selectedServices: [],
  selectedDate: null,
  selectedTimeSlot: null,

  setServices: (services) => set({ selectedServices: services }),
  setDate: (date) => set({ selectedDate: date }),
  setTimeSlot: (timeSlot) => set({ selectedTimeSlot: timeSlot }),

  resetAppointment: () =>
    set({ selectedServices: [], selectedDate: null, selectedTimeSlot: null }),
}));

export default useAppointmentStore;
