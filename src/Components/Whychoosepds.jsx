
import Classroomvideo from "../assets/classroomvedio.mp4";

function WhyChoosePDS() {
  return (
    <section
      id="why-pds"
      className="scroll-mt-24 bg-[#FFFDF8] px-5 pt-5 pb-8 sm:px-8 sm:pt-6 lg:px-10 lg:pt-4 lg:pb-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-4 text-center">

          {/* Small Heading */}
          <p className="mb-3 font-['Poppins'] text-sm font-extrabold uppercase tracking-[0.25em] text-[#996000]">
            WHY CHOOSE PDS?
          </p>

          {/* Main Heading */}
          <h2 className="text-center font-['Times_New_Roman'] text-[26px] font-bold leading-tight text-[#063B27] sm:text-[34px] lg:text-[42px] xl:text-[46px]">

            <span className="block lg:inline">
              More Than a Course.
            </span>

            <span className="mt-2 block lg:mt-0 lg:inline">
              {" "}It's a{" "}
              <span className="italic text-[#286C28]">
                Creative Community.
              </span>
            </span>

          </h2>

          {/* Yellow Underline */}
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#FFE000]"></div>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl font-['Poppins'] text-sm leading-7 text-gray-600 sm:text-base">
            Learn photography, cinematography, video editing
            and content creation through practical training,
            expert mentorship and real creative projects.
          </p>

        </div>

        {/* FOUR VIDEO CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* CARD 1 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-2.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            
<div className="h-[240px] overflow-hidden rounded-xl bg-black sm:h-[280px] lg:h-[230px] xl:h-[250px]">

              <video
                src={Classroomvideo}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="px-2 pb-2 pt-2">

              <h3 className="font-['Times_New_Roman'] text-xl font-bold leading-snug text-[#063B27]">
                Hands-on Practical Training
              </h3>

              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#FFE000]"></div>

              <p className="mt-3 font-['Poppins'] text-sm leading-6 text-gray-600">
                Learn through real shoots and practical assignments.
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-2.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

             
<div className="h-[240px] overflow-hidden rounded-xl bg-black sm:h-[280px] lg:h-[230px] xl:h-[250px]">

              <video
                src={Classroomvideo}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="px-2 pb-2 pt-2">

              <h3 className="font-['Times_New_Roman'] text-xl font-bold leading-snug text-[#063B27]">
                Industry Expert Mentors
              </h3>

              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#FFE000]"></div>

              <p className="mt-3 font-['Poppins'] text-sm leading-6 text-gray-600">
                Learn with guidance from experienced mentors.
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-2.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            
<div className="h-[240px] overflow-hidden rounded-xl bg-black sm:h-[280px] lg:h-[230px] xl:h-[250px]">

              <video
                src={Classroomvideo}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="px-2 pb-2 pt-2">

              <h3 className="font-['Times_New_Roman'] text-xl font-bold leading-snug text-[#063B27]">
                Real Projects & Assignments
              </h3>

              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#FFE000]"></div>

              <p className="mt-3 font-['Poppins'] text-sm leading-6 text-gray-600">
                Build your portfolio through creative projects.
              </p>

            </div>

          </div>

          {/* CARD 4 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-2.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            
<div className="h-[240px] overflow-hidden rounded-xl bg-black sm:h-[280px] lg:h-[230px] xl:h-[250px]">

              <video
                src={Classroomvideo}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="px-2 pb-2 pt-2">

              <h3 className="font-['Times_New_Roman'] text-xl font-bold leading-snug text-[#063B27]">
                Studio Setup & Equipment
              </h3>

              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#FFE000]"></div>

              <p className="mt-3 font-['Poppins'] text-sm leading-6 text-gray-600">
                Practice using cameras, lights and studio equipment.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChoosePDS;
