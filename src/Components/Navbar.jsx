
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import PdsLogo from "../assets/PDS Logo.png";
import WhyPDS from "./Whypds";

function Navbar() {
  const [showWhyPDS, setShowWhyPDS] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLink =
    "relative whitespace-nowrap py-2 text-[11px] font-extrabold uppercase tracking-[1px] text-[#063122] transition-colors hover:text-[#078D25]";

  const activeLine =
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#FFE000]";

  function closeMenu() {
    setShowMobileMenu(false);
  }

  function goToSection(sectionId) {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: sectionId },
      });
    } else {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (location.pathname === "/" && sectionId) {
      const timer = setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        window.history.replaceState(
          window.history.state,
          "",
          window.location.href
        );
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.state]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex h-[65px] w-[145px] shrink-0 -translate-x-2 items-center justify-center sm:h-[75px] sm:w-[170px] xl:w-[185px]"
          >
            <img
              src={PdsLogo}
              alt="PDS Photography Academy"
              className="h-full w-full object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-3 lg:flex xl:gap-6">

            <Link
              to="/"
              className={`${navLink} ${
                location.pathname === "/" ? activeLine : ""
              }`}
            >
              HOME
            </Link>

            <Link
              to="/courses"
              className={`${navLink} ${
                location.pathname === "/courses" ? activeLine : ""
              }`}
            >
              COURSES
            </Link>

            <Link
              to="/student"
              className={`${navLink} ${
                location.pathname === "/student" ? activeLine : ""
              }`}
            >
              STUDENT WORK
            </Link>

            <Link
              to="/vediolibrary"
              className={`${navLink} ${
                location.pathname === "/vediolibrary"
                  ? activeLine
                  : ""
              }`}
            >
              VIDEO LIBRARY
            </Link>

            <button
              type="button"
              onClick={() => goToSection("reviews")}
              className={navLink}
            >
              REVIEWS
            </button>

            <button
              type="button"
              onClick={() => setShowWhyPDS(true)}
              className={navLink}
            >
              WHY PDS?
            </button>

          </nav>

          {/* Desktop Enquiry Button */}
          <button
            type="button"
            onClick={() => goToSection("enquiry")}
            className="hidden shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-[#063B27] px-5 py-3 font-['Poppins'] text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#078D25] lg:inline-flex xl:px-7"
          >
            Enquire Now
          </button>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Toggle navigation menu"
            aria-expanded={showMobileMenu}
            className="rounded-md border border-gray-200 px-3 py-2 text-2xl text-[#063122] lg:hidden"
          >
            {showMobileMenu ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile / Tablet Dropdown */}
        {showMobileMenu && (
          <nav className="flex max-h-[75vh] flex-col gap-4 overflow-y-auto border-t border-gray-100 bg-white px-6 py-5 text-xs font-extrabold tracking-[1px] text-[#063122] lg:hidden">

            <Link to="/" onClick={closeMenu}>
              HOME
            </Link>

            <Link to="/courses" onClick={closeMenu}>
              COURSES
            </Link>

            <Link to="/student" onClick={closeMenu}>
              STUDENT WORK
            </Link>

            <Link to="/vediolibrary" onClick={closeMenu}>
              VIDEO LIBRARY
            </Link>

            <button
              type="button"
              className="text-left"
              onClick={() => goToSection("reviews")}
            >
              REVIEWS
            </button>

            <button
              type="button"
              className="text-left"
              onClick={() => {
                setShowWhyPDS(true);
                closeMenu();
              }}
            >
              WHY PDS?
            </button>

            <button
              type="button"
              onClick={() => goToSection("enquiry")}
              className="bg-[#FFE000] px-5 py-3 text-center"
            >
              ENQUIRE NOW ↗
            </button>

          </nav>
        )}
      </header>

      {/* Why PDS Popup */}
      {showWhyPDS && (
        <WhyPDS onClose={() => setShowWhyPDS(false)} />
      )}
    </>
  );
}

export default Navbar;
