
import model from "../assets/model.mp4";

function VideoLibrary() {
  return (
    <div className="bg-[#FFFDF8]">

      {/* Heading Section */}
      <div className="bg-[#063B27] py-16 text-center">

        <h1 className="font-['Times_New_Roman'] text-5xl font-bold text-white">
          PDS Video Library
        </h1>

        <p className="mt-4 text-lg text-[#FFE000]">
          Watch, Learn and Grow with PDS Photography Academy
        </p>

      </div>

      {/* Video Section */}
      <div className="mx-auto max-w-7xl px-5 py-12">

        <h2 className="mb-8 text-center font-['Times_New_Roman'] text-3xl font-bold text-[#063B27]">
          Explore Our Videos
        </h2>

        {/* Row 1 */}
        <div className="mb-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>
          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>
          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>
          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>

        </div>

        {/* Row 2 */}
        <div className="mb-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>
          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>
          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>
          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>

        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>
          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>
          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>
          <video src={model} controls className="aspect-[9/16] w-full rounded-xl bg-black object-contain"></video>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-[#063B27] px-5 py-12 text-center">

        <h2 className="font-['Times_New_Roman'] text-3xl font-bold text-white">
          Ready to Learn More?
        </h2>

        <p className="mt-3 text-white">
          Join PDS Photography Academy and improve your skills.
        </p>

        <a
          href="/enquiry"
          className="mt-6 inline-block rounded-full bg-[#FFE000] px-8 py-3 font-semibold text-[#063B27] hover:bg-yellow-300"
        >
          Enquire Now →
        </a>

      </div>

    </div>
  );
}

export default VideoLibrary;
