import AcademyCap from "../icons/AcademyCap";
import BookIcon from "../icons/BookIcon";
import BulbIcon from "../icons/BulbIcon";
import Section from "./Section";
import Sidebar from "./Sidebar";
import Header from "./Header";
import useGlobalStore from "../store/useGlobalStore";
import { useNavigate } from "react-router-dom";

export default function MainContent() {
  const navigate = useNavigate(); // 👈 Hook to navigate

  return (
    <>
      {/* Sidebar Component */}

      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">
          Our experienced team ensures every space is left spotless, fresh, and
          welcoming.
        </h1>
        <p className="mt-4 text-center text-gray-700">
          We specialize in deep cleaning, stain removal, and upholstery care,
          using eco-friendly products and advanced techniques.
        </p>
        <button
          onClick={() => navigate("/appointment")}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md shadow-md"
        >
          Book An Appointment →
        </button>
      </div>
      <div>
        <Section
          sectionIcon={<BookIcon className="text-green-600" />}
          label={"About Us"}
          content={
            "We specialize in deep cleaning, stain removal, and upholstery care, using eco-friendly products and advanced techniques to ensure a fresh and welcoming space."
          }
          onViewDetail={() => navigate("/about")}
        />
        <Section
          sectionIcon={<AcademyCap className="text-green-600" />}
          label={"Our Services"}
          content={
            "We specialize in deep cleaning, stain removal, and upholstery care, using eco-friendly products and advanced techniques to ensure a fresh and welcoming space."
          }
          onViewDetail={() => navigate("/services")}
        />
        <Section
          sectionIcon={<BulbIcon className="text-green-600" />}
          label={"Enquire Now"}
          content={
            "We specialize in deep cleaning, stain removal, and upholstery care, using eco-friendly products and advanced techniques to ensure a fresh and welcoming space."
          }
          onViewDetail={() => navigate("/contact")}
        />
      </div>
    </>
  );
}
