import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="py-25 px-6 bg-gray-100 rounded-lg shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">About Us</h1>

      {/* Introduction Section */}
      <p className="text-gray-700 leading-relaxed">
        Welcome to <strong>My App</strong> — where we believe that a clean space
        is a happy space. Our mission is to provide top-notch cleaning services
        that leave your home or office spotless, fresh, and rejuvenated.
      </p>

      {/* Our Vision Section */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          Our Vision
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We envision a world where everyone can enjoy a clean, healthy
          environment without the stress of doing it themselves. Our team works
          hard to deliver exceptional cleaning services tailored to your unique
          needs.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          Why Choose Us?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Expert Team:</strong> Our cleaners are trained, experienced,
            and passionate about delivering outstanding results.
          </li>
          <li>
            <strong>Eco-Friendly Products:</strong> We use safe, eco-friendly
            cleaning supplies to protect your home and the planet.
          </li>
          <li>
            <strong>Affordable Pricing:</strong> High-quality services shouldn’t
            break the bank. We offer competitive rates for all budgets.
          </li>
          <li>
            <strong>Customizable Plans:</strong> Whether it’s a one-time deep
            clean or regular maintenance, we’ve got you covered.
          </li>
        </ul>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          Meet Our Team
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Behind every clean space is a dedicated team. Our professionals are
          friendly, reliable, and committed to providing the highest standard of
          service.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ready to experience a sparkling clean space? Contact us today for a
          free quote and let us handle the mess — so you can relax and enjoy
          your space.
        </p>
        <Link to="/contact">
          <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
