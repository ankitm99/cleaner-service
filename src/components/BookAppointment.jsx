import { useState } from "react";
import useAppointmentStore from "../store/useAppointmentStore";

export default function BookAppointment() {
  const servicesList = [
    "Full House Deep Cleaning",
    "Kitchen Deep Cleaning",
    "Sofa Shampooing & Carpet",
    "Bathroom Deep Cleaning",
    "Commercial Deep Cleaning",
  ];

  const timeSlots = ["8am-11am", "11am-2pm", "3pm-6pm", "6pm-9pm"];

  const { setServices, setDate, setTimeSlot } = useAppointmentStore();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [tempServices, setTempServices] = useState([]);
  const [tempDate, setTempDate] = useState("");
  const [tempTimeSlot, setTempTimeSlot] = useState("");

  // Handle service selection toggle
  const toggleService = (service) => {
    const updatedServices = tempServices.includes(service)
      ? tempServices.filter((s) => s !== service)
      : [...tempServices, service];

    setTempServices(updatedServices);
  };

  // Send WhatsApp Message
  const sendWhatsAppMessage = () => {
    if (
      !name ||
      !contact ||
      !tempServices.length ||
      !tempDate ||
      !tempTimeSlot
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setServices(tempServices);
    setDate(tempDate);
    setTimeSlot(tempTimeSlot);

    const message = `Hello! I want to book an appointment.\n\nName: ${name}\nAddress: ${contact}\nServices: ${tempServices.join(
      ", "
    )}\nDate: ${tempDate}\nTime Slot: ${tempTimeSlot}`;

    const whatsappNumber = "918408924162"; // Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Book Appointment
      </h1>

      {/* User Name Input */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Your Name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="p-2 border rounded w-full"
        />
      </div>

      {/* address Input */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <textarea
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter your address"
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Service Selection */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Select Services</h2>
        <div className="space-y-2">
          {servicesList.map((service, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={tempServices.includes(service)}
                onChange={() => toggleService(service)}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Date Picker */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Select Date</h2>
        <input
          type="date"
          value={tempDate}
          onChange={(e) => setTempDate(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Time Slot Picker */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Select Time Slot</h2>
        <select
          value={tempTimeSlot}
          onChange={(e) => setTempTimeSlot(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">Select Time Slot</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      {/* Book Appointment Button */}
      <button
        onClick={sendWhatsAppMessage}
        className="mt-4 px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
      >
        Book Appointment
      </button>
    </div>
  );
}
