
import PDSLogo from "../assets/PDS Logo.png";
import InstagramLogo from "../assets/instalogo.png";

import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  // SOCIAL MEDIA LINKS
  const instagramURL =
    "https://www.instagram.com/pds_photography_academy/";

  const phoneNumber = "917389400519";

  const whatsappMessage = encodeURIComponent(
    "Hello PDS Photography Academy, I would like to know more about your courses."
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <>
      <footer className="bg-[#063B27] font-['Poppins'] text-white">

        {/* MAIN FOOTER */}
        <div className="mx-auto max-w-[1400px] px-5 pb-9 pt-10 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

            {/* ==================================
                BRAND SECTION
            ================================== */}
            <div>

              {/* PDS ACADEMY LOGO */}
              <a
                href="/"
                aria-label="PDS Photography Academy Home"
                className="inline-flex"
              >
                <img
                  src={PDSLogo}
                  alt="PDS Photography Academy"
                  className="h-[70px] w-[155px] rounded-lg bg-white object-contain p-2"
                />
              </a>

              {/* INSTAGRAM AND WHATSAPP
                  DIRECTLY BELOW LOGO */}
              <div className="mt-4 flex items-center gap-3">

                {/* INSTAGRAM */}
                <a
                  href={instagramURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit PDS Academy Instagram"
                  title="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white/20"
                >
                  <img
                    src={InstagramLogo}
                    alt=""
                    className="h-8 w-8 object-contain"
                  />
                </a>

                {/* WHATSAPP */}
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with PDS Academy on WhatsApp"
                  title="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20C965] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#14AD54]"
                >
                  <FaWhatsapp size={26} />
                </a>

              </div>

              {/* ACADEMY DESCRIPTION */}
              <p className="mt-5 max-w-[270px] text-[13px] leading-[1.85] text-[#D6E7DA]">
                Create your future, one frame at a time.
                Learn photography, filmmaking, editing
                and content creation through practical training.
              </p>

            </div>

            {/* ==================================
                QUICK LINKS
            ================================== */}
            <div>

              <h3 className="font-['Times_New_Roman'] text-[24px] font-bold text-[#FFE000]">
                Quick Links
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-[13px] text-[#D6E7DA]">

                <a
                  href="/"
                  className="w-fit transition-colors hover:text-[#FFE000]"
                >
                  Home
                </a>

                <a
                  href="/courses"
                  className="w-fit transition-colors hover:text-[#FFE000]"
                >
                  Courses
                </a>

                <a
                  href="/student"
                  className="w-fit transition-colors hover:text-[#FFE000]"
                >
                  Student Work
                </a>

                <a
                  href="/video-library"
                  className="w-fit transition-colors hover:text-[#FFE000]"
                >
                  Video Library
                </a>

                <a
                  href="/#reviews"
                  className="w-fit transition-colors hover:text-[#FFE000]"
                >
                  Reviews
                </a>

                <a
                  href="/#enquiry"
                  className="w-fit transition-colors hover:text-[#FFE000]"
                >
                  Enquire Now
                </a>

              </div>

            </div>

            {/* ==================================
                EXPLORE COURSES
            ================================== */}
            <div>

              <h3 className="font-['Times_New_Roman'] text-[24px] font-bold text-[#FFE000]">
                Explore Courses
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-[13px] text-[#D6E7DA]">

                {[
                  "Photography",
                  "Cinematography",
                  "Video Editing",
                  "Photoshop & AI",
                  "Content Creation",
                ].map((course) => (
                  <a
                    key={course}
                    href="/courses"
                    className="w-fit transition-colors hover:text-[#FFE000]"
                  >
                    {course}
                  </a>
                ))}

              </div>

            </div>

            {/* ==================================
                GET IN TOUCH
            ================================== */}
            <div>

              <h3 className="font-['Times_New_Roman'] text-[24px] font-bold text-[#FFE000]">
                Get in Touch
              </h3>

              <div className="mt-5 space-y-5">

                {/* LOCATION */}
                <div className="flex items-start gap-3">

                  <MapPin
                    size={19}
                    className="mt-1 shrink-0 text-[#FFE000]"
                  />

                  <p className="text-[13px] leading-6 text-[#D6E7DA]">
                    Shivom Building, M.G. Road,
                    <br />
                    Near TI Mall,
                    <br />
                    Indore, Madhya Pradesh, India
                  </p>

                </div>

                {/* PHONE */}
                <a
                  href="tel:+917389400519"
                  className="flex w-fit items-center gap-3 text-[13px] text-[#D6E7DA] transition-colors hover:text-[#FFE000]"
                >
                  <Phone
                    size={18}
                    className="text-[#FFE000]"
                  />
                  +91 73894 00519
                </a>

                {/* CHAT ON WHATSAPP BUTTON */}
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#18C96E] px-5 py-3 text-[13px] font-semibold text-[#063B27] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFE000]"
                >
                  <FaWhatsapp size={19} />
                  Chat on WhatsApp
                </a>

              </div>

            </div>

          </div>
        </div>

        {/* ==================================
            BOTTOM FOOTER
        ================================== */}
        <div className="border-t border-white/15">

          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-5 text-center text-[11px] text-[#D6E7DA] sm:px-8 md:flex-row md:text-left lg:px-10">

            <p>
              © {new Date().getFullYear()} PDS Photography Academy.
              All rights reserved.
            </p>

            <p>
              Learn. Create. Inspire.
            </p>

          </div>

        </div>

      </footer>

      {/* ==================================
          FLOATING WHATSAPP BUTTON
      ================================== */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PDS Photography Academy on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#18C96E] text-white shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#0EAA58] sm:right-7"
      >
        <FaWhatsapp size={31} />
      </a>

    </>
  );
}

export default Footer;
