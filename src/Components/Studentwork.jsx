
// import studio from "../assets/photographystudio.jpg";
// import classroom from "../assets/photographyclassroom.jpg";
// import editingLab from "../assets/editinglab.jpg";
// import classroomVideo from "../assets/classroomvedio.mp4";

// import portrait from "../assets/potrait.jpg";
// import wedding from "../assets/wedding.jpg";
// import product from "../assets/productphoto.webp";
// import outdoor from "../assets/outdoor2.jpg";
// import prewedding from "../assets/prewedding.jpg";
// import camera from "../assets/camera.jpg"

// function StudentWork() {
//   return (
//     <>

//       {/* SECTION 1 - INSIDE PDS ACADEMY */}

//       <section
//         id="inside-pds"
//         className="relative overflow-hidden bg-white px-5 py-14 md:px-8 lg:px-10"
//       >
//         <div className="mx-auto max-w-[1500px]">

//           {/* MAIN HORIZONTAL LAYOUT - FLEXBOX */}
//           <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-10">

//             {/* LEFT - HEADING AND DESCRIPTION */}
//             <div className="flex w-full flex-col justify-center lg:w-1/2">

//               <h3 className="mb-4 font-['Poppins'] text-xs font-semibold uppercase tracking-[0.2em] text-[#B68B00]">
//                 INSIDE PDS ACADEMYY
//               </h3>

//               <h2 className="mb-6 font-['Times_New_Roman'] text-4xl font-bold leading-[1.1] text-[#063B27] md:text-5xl">
//                 Real Learning.
//                 <br />
//                 Real Experience.
//               </h2>

//               <p className="mb-7 max-w-md font-['Poppins'] text-sm leading-7 text-gray-600">
//                 Explore our studios, classrooms and creative
//                 environment. From camera practice to editing
//                 labs, experience how we train future creators.
//               </p>

//             </div>

//             {/* RIGHT - CLASSROOM VIDEO */}
//             <div
//               id="classroom-video"
//               className="h-[280px] w-full overflow-hidden rounded-2xl bg-black shadow-lg md:h-[330px] lg:h-[360px] lg:w-1/2"
//             >
//               <video
//                 controls
//                 playsInline
//                 preload="metadata"
//                 className="h-full w-full object-cover"
//               >
//                 <source
//                   src={classroomVideo}
//                   type="video/mp4"
//                 />
//                 Your browser does not support video.
//               </video>
//             </div>

//           </div>

//         </div>
//       </section>


//       {/* SECTION 2 - STUDENT WORK */}

//       <section
//         id="studentwork"
//         className="scroll-mt-24 bg-[#FAFBF8] px-6 py-20 md:scroll-mt-28 lg:scroll-mt-32"
//       >

//         <div className="mx-auto max-w-7xl">

//           <p className="mb-3 text-center font-['Poppins'] text-sm font-semibold tracking-widest text-[#B68B00]">
//             STUDENTS WORK
//           </p>

//           <h2 className="mb-5 text-center font-['Times_New_Roman'] text-4xl font-bold text-[#063B27] md:text-5xl">
//             Real Students. Real Work. Real Stories.
//           </h2>

//           <p className="mx-auto mb-12 max-w-2xl text-center font-['Poppins'] text-[#B68B00]">
//             Explore student projects and their experiences
//             at PDS Photography Academyy.
//           </p>


//           {/* STUDENT WORK PHOTOS - FLEXBOX */}

//           <div className="flex flex-wrap justify-center gap-5">

//             {/* PORTRAIT PHOTOGRAPHY */}
//             <div className="w-full overflow-hidden rounded-2xl bg-white shadow-md sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(20%-16px)]">
//               <img
//                 src={portrait}
//                 alt="Portrait Photography"
//                 className="h-72 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
//                   Portrait & Fashion
//                 </h3>
//                 <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
//                   Learn creative lighting, camera angles and posing
//                   techniques to capture professional fashion portraits.
//                 </p>
//               </div>
//             </div>

//             {/* WEDDING PHOTOGRAPHY */}
//             <div className="w-full overflow-hidden rounded-2xl bg-white shadow-md sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(20%-16px)]">
//               <img
//                 src={wedding}
//                 alt="Pre-Wedding Photography"
//                 className="h-72 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
//                   Wedding
//                 </h3>
//                 <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
//                   Capture every emotion, tradition, and unforgettable wedding moment. At PDS Photography Academy.
//                 </p>
//               </div>
//             </div>

//             {/* PRODUCT PHOTOGRAPHY */}
//             <div className="w-full overflow-hidden rounded-2xl bg-white shadow-md sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(20%-16px)]">
//               <img
//                 src={product}
//                 alt="Product Photography"
//                 className="h-72 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
//                   Product Photography
//                 </h3>
//                 <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
//                   Master product lighting, creative backgrounds
//                   and professional photography for brands and ads.
//                 </p>
//               </div>
//             </div>

