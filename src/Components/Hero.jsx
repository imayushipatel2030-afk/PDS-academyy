
// import PdsVideo from "../assets/pds-reel.mp4";

// function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#FFFDF8] px-4 py-8 sm:px-6 lg:px-8 lg:py-4">

//       {/* Main Hero Container */}
//         <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_340px] lg:gap-8 xl:grid-cols-[1fr_390px]">  
//         {/* LEFT CONTENT */}
//         <div className="w-full lg:pl-8 xl:pl-5">

//           {/* Small Heading */}
//           <p className="mb-4 font-['Poppins'] text-[11px] font-medium tracking-[0.25em] text-[#996000]">
//             LEARN • PRACTICE • CREATE • GROW
//           </p>

//           {/* Main Heading */}
//           <h1 className="font-['Playfair_Display'] text-4xl font-bold leading-[1.12] text-[#063B27] sm:text-5xl lg:text-[clamp(2.5rem,3.8vw,4rem)]">

//             Learn Professional

//             <span className="mt-1 block italic text-[#286C28]">
//               Photography
//             </span>

//           </h1>

//           {/* Yellow Underline */}
//           <div className="mt-3 h-1 w-32 rounded-full bg-[#FFE000]"></div>

//           {/* Subheading */}
//           <h3 className="mt-6 font-['Poppins'] text-base font-semibold text-[#996000] sm:text-lg">
//             Turn Your Passion into a Creative Career
//           </h3>

//           {/* Description */}
//             <p className="mt-4 max-w-[620px] font-['Poppins'] text-sm leading-7 text-gray-600 sm:text-base">
//             Explore our Content Creation Course in India.
//             Build skills in Photography, Cinematography,
//             Instagram Reels Editing, YouTube Content Creation
//             and professional Video Editing through practical
//             Content Creator Training.
//           </p>

//           {/* Buttons */}
//           <div className="mt-6 flex flex-wrap gap-4">

//             <a
//               href="/#courses"
//               className="inline-flex items-center justify-center rounded-xl bg-[#063B27] px-7 py-3.5 font-['Poppins'] text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#078D25]"
//             >
//               Explore Courses →
//             </a>

//             <a
//               href="/#enquiry"
//               className="inline-flex items-center justify-center rounded-xl border-2 border-[#063B27] bg-[#063B27] px-7 py-3.5 font-['Poppins'] text-sm font-semibold text-white shadow -sm transition duration-300 hover:bg-[#063B27]"
//             >
//               Enquire Now
//             </a>

//           </div>

//         </div>

//         {/* RIGHT VIDEO */}
//          {/* RIGHT VIDEO */}
// <div className="flex w-full justify-center lg:justify-end">

//   <div className="relative aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-[24px] border-[3px] border-[#FFE000] bg-black shadow-xl sm:max-w-[280px] lg:max-w-[290px]">

//     <video
//       src={PdsVideo}
//       controls
//       loop
//       playsInline
//       preload="metadata"
//       className="h-full w-full object-contain"
//     >
//       Your browser does not support the video tag.
//     </video>

//   </div>

// </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;
import PdsVideo from "../assets/pds-reel.mp4";

import FirstImage from "../assets/1stimage.jpg";
import SecondImage from "../assets/2ndimage.jpg";
import ThirdImage from "../assets/3rdimage.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] px-4 py-6 sm:px-6 lg:px-8 lg:py-4">

      {/* MAIN HERO CONTAINER */}
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-5 xl:gap-8">

        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:pl-4 xl:pl-5">

          {/* SMALL HEADING */}
          <p className="mb-4 font-['Poppins'] text-[11px] font-medium tracking-[0.25em] text-[#996000]">
            LEARN • PRACTICE • CREATE • GROW
          </p>

          {/* MAIN HEADING */}
          <h1 className="font-['Playfair_Display'] text-4xl font-bold leading-[1.12] text-[#063B27] sm:text-5xl lg:text-[clamp(2.5rem,3.8vw,4rem)]">

            Learn Professional

            <span className="mt-1 block italic text-[#286C28]">
              Photography
            </span>

          </h1>

          {/* YELLOW UNDERLINE */}
          <div className="mt-3 h-1 w-32 rounded-full bg-[#FFE000]"></div>

          {/* SUBHEADING */}
          <h3 className="mt-6 font-['Poppins'] text-base font-semibold text-[#996000] sm:text-lg">
            Turn Your Passion into a Creative Career
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-[620px] font-['Poppins'] text-sm leading-7 text-gray-600 sm:text-base">
            Explore our Content Creation Course in India.
            Build skills in Photography, Cinematography,
            Instagram Reels Editing, YouTube Content Creation
            and professional Video Editing through practical
            Content Creator Training.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4">

            <a
              href="/#courses"
              className="inline-flex items-center justify-center rounded-xl bg-[#063B27] px-7 py-3.5 font-['Poppins'] text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#078D25]"
            >
              Explore Courses →
            </a>

            <a
              href="/#enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-[#063B27] px-7 py-3.5 font-['Poppins'] text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#078D25]"
            >
              Enquire Now
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - 3 IMAGES + VIDEO */}
        <div className="flex w-full min-w-0 items-center justify-center gap-2 sm:gap-3 lg:justify-end xl:gap-4">
          {/* THREE IMAGES */}
           {/* THREE IMAGES */}
<div className="grid h-[260px] w-[43%] min-w-0 grid-cols-2 grid-rows-2 gap-2 sm:h-[340px] sm:gap-3 lg:h-[430px] lg:w-[45%]">

  {/* FIRST IMAGE - TALL LEFT */}
  <div className="row-span-2 overflow-hidden rounded-xl border-2 border-[#FFE000] shadow-lg">
    <img
      src={FirstImage}
      alt="PDS Academy student photography"
      loading="eager"
      decoding="async"
      className="h-full w-full object-cover object-center"
    />
  </div>

  {/* SECOND IMAGE - TOP RIGHT */}
  <div className="overflow-hidden rounded-xl border-2 border-[#FFE000] shadow-lg">
    <img
      src={SecondImage}
      alt="PDS Academy student creative work"
      loading="eager"
      decoding="async"
      className="h-full w-full object-cover object-center"
    />
  </div>

  {/* THIRD IMAGE - BOTTOM RIGHT */}
  <div className="overflow-hidden rounded-xl border-2 border-[#FFE000] shadow-lg">
    <img
      src={ThirdImage}
      alt="PDS Academy classroom training"
      loading="eager"
      decoding="async"
      className="h-full w-full object-cover object-top"
    />
  </div>

</div>         
          {/* RIGHT VIDEO */}
          <div className="relative aspect-[9/16] w-[57%] max-w-[290px] min-w-0 overflow-hidden rounded-[20px] border-[3px] border-[#FFE000] bg-black shadow-xl sm:w-[55%] sm:rounded-[24px]">

            <video
              src={PdsVideo}
              controls
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-contain"
            >
              Your browser does not support the video tag.
            </video>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;