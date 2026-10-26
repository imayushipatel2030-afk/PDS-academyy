
import photography from "../assets/photography.png";
import Cinematography from "../assets/cinematography.png";
import Editing from "../assets/editing.png";
import Photoshop from "../assets/photoshop.png";

function CoursesPage() {
  return (
    <main className="bg-[#FFFDF8]">

      {/* PAGE HEADING */}
      <section className="bg-[#EAF4E8] px-5 py-16 text-center">

        <p className="mb-4 font-['Poppins'] text-xs font-semibold tracking-[0.25em] text-[#078D25]">
          PDS PHOTOGRAPHY ACADEMY
        </p>

        <h1 className="font-['Times_New_Roman'] text-4xl font-bold text-[#063B27] md:text-6xl">
          Explore Our
          <span className="italic text-[#078D25]"> Courses.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl font-['Poppins'] text-sm leading-7 text-[#365B43]">
          Discover your passion. Learn practical skills.
          Create something extraordinary.
        </p>

        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#FFE000]"></div>

      </section>


      {/* COURSE 1 - PHOTOGRAPHY */}
      <section className="px-5 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:gap-14">

          <div className="w-full md:w-1/2">
            <img
              src={photography}
              alt="Photography Course"
              className="h-[280px] w-full rounded-2xl object-cover shadow-lg md:h-[330px]"
            />
          </div>

          <div className="w-full md:w-1/2">

            <p className="mb-3 font-['Poppins'] text-xs font-semibold tracking-widest text-[#078D25]">
              01 / PHOTOGRAPHY
            </p>

            <h2 className="font-['Times_New_Roman'] text-3xl font-bold text-[#063B27] md:text-4xl">
              Photography Masterclass
            </h2>

            <p className="mt-4 font-['Poppins'] text-sm leading-8 text-gray-600">
              Discover the art of photography through camera
              settings, lighting, composition and practical
              shooting techniques. Learn to capture portraits,
              products and creative moments with confidence.
            </p>

              <a
  href="/enquiry"
  className="mt-6 inline-block rounded-full bg-[#063B27] px-7 py-3 font-['Poppins'] text-sm font-semibold text-white transition hover:bg-[#078D25]"
>
  Enquire Now →
</a>

          </div>

        </div>
      </section>


      {/* COURSE 2 - CINEMATOGRAPHY */}
      <section className="bg-[#F0F7EF] px-5 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row-reverse md:gap-14">

          <div className="w-full md:w-1/2">
            <img
              src={Cinematography}
              alt="Cinematography Course"
              className="h-[280px] w-full rounded-2xl object-cover shadow-lg md:h-[330px]"
            />
          </div>

          <div className="w-full md:w-1/2">

            <p className="mb-3 font-['Poppins'] text-xs font-semibold tracking-widest text-[#078D25]">
              02 / CINEMATOGRAPHY
            </p>

            <h2 className="font-['Times_New_Roman'] text-3xl font-bold text-[#063B27] md:text-4xl">
              Cinematography & Filmmaking
            </h2>

            <p className="mt-4 font-['Poppins'] text-sm leading-8 text-gray-600">
              Explore cinematic camera movements, lighting,
              composition and visual storytelling. Understand
              how creative ideas are transformed into
              engaging films and visual experiences.
            </p>

           <a
  href="/enquiry"
  className="mt-6 inline-block rounded-full bg-[#063B27] px-7 py-3 font-['Poppins'] text-sm font-semibold text-white transition hover:bg-[#078D25]"
>
  Enquire Now →
</a>
          </div>

        </div>
      </section>


      {/* COURSE 3 - VIDEO EDITING */}
      <section className="px-5 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:gap-14">

          <div className="w-full md:w-1/2">
            <img
              src={Editing}
              alt="Video Editing Course"
              className="h-[280px] w-full rounded-2xl object-cover shadow-lg md:h-[330px]"
            />
          </div>

          <div className="w-full md:w-1/2">

            <p className="mb-3 font-['Poppins'] text-xs font-semibold tracking-widest text-[#078D25]">
              03 / VIDEO EDITING
            </p>

            <h2 className="font-['Times_New_Roman'] text-3xl font-bold text-[#063B27] md:text-4xl">
              Professional Video Editing
            </h2>

            <p className="mt-4 font-['Poppins'] text-sm leading-8 text-gray-600">
              Learn professional video editing, colour grading,
              sound and creative transitions. Discover how
              raw footage becomes engaging content for
              films, advertisements and social media.
            </p>

            <a
  href="/enquiry"
  className="mt-6 inline-block rounded-full bg-[#063B27] px-7 py-3 font-['Poppins'] text-sm font-semibold text-white transition hover:bg-[#078D25]"
>
  Enquire Now →
</a>

          </div>

        </div>
      </section>


      {/* COURSE 4 - PHOTOSHOP */}
      <section className="bg-[#F0F7EF] px-5 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row-reverse md:gap-14">

          <div className="w-full md:w-1/2">
            <img
              src={Photoshop}
              alt="Photoshop and Photo Editing Course"
              className="h-[280px] w-full rounded-2xl object-cover shadow-lg md:h-[330px]"
            />
          </div>

          <div className="w-full md:w-1/2">

            <p className="mb-3 font-['Poppins'] text-xs font-semibold tracking-widest text-[#078D25]">
              04 / PHOTOSHOP
            </p>

            <h2 className="font-['Times_New_Roman'] text-3xl font-bold text-[#063B27] md:text-4xl">
              Photoshop & Photo Editing
            </h2>

            <p className="mt-4 font-['Poppins'] text-sm leading-8 text-gray-600">
              Develop your photo editing skills through
              portrait retouching, colour correction,
              image enhancement and creative design.
              Learn how to transform ordinary images
              into professional-looking photographs.
            </p>

           <a
  href="/enquiry"
  className="mt-6 inline-block rounded-full bg-[#063B27] px-7 py-3 font-['Poppins'] text-sm font-semibold text-white transition hover:bg-[#078D25]"
>
  Enquire Now →
</a>
          </div>

        </div>
      </section>


      {/* COURSE 5 - CONTENT CREATION */}
      <section className="px-5 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:gap-14">

          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85"
              alt="Content Creation Course"
              className="h-[280px] w-full rounded-2xl object-cover shadow-lg md:h-[330px]"
            />
          </div>

          <div className="w-full md:w-1/2">

            <p className="mb-3 font-['Poppins'] text-xs font-semibold tracking-widest text-[#078D25]">
              05 / CONTENT CREATION
            </p>

            <h2 className="font-['Times_New_Roman'] text-3xl font-bold text-[#063B27] md:text-4xl">
              Content Creation Course
            </h2>

            <p className="mt-4 font-['Poppins'] text-sm leading-8 text-gray-600">
              Learn to plan, shoot and edit engaging content
              for Instagram, YouTube and other digital platforms.
              Explore reels production, content strategy,
              storytelling and practical creative projects.
            </p>

           <a
  href="/enquiry"
  className="mt-6 inline-block rounded-full bg-[#063B27] px-7 py-3 font-['Poppins'] text-sm font-semibold text-white transition hover:bg-[#078D25]"
>
  Enquire Now →
</a>
          </div>

        </div>
      </section>


      {/* BOTTOM CALL TO ACTION */}
      <section className="bg-[#063B27] px-5 py-16 text-center">

        <p className="mb-4 font-['Poppins'] text-xs font-semibold tracking-widest text-[#FFE000]">
          YOUR CREATIVE JOURNEY STARTS HERE
        </p>

        <h2 className="font-['Times_New_Roman'] text-3xl font-bold text-white md:text-5xl">
          Ready to Create Something Amazing?
        </h2>

        <p className="mx-auto mt-5 max-w-xl font-['Poppins'] text-sm leading-7 text-[#D6E7DA]">
          Take the next step towards learning new skills
          and bringing your creative ideas to life.
        </p>

      <a
  href="/enquiry"
  className="mt-6 inline-block rounded-full bg-[#063B27] px-7 py-3 font-['Poppins'] text-sm font-semibold text-white transition hover:bg-[#078D25]"
>
  Enquire Now →
</a>

      </section>

    </main>
  );
}

export default CoursesPage;
