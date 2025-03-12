import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // Detects route change

  useEffect(() => {
    window.scrollTo(0, 0); // ✅ Scroll to the top of the page
  }, [pathname]); // Runs on route change

  return null; // It doesn't render anything
}
