import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalStore from "../store/useGlobalStore";

export default function SidebarOption({
  label,
  isAccordion,
  subOptions,
  path,
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { setSidebarOpen } = useGlobalStore();

  return (
    <div className="mt-2">
      {/* Main Option Button */}
      <button
        className="w-full text-left py-2 px-3 bg-inherit rounded flex justify-between items-center"
        onClick={() => {
          if (isAccordion) {
            setOpen(!open);
          } else {
            navigate(path);
            setSidebarOpen(false);
          }
        }}
      >
        {label}
        {isAccordion && <span>{open ? "▲" : "▼"}</span>}
      </button>

      {/* Accordion Content */}
      {isAccordion && open && (
        <div className="mt-2 space-y-2 pl-4">
          {subOptions.map((subOption, index) => (
            <button
              key={index}
              className="block py-1 px-2 text-left"
              onClick={() => setSidebarOpen(false)}
            >
              <Link to={`/services/${index}`}>{subOption.option}</Link>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
