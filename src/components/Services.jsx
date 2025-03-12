import { Link } from "react-router-dom";
import useGlobalStore from "../store/useGlobalStore";

export default function Services() {
  const { serviceOptions } = useGlobalStore();
  return (
    <div className="px-6 pt-24 space-y-4">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Our Services</h1>
      <div className="space-y-2">
        {serviceOptions.map((service, index) => (
          <Link
            key={index}
            to={`/services/${index}`}
            className="block p-4 bg-green-100 hover:bg-green-200 rounded shadow-md cursor-pointer"
          >
            {service.option}
          </Link>
        ))}
      </div>
    </div>
  );
}
