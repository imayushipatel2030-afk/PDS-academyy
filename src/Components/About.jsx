import About1 from "../assets/about1.jpg";
import About2 from "../assets/about2.jpg";
import About3 from "../assets/about3.jpg";
function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-[#FFFDF8] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION 1 - INTRODUCTION */}
        <div className="mb-20 flex flex-col items-center gap-10 lg:flex-row lg:gap-16">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">

            <p className="mb-5 font-['Poppins'] text-xs font-semibold tracking-[0.25em] text-[#B68B00]">
              ABOUT PDS PHOTOGRAPHY ACADEMY
            </p>

            <h1 className="font-['Times_New_Roman'] text-4xl font-bold leading-tight text-[#063B27] sm:text-5xl lg:text-6xl">
              More Than
              <span className="block italic text-[#286C28]">
                Just Learning.
              </span>
            </h1>

            <div className="mt-5 h-1 w-24 rounded-full bg-[#FFE000]"></div>

            <p className="mt-7 font-['Poppins'] text-sm leading-8 text-gray-700 sm:text-base">
              At PDS Photography Academy, we believe creativity
              grows through curiosity, practice and real-world
              experience.
            </p>

            <p className="mt-4 font-['Poppins'] text-sm leading-8 text-gray-600">
              Based in Indore, our academy focuses on photography,
              cinematography, video editing and content creation.
              We encourage students to explore their ideas and
              develop their creative skills through practical learning.
            </p>

            <a
              href="/#enquiry"
              className="mt-8 inline-block rounded-xl bg-[#063B27] px-7 py-3 font-['Poppins'] text-sm font-semibold text-white transition hover:bg-[#078D25]"
            >
              Start Your Journey →
            </a>

          </div>

          {/* RIGHT SIDE - SAMPLE IMAGE 1 */}
          <div className="w-full lg:w-1/2">

            <div className="relative pb-5">

              <img
  src={About1}
  alt="Photography camera and creative workspace"
  className="h-[330px] w-full rounded-2xl object-cover shadow-lg sm:h-[430px]"
/>
              <div className="absolute bottom-0 left-5 rounded-xl bg-[#FFE000] px-6 py-4 shadow-md">
                <p className="font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                  Learn • Shoot • Create
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* SECTION 2 - OUR APPROACH */}
        <div className="my-20 flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-16">

          {/* TEXT */}
          <div className="w-full lg:w-1/2">

            <p className="mb-4 font-['Poppins'] text-xs font-semibold tracking-[0.25em] text-[#B68B00]">
              OUR APPROACH
            </p>

            <h2 className="font-['Times_New_Roman'] text-4xl font-bold leading-tight text-[#063B27] sm:text-5xl">
              Learn by Doing.
              <span className="block italic text-[#286C28]">
                Grow by Creating.
              </span>
            </h2>

            <p className="mt-6 font-['Poppins'] text-sm leading-8 text-gray-600 sm:text-base">
              We focus on practical training that helps students
              understand creative tools, develop technical skills
              and build confidence through projects.
            </p>

            <p className="mt-4 font-['Poppins'] text-sm leading-8 text-gray-600">
              From camera settings and lighting techniques to
              storytelling and editing, our learning approach
              encourages practice, experimentation and improvement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full border border-[#B8D4BF] bg-[#F0F7EF] px-4 py-2 font-['Poppins'] text-xs font-medium text-[#063B27]">
                Practical Training
              </span>

              <span className="rounded-full border border-[#B8D4BF] bg-[#F0F7EF] px-4 py-2 font-['Poppins'] text-xs font-medium text-[#063B27]">
                Creative Projects
              </span>

              <span className="rounded-full border border-[#B8D4BF] bg-[#F0F7EF] px-4 py-2 font-['Poppins'] text-xs font-medium text-[#063B27]">
                Mentor Guidance
              </span>

            </div>

          </div>

          {/* SAMPLE IMAGE 2 */}
          <div className="w-full lg:w-1/2">

            <img
  src={About2}
  alt="Photography learning and camera practice"
  loading="lazy"
  className="h-[330px] w-full rounded-2xl object-cover shadow-lg sm:h-[420px]"
/>
          </div>

        </div>


        {/* SECTION 3 - CREATIVE QUOTE */}
        <div className="my-20 rounded-[28px] bg-[#F0F7EF] px-7 py-14 text-center sm:px-12">

          <p className="font-['Times_New_Roman'] text-6xl leading-none text-[#D5AE34]">
            “
          </p>

          <h2 className="mx-auto max-w-3xl font-['Times_New_Roman'] text-3xl font-bold italic leading-snug text-[#063B27] sm:text-4xl">
            Creativity is not just about what you imagine.
            It is about what you learn to create.
          </h2>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#FFE000]"></div>

          <p className="mt-5 font-['Poppins'] text-xs font-semibold tracking-[0.2em] text-[#286C28]">
            THE PDS LEARNING PHILOSOPHY
          </p>

        </div>


        {/* SECTION 4 - OUR CREATIVE SPACE */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2">

            <p className="mb-4 font-['Poppins'] text-xs font-semibold tracking-[0.25em] text-[#B68B00]">
              OUR CREATIVE SPACE
            </p>

            <h2 className="font-['Times_New_Roman'] text-4xl font-bold leading-tight text-[#063B27] sm:text-5xl">
              A Place to Explore.
              <span className="block italic text-[#286C28]">
                A Space to Create.
              </span>
            </h2>

            <p className="mt-6 font-['Poppins'] text-sm leading-8 text-gray-600 sm:text-base">
              Our goal is to create a learning environment where
              students feel encouraged to experiment, ask questions
              and develop their creative abilities.
            </p>

            <p className="mt-4 font-['Poppins'] text-sm leading-8 text-gray-600">
              Whether you are beginning your photography journey
              or improving your existing skills, PDS Photography
              Academy helps you move forward with practical
              learning and creative guidance.
            </p>

            <a
              href="/#courses"
              className="mt-8 inline-block rounded-xl border-2 border-[#063B27] px-7 py-3 font-['Poppins'] text-sm font-semibold text-[#063B27] transition hover:bg-[#063B27] hover:text-white"
            >
              Explore Our Courses →
            </a>

          </div>

          {/* SAMPLE IMAGE 3 */}
          <div className="w-full lg:w-1/2">
           <img
  src={About3}
  alt="Photography equipment and creative production"
  loading="lazy"
  className="h-[330px] w-full rounded-2xl object-cover shadow-lg sm:h-[420px]"
/>
            
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
