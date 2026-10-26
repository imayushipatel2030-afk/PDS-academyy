
function WhyPDS({ onClose }) {
  const benefits = [
    "Photography & Cinematography",
    "Content Creator Training",
    "Instagram Reels Editing",
    "YouTube Content Creation",
    "Food & Stay free",
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 backdrop-blur-[3px]"
      onClick={onClose}
    >
      {/* Popup Box */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="why-pds-title"
        className="relative w-full max-w-lg rounded-[20px] border-[3px] border-[#FFDA00] bg-white p-5 shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Why PDS popup"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#EDF7F0] text-xl font-bold text-[#063B27] transition hover:bg-[#FFDA00]"
        >
          ×
        </button>

        {/* Heading */}
        <h2
          id="why-pds-title"
          className="pr-10 font-serif text-3xl font-bold leading-tight text-[#063B27] sm:text-4xl"
        >
          Why PDS?
        </h2>

        {/* Yellow Underline */}
        <div className="mb-4 mt-2 h-1 w-20 rounded-full bg-[#FFDA00]" />

        {/* Description */}
        <p className="mb-3 text-sm leading-6 text-gray-700">
          PDS Photography Academy helps aspiring photographers
          and content creators develop their creative skills
          through photography, cinematography and video editing.
        </p>

        <p className="mb-4 text-sm leading-6 text-gray-700">
          Learn content creation, Instagram Reels editing and
          YouTube video production with a focus on practical
          skills and creative projects.
        </p>

        {/* Highlights */}
        <div className="rounded-2xl bg-[#063B27] p-4">
          <div className="space-y-2.5">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3"
              >
                {/* Yellow Check Icon */}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFDA00] text-sm font-bold text-[#063B27]">
                  ✓
                </span>

                {/* Benefit Text */}
                <p className="text-sm font-medium text-white">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default WhyPDS;
