import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [typedLogo, setTypedLogo] = useState("");
  const logoText = "SouthSpice";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedLogo((prev) => prev + logoText[currentIndex]);
      currentIndex++;
      if (currentIndex === logoText.length) {
        clearInterval(typingInterval);
      }
    }, 150);

    // Remove overlay and blur after 3 seconds
    const hideOverlay = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(hideOverlay);
    };
  }, []);

  return (
    <>
      {/* ✅ Overlay with blur effect */}
      {showOverlay && (
        <div className="overlay-blur">
          <div className="logo-overlay">
            {logoText.split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                {char}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Navbar */}
      <nav>
        <div className="container">
          <Link to="/" className="logo">
            SouthSpice
          </Link>
          <ul className={`nav-links ${showMenu ? "show" : ""}`}>
            {["Home", "Products", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setShowMenu(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <span className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? "✖" : "☰"}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
