
import photography from "../assets/photography.png";
import Cinematography from "../assets/cinematography.png";
import Editing from "../assets/editing.png";
import Photoshop from "../assets/photoshop.png";

function Courses() {
  return (
    <section
      id="courses"
      className="scroll-mt-24 bg-[#FFFDF8] px-5 pt-5 pb-8 sm:px-8 sm:pt-6 lg:px-10 lg:pt-4 lg:pb-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-6 text-center">

          <p className="mb-2 font-['Poppins'] text-xs font-bold tracking-widest text-[#B68B00]">
            EXPLORE OUR COURSES
          </p>

          <h2 className="font-['Times_New_Roman'] text-[32px] font-bold leading-tight text-[#063B27] sm:text-[40px] lg:text-[46px]">
            Learn. Create.
            <span className="italic text-[#078D25]">
              {" "}Grow.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl font-['Poppins'] text-sm leading-6 text-gray-600">
            Discover creative courses designed to help you
            learn practical skills and bring your ideas to life.
          </p>

        </div>

        {/* ALL COURSE CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* CARD 1 - PHOTOGRAPHY */}
          <a
            href="/courses"
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={photography}
                alt="Photography Course"
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-48 lg:h-44 xl:h-48"
              />
            </div>

            <div className="p-4">

              <h3 className="font-['Times_New_Roman'] text-[22px] font-bold text-[#063B27]">
                Photography
              </h3>

              <p className="mt-2 font-['Poppins'] text-xs text-gray-600">
                Camera • Lighting • Composition
              </p>

              <p className="mt-3 font-['Poppins'] text-sm font-semibold text-[#078D25] group-hover:text-[#B68B00]">
                Explore Course ↗
              </p>

            </div>
          </a>

          {/* CARD 2 - CINEMATOGRAPHY */}
          <a
            href="/courses"
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={Cinematography}
                alt="Cinematography Course"
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-48 lg:h-44 xl:h-48"
              />
            </div>

            <div className="p-4">

              <h3 className="font-['Times_New_Roman'] text-[22px] font-bold text-[#063B27]">
                Cinematography
              </h3>

              <p className="mt-2 font-['Poppins'] text-xs text-gray-600">
                Filmmaking • Camera • Storytelling
              </p>

              <p className="mt-3 font-['Poppins'] text-sm font-semibold text-[#078D25] group-hover:text-[#B68B00]">
                Explore Course ↗
              </p>

            </div>
          </a>

          {/* CARD 3 - VIDEO EDITING */}
          <a
            href="/courses"
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={Editing}
                alt="Video Editing Course"
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-48 lg:h-44 xl:h-48"
              />
            </div>

            <div className="p-4">

              <h3 className="font-['Times_New_Roman'] text-[22px] font-bold text-[#063B27]">
                Video Editing
              </h3>

              <p className="mt-2 font-['Poppins'] text-xs text-gray-600">
                Editing • Colour • Creative Films
              </p>

              <p className="mt-3 font-['Poppins'] text-sm font-semibold text-[#078D25] group-hover:text-[#B68B00]">
                Explore Course ↗
              </p>

            </div>
          </a>

          {/* CARD 4 - PHOTOSHOP */}
          <a
            href="/courses"
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={Photoshop}
                alt="Photoshop and Photo Editing Course"
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-48 lg:h-44 xl:h-48"
              />
            </div>

            <div className="p-4">

              <h3 className="font-['Times_New_Roman'] text-[22px] font-bold text-[#063B27]">
                Photoshop & Editing
              </h3>

              <p className="mt-2 font-['Poppins'] text-xs text-gray-600">
                Retouching • Design • Photo Editing
              </p>

              <p className="mt-3 font-['Poppins'] text-sm font-semibold text-[#078D25] group-hover:text-[#B68B00]">
                Explore Course ↗
              </p>

            </div>
          </a>

        </div>

        {/* VIEW ALL COURSES BUTTON */}
        <div className="mt-6 text-center">
          <a
            href="/courses"
            className="inline-block rounded-xl bg-[#FFE000] px-8 py-3 font-['Poppins'] text-sm font-bold text-[#063B27] shadow-sm transition duration-300 hover:bg-[#063B27] hover:text-white hover:shadow-md"
          >
            View All Courses →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Courses;