//             {/* PREWEDDING PHOTOGRAPHY */}
//             <div className="w-full overflow-hidden rounded-2xl bg-white shadow-md sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(20%-16px)]">
//               <img
//                 src={prewedding}
//                 alt="Creative Photography"
//                 className="h-72 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
//                   Prewedding
//                 </h3>
//                 <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
//                   Turn love stories into cinematic memories. At PDS Photography Academy.
//                 </p>
//               </div>
//             </div>

//             {/* OUTDOOR PHOTOGRAPHY */}
//             <div className="w-full overflow-hidden rounded-2xl bg-white shadow-md sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(20%-16px)]">
//               <img
//                 src={outdoor}
//                 alt="Outdoor Photography"
//                 className="h-72 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
//                   Outdoor & Landscape
//                 </h3>
//                 <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
//                   Learn natural light, landscape composition and
//                   camera settings to capture beautiful outdoor scenes.
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </section>
      
       
// {/* YOUR LEARNING JOURNEY SECTION */}
  
// {/* SECTION 3 - YOUR LEARNING JOURNEY */}

// <section className="bg-[#FFFDF8] px-4 py-14 sm:px-8 lg:px-10">

//   <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#063B27] shadow-xl">

//     {/* TOP GREEN SECTION */}
//     <div className="flex flex-col items-center gap-10 px-7 py-12 sm:px-12 lg:flex-row lg:px-16 lg:py-16">

//       {/* LEFT SIDE - TEXT */}
//       <div className="w-full lg:w-[58%]">

//         <p className="mb-6 font-['Poppins'] text-xs font-semibold tracking-[0.25em] text-[#FFE000]">
//           YOUR LEARNING JOURNEY
//         </p>

//         <h2 className="font-['Times_New_Roman'] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

//           Small steps.

//           <span className="mt-2 block italic text-[#FFE000]">
//             Stronger skills.
//           </span>

//         </h2>

//         <p className="mt-7 max-w-xl font-['Poppins'] text-sm leading-8 text-[#E4EEE8] sm:text-base">
//           Every creative journey starts with a single step.
//           Discover, learn, practise and bring your ideas to life.
//         </p>

//       </div>


//       {/* RIGHT SIDE - CAMERA IMAGE */}
//       <div className="flex w-full items-center justify-center lg:w-[42%]">

//         <img
//           src={camera}
//           alt="Professional photography camera"
//           className="max-h-[330px] w-full max-w-[420px] object-contain drop-shadow-2xl"
//         />

//       </div>

//     </div>


//     {/* BOTTOM YELLOW LEARNING STRIP */}
//     <div className="bg-[#FFE000] px-6 py-8 sm:px-10 lg:px-12">

//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

//         {/* STEP 01 - DISCOVER */}
//         <div className="flex items-start gap-4">

//           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFFDF8] text-2xl text-[#063B27] shadow-sm">
//             📷
//           </div>

//           <div>

//             <span className="font-['Times_New_Roman'] text-3xl font-bold text-[#A7A84B]">
//               01
//             </span>

//             <h3 className="font-['Times_New_Roman'] text-2xl font-bold text-[#063B27]">
//               Discover
//             </h3>

//             <p className="mt-2 font-['Poppins'] text-xs leading-6 text-[#173D2A]">
//               Choose the creative skill you want to explore.
//             </p>

//           </div>

//         </div>


//         {/* STEP 02 - UNDERSTAND */}
//         <div className="flex items-start gap-4">

//           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFFDF8] text-2xl text-[#063B27] shadow-sm">
//             ⚙
//           </div>

//           <div>

//             <span className="font-['Times_New_Roman'] text-3xl font-bold text-[#A7A84B]">
//               02
//             </span>

//             <h3 className="font-['Times_New_Roman'] text-2xl font-bold text-[#063B27]">
//               Understand
//             </h3>

//             <p className="mt-2 font-['Poppins'] text-xs leading-6 text-[#173D2A]">
//               Learn the settings, tools and creative principles.
//             </p>

//           </div>

//         </div>


//         {/* STEP 03 - PRACTISE */}
//         <div className="flex items-start gap-4">

//           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFFDF8] text-2xl text-[#063B27] shadow-sm">
//             💡
//           </div>

//           <div>

//             <span className="font-['Times_New_Roman'] text-3xl font-bold text-[#A7A84B]">
//               03
//             </span>

//             <h3 className="font-['Times_New_Roman'] text-2xl font-bold text-[#063B27]">
//               Practise
//             </h3>

//             <p className="mt-2 font-['Poppins'] text-xs leading-6 text-[#173D2A]">
//               Apply your learning through guided assignments.
//             </p>

//           </div>

//         </div>


//         {/* STEP 04 - CREATE */}
//         <div className="flex items-start gap-4">

