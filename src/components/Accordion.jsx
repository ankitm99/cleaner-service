import { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        className="w-full text-left py-2 px-3 bg-green-700 rounded"
        onClick={() => setOpen(!open)}
      >
        Services
      </button>

      {open && (
        <div className="mt-2 space-y-2 pl-4">
          <a href="#" className="block py-1 px-2 hover:bg-green-600 rounded">
            Full House Deep Cleaning
          </a>
          <a href="#" className="block py-1 px-2 hover:bg-green-600 rounded">
            Kitchen Deep Cleaning
          </a>
          <a href="#" className="block py-1 px-2 hover:bg-green-600 rounded">
            Sofa Shampooing
          </a>
        </div>
      )}
    </div>
  );
};

export default Accordion;
