
function Enquiry() {

  // WHATSAPP ENQUIRY FUNCTION
  function handleSubmit(e) {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const course = form.course.value;
    const message = form.message.value;

    const whatsappMessage =
      `Hello PDS Photography Academy!\n\n` +
      `I want to enquire about a course.\n\n` +
      `Name: ${name}\n` +
      `Mobile: ${phone}\n` +
      `City: ${city}\n` +
      `Interested Course: ${course}\n` +
      `Message: ${message || "Not provided"}`;

    const whatsappNumber = "917389400519";

    const url =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank", "noopener,noreferrer");

  }

  return (
    <section
      id="enquiry"
      className="scroll-mt-28 bg-[#FFFDF8] px-5 py-16 sm:px-8 lg:px-10"
    >

      {/* MAIN GREEN CONTAINER */}
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#06472E] px-6 py-10 shadow-xl sm:px-10 lg:px-12 lg:py-14">

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-14">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">

            <p className="mb-5 font-['Poppins'] text-xs font-semibold tracking-[0.2em] text-[#FFE000]">
              LET'S CREATE YOUR NEXT CHAPTER
            </p>

            <h2 className="font-['Times_New_Roman'] text-4xl font-bold leading-tight text-white sm:text-5xl">
              Your Creative Future.
              <span className="mt-2 block">
                Your First Step.
              </span>
            </h2>

            <p className="mt-7 max-w-lg font-['Poppins'] text-sm leading-8 text-[#E3F0E6]">
              Tell us what you want to learn. Share your
              details and connect directly with PDS
              Photography Academy through WhatsApp.
            </p>

            {/* DIVIDER */}
            <div className="my-8 h-px w-full bg-white/20"></div>

            {/* PHONE */}
            <div className="mb-8">

              <p className="mb-2 font-['Poppins'] text-xs font-semibold tracking-wide text-white">
                CALL / WHATSAPP
              </p>

              <a
                href="tel:+917389400519"
                className="font-['Times_New_Roman'] text-2xl font-bold text-[#FFE000] hover:underline"
              >
                +91 73894 00519
              </a>

            </div>

            {/* LOCATION */}
            <div>

              <h3 className="font-['Times_New_Roman'] text-xl font-semibold text-white">
                Indore, Madhya Pradesh
              </h3>

              <p className="mt-2 font-['Poppins'] text-sm text-[#D4E6D9]">
                Contact the academy for the full address.
              </p>

            </div>

          </div>


          {/* RIGHT SIDE - FORM */}
          <div className="w-full lg:w-1/2">

            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap gap-4"
            >

              {/* FULL NAME */}
              <div className="w-full sm:w-[calc(50%-8px)]">

                <label
                  htmlFor="name"
                  className="mb-2 block font-['Poppins'] text-sm font-medium text-white"
                >
                  Full Name *
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 font-['Poppins'] text-sm text-[#063B27] outline-none focus:border-[#FFE000]"
                />

              </div>


              {/* MOBILE NUMBER */}
              <div className="w-full sm:w-[calc(50%-8px)]">

                <label
                  htmlFor="phone"
                  className="mb-2 block font-['Poppins'] text-sm font-medium text-white"
                >
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="10-digit mobile"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 font-['Poppins'] text-sm text-[#063B27] outline-none focus:border-[#FFE000]"
                />

              </div>


              {/* CITY */}
              <div className="w-full sm:w-[calc(50%-8px)]">

                <label
                  htmlFor="city"
                  className="mb-2 block font-['Poppins'] text-sm font-medium text-white"
                >
                  City *
                </label>

                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Your city"
                  required
                  className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 font-['Poppins'] text-sm text-[#063B27] outline-none focus:border-[#FFE000]"
                />

              </div>


              {/* COURSE */}
              <div className="w-full sm:w-[calc(50%-8px)]">

                <label
                  htmlFor="course"
                  className="mb-2 block font-['Poppins'] text-sm font-medium text-white"
                >
                  Interested Course *
                </label>

                <select
                  id="course"
                  name="course"
                  defaultValue=""
                  required
                  className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 font-['Poppins'] text-sm text-[#063B27] outline-none focus:border-[#FFE000]"
                >

                  <option value="" disabled>
                    Select a course
                  </option>

                  <option value="Photography">
                    Photography
                  </option>

                  <option value="Cinematography">
                    Cinematography
                  </option>

                  <option value="Video Editing">
                    Video Editing
                  </option>

                  <option value="Photoshop & AI">
                    Photoshop & AI
                  </option>

                  <option value="Content Creation">
                    Content Creation
                  </option>

                </select>

              </div>


              {/* MESSAGE */}
              <div className="w-full">

                <label
                  htmlFor="message"
                  className="mb-2 block font-['Poppins'] text-sm font-medium text-white"
                >
                  Your Question (Optional)
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your learning goals..."
                  className="w-full resize-none rounded-lg border border-white/20 bg-white px-4 py-3 font-['Poppins'] text-sm text-[#063B27] outline-none focus:border-[#FFE000]"
                ></textarea>

              </div>


              {/* CONSENT CHECKBOX */}
              <div className="flex w-full items-start gap-3">

                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 h-4 w-4 accent-[#FFE000]"
                />

                <label
                  htmlFor="consent"
                  className="font-['Poppins'] text-xs leading-5 text-[#E3F0E6]"
                >
                  I agree to share these details with PDS
                  Photography Academy through WhatsApp
                  for my course enquiry.
                </label>

              </div>


              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#FFE000] px-6 py-4 font-['Poppins'] text-sm font-bold text-[#063B27] shadow-md transition duration-300 hover:bg-[#FFD000] hover:shadow-lg"
              >
                Prepare WhatsApp Enquiry ↗
              </button>

              {/* SMALL NOTE */}
              <p className="font-['Poppins'] text-xs leading-5 text-[#D4E6D9]">
                Your enquiry is sent only after you confirm
                the message in WhatsApp.
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Enquiry;