//           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFFDF8] text-2xl text-[#063B27] shadow-sm">
//             📈
//           </div>

//           <div>

//             <span className="font-['Times_New_Roman'] text-3xl font-bold text-[#A7A84B]">
//               04
//             </span>

//             <h3 className="font-['Times_New_Roman'] text-2xl font-bold text-[#063B27]">
//               Create
//             </h3>

//             <p className="mt-2 font-['Poppins'] text-xs leading-6 text-[#173D2A]">
//               Refine your projects and organise your best work.
//             </p>

//           </div>

//         </div>

//       </div>

//     </div>

//   </div>

// </section>






//     </>
//   );
// }

// export default StudentWork;


import studio from "../assets/photographystudio.jpg";
import classroomVideo from "../assets/classroomvedio.mp4";

import portrait from "../assets/potrait.jpg";
import wedding from "../assets/wedding.jpg";
import product from "../assets/productphoto.webp";
import outdoor from "../assets/outdoor2.jpg";
import prewedding from "../assets/prewedding.jpg";
import camera from "../assets/camera.jpg";

function StudentWork() {
  return (
    <>
      {/* SECTION 1 - INSIDE PDS ACADEMY */}
      <section
        id="inside-pds"
        className="scroll-mt-24 bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">

            {/* LEFT CONTENT */}
            <div className="w-full">

              <h3 className="mb-3 font-['Poppins'] text-xs font-semibold uppercase tracking-[0.2em] text-[#B68B00] pl-[10px]">
                INSIDE PDS ACADEMYY
              </h3>

              <h2 className="mb-4 font-['Times_New_Roman'] text-[32px] font-bold leading-[1.15] text-[#063B27] sm:text-[40px] lg:text-[46px]  pl-[6px]">
                Real Learning.
                <span className="block">
                  Real Experience.
                </span>
              </h2>

              <p className="max-w-md font-['Poppins'] text-sm leading-7 text-gray-600 pl-[8px]">
                Explore our studios, classrooms and creative
                environment. From camera practice to editing
                labs, experience how we train future creators.
              </p>

            </div>

            {/* RIGHT CLASSROOM VIDEO */}
            <div
              id="classroom-video"
              className="h-[220px] w-full overflow-hidden rounded-2xl bg-black shadow-lg sm:h-[280px] lg:h-[300px]"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              >
                <source
                  src={classroomVideo}
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 2 - STUDENT WORK */}
      <section
        id="studentwork"
        className="scroll-mt-24 bg-[#FAFBF8] px-5 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9"
      >
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div className="mb-6 text-center">

            <p className="mb-2 font-['Poppins'] text-xs font-semibold tracking-widest text-[#B68B00]">
              STUDENTS WORK
            </p>

            <h2 className="font-['Times_New_Roman'] text-[30px] font-bold leading-tight text-[#063B27] sm:text-[38px] lg:text-[44px]">
              Real Students. Real Work. Real Stories.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl font-['Poppins'] text-sm leading-6 text-[#B68B00]">
              Explore student projects and their experiences
              at PDS Photography Academyy.
            </p>

          </div>


          {/* STUDENT WORK PHOTOS */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* CARD 1 - PORTRAIT PHOTOGRAPHY */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-md">

              <img
                src={portrait}
                alt="Portrait Photography"
                loading="lazy"
                 className="h-[150px] w-full object-contain bg-white sm:h-[200px] md:h-[220px] xl:h-[250px] xl:object-cover "
              />

              <div className="p-4">

                <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                  Portrait & Fashion
                </h3>

                <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
                  Learn creative lighting, camera angles and posing
                  techniques to capture professional fashion portraits.
                </p>

              </div>

            </div>


            {/* CARD 2 - WEDDING PHOTOGRAPHY */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-md">

              <img
                src={wedding}
                alt="Pre-Wedding Photography"
                loading="lazy"
                className="h-[150px] w-full object-contain bg-white sm:h-[200px] md:h-[220px] xl:h-[250px] xl:object-cover"
              />

              <div className="p-4">

                <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                  Wedding
                </h3>

                <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
                  Capture every emotion, tradition, and unforgettable
                  wedding moment. At PDS Photography Academy.
                </p>

              </div>

            </div>


            {/* CARD 3 - PRODUCT PHOTOGRAPHY */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-md">

              <img
                src={product}
                alt="Product Photography"
                loading="lazy"
                className="h-[150px] w-full object-contain bg-white sm:h-[200px] md:h-[220px] xl:h-[250px] xl:object-cover"
              />

              <div className="p-4">

                <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                  Product Photography
                </h3>

                <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
                  Master product lighting, creative backgrounds
                  and professional photography for brands and ads.
                </p>

              </div>

            </div>


            {/* CARD 4 - PREWEDDING PHOTOGRAPHY */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-md">

              <img
                src={prewedding}
                alt="Creative Photography"
                loading="lazy"
                className="h-[150px] w-full object-contain bg-white sm:h-[200px] md:h-[220px] xl:h-[250px] xl:object-cover"
              />

              <div className="p-4">

                <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                  Prewedding
                </h3>

                <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
                  Turn love stories into cinematic memories.
                  At PDS Photography Academy.
                </p>

              </div>

            </div>


            {/* CARD 5 - OUTDOOR PHOTOGRAPHY */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-md">

              <img
                src={outdoor}
                alt="Outdoor Photography"
                loading="lazy"
                className="h-[150px] w-full object-contain bg-white sm:h-[200px] md:h-[220px] xl:h-[250px] xl:object-cover"
              />

              <div className="p-4">

                <h3 className="mb-2 font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                  Outdoor & Landscape
                </h3>

                <p className="font-['Poppins'] text-xs leading-6 text-gray-600">
                  Learn natural light, landscape composition and
                  camera settings to capture beautiful outdoor scenes.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION 3 - YOUR LEARNING JOURNEY */}
      <section className="bg-[#FFFDF8] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-[#063B27] shadow-lg">

          {/* TOP GREEN SECTION */}
          <div className="grid items-center gap-6 px-5 py-7 sm:px-8 sm:py-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-9">

            {/* LEFT SIDE - TEXT */}
            <div className="w-full">

              <p className="mb-3 font-['Poppins'] text-xs font-semibold tracking-[0.25em] text-[#FFE000]">
                YOUR LEARNING JOURNEY
              </p>

              <h2 className="font-['Times_New_Roman'] text-[34px] font-bold leading-tight text-white sm:text-[42px] lg:text-[48px]">

                Small steps.

                <span className="block italic text-[#FFE000]">
                  Stronger skills.
                </span>

              </h2>

              <p className="mt-4 max-w-xl font-['Poppins'] text-sm leading-7 text-[#E4EEE8]">
                Every creative journey starts with a single step.
                Discover, learn, practise and bring your ideas to life.
              </p>

            </div>


            {/* RIGHT SIDE - CAMERA IMAGE */}
            <div className="flex w-full items-center justify-center lg:justify-end">

              <img
                src={camera}
                alt="Professional photography camera"
                loading="lazy"
                className="h-[190px] w-full max-w-[420px] rounded-xl object-contain sm:h-[220px] lg:h-[240px]"
              />

            </div>

          </div>


          {/* BOTTOM YELLOW LEARNING STRIP */}
          <div className="bg-[#FFE000] px-5 py-5 sm:px-8 sm:py-6 lg:px-10">

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

              {/* STEP 01 - DISCOVER */}
              <div className="flex items-start gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFFDF8] text-xl text-[#063B27] shadow-sm">
                  📷
                </div>

                <div>

                  <span className="font-['Times_New_Roman'] text-2xl font-bold text-[#A7A84B]">
                    01
                  </span>

                  <h3 className="font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                    Discover
                  </h3>

                  <p className="mt-1 font-['Poppins'] text-xs leading-5 text-[#173D2A]">
                    Choose the creative skill you want to explore.
                  </p>

                </div>

              </div>


              {/* STEP 02 - UNDERSTAND */}
              <div className="flex items-start gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFFDF8] text-xl text-[#063B27] shadow-sm">
                  ⚙
                </div>

                <div>

                  <span className="font-['Times_New_Roman'] text-2xl font-bold text-[#A7A84B]">
                    02
                  </span>

                  <h3 className="font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                    Understand
                  </h3>

                  <p className="mt-1 font-['Poppins'] text-xs leading-5 text-[#173D2A]">
                    Learn the settings, tools and creative principles.
                  </p>

                </div>

              </div>


              {/* STEP 03 - PRACTISE */}
              <div className="flex items-start gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFFDF8] text-xl text-[#063B27] shadow-sm">
                  💡
                </div>

                <div>

                  <span className="font-['Times_New_Roman'] text-2xl font-bold text-[#A7A84B]">
                    03
                  </span>

                  <h3 className="font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                    Practise
                  </h3>

                  <p className="mt-1 font-['Poppins'] text-xs leading-5 text-[#173D2A]">
                    Apply your learning through guided assignments.
                  </p>

                </div>

              </div>


              {/* STEP 04 - CREATE */}
              <div className="flex items-start gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFFDF8] text-xl text-[#063B27] shadow-sm">
                  📈
                </div>

                <div>

                  <span className="font-['Times_New_Roman'] text-2xl font-bold text-[#A7A84B]">
                    04
                  </span>

                  <h3 className="font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
                    Create
                  </h3>

                  <p className="mt-1 font-['Poppins'] text-xs leading-5 text-[#173D2A]">
                    Refine your projects and organise your best work.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default StudentWork;
