import React, { useEffect } from "react";
import "./ServicesPage.css";
import gokul from "../assets/spices.jpg"

// Sample service data
const services = [
  {
    title: "Wholesale Supply",
    desc: "We provide bulk orders for retailers, restaurants, and distributors.",
  },
  {
    title: "Pan-South Delivery",
    desc: "Efficient logistics team ensuring timely deliveries.",
  },
  {
    title: "Marketing & Branding",
    desc: "Support for promoting local and regional spice brands.",
  },
];

// Scroll animation hook
const useScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const ServicesPage = () => {
  useScrollAnimation();

  return (
    <div className="services-page">
      {/* Services Grid Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section: Image Left, Text Right */}
      <section className="feature-section animate">
        <div className="feature-container">
          <div className="feature-image">
            <img src={gokul} alt="Spices" />
          </div>
          <div className="feature-text">
            <h2>Pure Spices from the Source</h2>
            <p>
              Our partnerships with farmers across India ensure that our spices are
              fresh, natural, and ethically sourced — every time.
            </p>
          </div>
        </div>
      </section>

      {/* About Section: Fade-In */}
      <section className="about-section animate fade-in">
        <h2>Why Choose Us</h2>
        <p>
          We're not just suppliers — we're partners in your growth. Our
          commitment to quality, logistics, and branding makes us the ideal choice
          for spice-based businesses.
        </p>
        <div className="youtube-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yoW4kHHH4lQ?si=HlMcXhgjQBGuGaMx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      {/* Promise Section: Slide-Up */}
      <section className="promise-section animate slide-up">
        <h2>Our Promise</h2>
        <p>
          Quality you can trust. Logistics you can rely on. Partnerships that
          scale.
        </p>
      </section>

      {/* Vision Section: Zoom-In */}
      <section className="vision-section animate zoom-in">
        <h2>Our Vision</h2>
        <p>
          To be South India's most trusted and innovative spice distribution
          network by 2030.
        </p>
      </section>
    </div>
  );
};

export default ServicesPage;
