import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SiemensImg from "../../../assets/brands/siemens.png";
import PhilipsImg from "../../../assets/brands/philips.png";
import GeImg from "../../../assets/brands/ge.jpg";
import MedemImg from "../../../assets/brands/medem.png";
import MikronImg from "../../../assets/brands/mikron.jpg";
import FujifilmImg from "../../../assets/brands/fujifilm.png";
import AgfaImg from "../../../assets/brands/agfa.png";
import SamsungDistributor from "../../../assets/img/samsung.webp";
import MedikalzImg from "../../../assets/brands/medikalz_logo.jpeg";
import TMImg from "../../../assets/brands/titus_medical.jpeg";
import RSImg from "../../../assets/brands/reapsolutions_logo.jfif";
import AnalyticonImg from "../../../assets/brands/analyticon-logo.jpg";

const brands = [
  { name: "Samsung", logo: SamsungDistributor },
  { name: "Medikalz", logo: MedikalzImg },
  { name: "Titus Medical", logo: TMImg },
  { name: "Siemens", logo: SiemensImg },
  { name: "Philips Healthcare", logo: PhilipsImg },
  { name: "General Electric", logo: GeImg },
  { name: "Medem", logo: MedemImg },
  { name: "Mikron", logo: MikronImg },
  { name: "Fujifilm", logo: FujifilmImg },
  { name: "Agfa", logo: AgfaImg },
  { name: "Reap Solutions", logo: RSImg },
  { name: "Analyticon", logo: AnalyticonImg },
];

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const particles = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
};

const AssociatedBrands = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-gray-50">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#CF5D3E] mb-4 md:mb-6 tracking-wide"
          data-aos="fade-down"
        >
          Our Associated Brands
        </h2>
        <p
          className="text-base md:text-lg lg:text-xl text-center text-gray-700 mb-8 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Purchase of medical equipment and consumables should be done by
          professionals. Torigina offers the highest level of professionalism
          Pre & Post purchase, to ensure maximum satisfaction.
        </p>
        {/* Slider Component */}
        <Slider {...sliderSettings}>
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex justify-center items-center p-1" // Reduced padding
            >
              <div
                className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 relative group" // Smaller size on mobile
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Rotating Diamond Shape */}
                <div className="absolute inset-0 bg-[#CF5D3E] bg-opacity-70 transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-500 ease-in-out"></div>
                <div className="absolute inset-0 flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AssociatedBrands;
