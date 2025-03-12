import { useParams, Link } from "react-router-dom";
import useGlobalStore from "../store/useGlobalStore";

export default function ServiceDetails() {
  const { serviceOptions } = useGlobalStore();
  const { id } = useParams(); // Get service ID from URL
  const service = serviceOptions[id];

  if (!service) return <h2 className="text-red-500">Service not found!</h2>;

  return (
    <div className="px-6 py-24 space-y-4">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        {service.option}
      </h1>
      <p className="text-gray-700 leading-relaxed">{service.content}</p>
    </div>
  );
}
