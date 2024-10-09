import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Preloader from "../components/preloader";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the duration (in milliseconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="m-4 p-4">
        <Navbar />
      </div>
      {loading ? (
        <Preloader /> // Show Preloader when loading
      ) : (
        <Outlet /> // Show page content when not loading
      )}
      <Footer />
    </>
  );
};

export default RootLayout;