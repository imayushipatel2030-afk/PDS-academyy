
import { useState, useEffect } from "react";
import { Link } from "react-router";

// =====================================================
// VIDEO LINKS - YAHAN FULL YOUTUBE LINK PASTE KARNA HAI
// =====================================================

const videos = [
  // 01 - INDOOR PRACTICE
  {
    id: 1,
    videoUrl: "https://www.youtube.com/shorts/czwead6aP90",
    title: "Indoor Model Photography",
    category: "Reels",
    group: "indoor",
    format: "vertical",
    sequence: 1,
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/shorts/16Q-PbOzLik",
    title: "Studio Photography Practice",
    category: "Reels",
    group: "indoor",
    format: "vertical",
    sequence: 2,
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/shorts/3myvSFtki9w",
    title: "Indoor Portrait Shoot",
    category: "Reels",
    group: "indoor",
    format: "vertical",
    sequence: 3,
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/shorts/55K20pH5Pec",
    title: "Indoor Behind the Scenes",
    category: "Reels",
    group: "indoor",
    format: "vertical",
    sequence: 4,
  },

  // 02 - OUTDOOR PRACTICE
  {
    id: 5,
    videoUrl: "https://www.youtube.com/shorts/43rfGHJrtnk",
    title: "Outdoor Model Photography",
    category: "Reels",
    group: "outdoor",
    format: "vertical",
    sequence: 1,
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/shorts/nj8hyGXuQxw",
    title: "Outdoor Portrait Photography",
    category: "Reels",
    group: "outdoor",
    format: "vertical",
    sequence: 2,
  },
  {
    id: 7,
    videoUrl: "",
    title: "Outdoor Practical Training",
    category: "Reels",
    group: "outdoor",
    format: "vertical",
    sequence: 3,
  },
  {
    id: 8,
    videoUrl: "https://www.youtube.com/shorts/AX16-M35hbg",
    title: "Creative Outdoor Shoot",
    category: "Reels",
    group: "outdoor",
    format: "vertical",
    sequence: 4,
  },

  // 03 - OUR STUDENT OUR PRIDE
  {
    id: 9,
    videoUrl: "https://youtube.com/shorts/gmV5XixjVos",
    title: "Student Story",
    category: "Cinematic Films",
    format: "horizontal",
    sequence: 1,
  },
  {
    id: 10,
    videoUrl: "https://youtube.com/shorts/5keqrkYMyYw",
    title: "Student Story",
    category: "Cinematic Films",
    format: "horizontal",
    sequence: 2,
  },
  {
    id: 11,
    videoUrl: "",
    title: "Creative Film Project",
    category: "Cinematic Films",
    format: "horizontal",
    sequence: 3,
  },
  {
    id: 12,
    videoUrl: "",
    title: "Student Short Film",
    category: "Cinematic Films",
    format: "horizontal",
    sequence: 4,
  },

  // 04 - CREATIVE PHOTOGRAPHY PROJECTS
  // ALL 6 VIDEOS ARE VERTICAL 9:16
  {
    id: 13,
    videoUrl: "",
    title: "Wedding Cinematography",
    category: "Photography",
    format: "vertical",
    sequence: 1,
  },
  {
    id: 14,
    videoUrl: "",
    title: "Creative Product Shoot",
    category: "Photography",
    format: "vertical",
    sequence: 2,
  },
  {
    id: 15,
    videoUrl: "",
    title: "Outdoor Photography Project",
    category: "Photography",
    format: "vertical",
    sequence: 3,
  },
  {
    id: 16,
    videoUrl: "",
    title: "Studio Lighting Project",
    category: "Photography",
    format: "vertical",
    sequence: 4,
  },
  {
    id: 21,
    videoUrl: "",
    title: "Fashion Photography Project",
    category: "Photography",
    format: "vertical",
    sequence: 5,
  },
  {
    id: 22,
    videoUrl: "",
    title: "Portrait Photography Project",
    category: "Photography",
    format: "vertical",
    sequence: 6,
  },

  // 05 - EDITING SHOWCASE
  {
    id: 17,
    videoUrl: "https://www.youtube.com/shorts/NGTAYTOC2AE",
    title: "Creative Editing Reel",
    category: "Editing",
    format: "vertical",
    sequence: 1,
  },
  {
    id: 18,
    videoUrl: "https://www.youtube.com/shorts/ylc-IC2Izc0",
    title: "Color Grading Project",
    category: "Editing",
    format: "vertical",
    sequence: 2,
  },
  {
    id: 19,
    videoUrl: "https://www.youtube.com/shorts/I0qFrkTM-4s",
    title: "Transitions Showcase",
    category: "Editing",
    format: "vertical",
    sequence: 3,
  },
  {
    id: 20,
    videoUrl: "https://www.youtube.com/shorts/nWNWLqAqX6U",
    title: "Training Modules",
    category: "Editing",
    format: "vertical",
    sequence: 4,
  },
];

// =====================================================
// YOUTUBE LINK CONVERTER
// =====================================================

function getYouTubeDetails(link) {
  if (!link || typeof link !== "string") return null;

  const value = link.trim();
  if (!value) return null;

  let videoId = "";

  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    videoId = value;
  } else {
    try {
      const url = new URL(value);
      const host = url.hostname.toLowerCase();

      if (host === "youtu.be" || host === "www.youtu.be") {
        videoId = url.pathname.split("/")[1];
      } else if (
        [
          "youtube.com",
          "www.youtube.com",
          "m.youtube.com",
          "youtube-nocookie.com",
          "www.youtube-nocookie.com",
        ].includes(host)
      ) {
        if (url.pathname === "/watch") {
          videoId = url.searchParams.get("v") || "";
        } else if (
          url.pathname.startsWith("/shorts/") ||
          url.pathname.startsWith("/embed/") ||
          url.pathname.startsWith("/live/")
        ) {
          videoId = url.pathname.split("/")[2];
        }
      }
    } catch {
      return null;
    }
  }

  if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
    return null;
  }

  return {
    videoId,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    originalUrl: `https://www.youtube.com/watch?v=${videoId}`,
  };
}

// =====================================================
// CATEGORIES AND SECTIONS
// =====================================================

const categories = [
  "All Work",
  "Reels",
  "Cinematic Films",
  "Photography",
  "Editing",
];

const sections = [
  {
    category: "Reels",
    heading: "Student Reels",
    description:
      "Real practical experience — from indoor studios to outdoor creative shoots.",
    number: "01",
  },
  {
    category: "Cinematic Films",
    heading: "Our Student Our Pride",
    description: "Creative storytelling.",
    number: "02",
    columns: "grid-cols-1 md:grid-cols-2",
    maxWidth: "max-w-[1060px]",
  },
  {
    category: "Photography",
    heading: "Creative Photography Projects",
    description: "Photography shoots and practical student work.",
    number: "03",

    // MOBILE: 2 VIDEOS
    // DESKTOP: 3 VIDEOS PER ROW
    columns: "grid-cols-2 md:grid-cols-3",
    maxWidth: "max-w-[900px]",
  },
  {
    category: "Editing",
    heading: "Editing Showcase",
    description: "Creative transitions and editing projects.",
    number: "04",
    columns: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    maxWidth: "max-w-[1060px]",
  },
];

// =====================================================
// YOUTUBE PLAYER
// =====================================================

function YouTubePlayer({ details, title, enlarged = false }) {
  if (!details) return null;

  const src = enlarged
    ? `${details.embedUrl}?autoplay=1`
    : details.embedUrl;

  return (
    <iframe
      className="absolute inset-0 h-full w-full border-0"
      src={src}
      title={enlarged ? `${title} enlarged` : title}
      loading={enlarged ? "eager" : "lazy"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

// =====================================================
// VIDEO CARD
// =====================================================

function VideoCard({ video }) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const details = getYouTubeDetails(video.videoUrl);
  const isVertical = video.format === "vertical";

  useEffect(() => {
    if (!isEnlarged) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsEnlarged(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isEnlarged]);

  return (
    <>
      <article className="group flex h-full min-w-0 w-full flex-col overflow-hidden rounded-2xl border border-[#E7E9E2] bg-white shadow-[0_4px_18px_rgba(0,35,20,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6C46E] hover:shadow-[0_12px_30px_rgba(0,35,20,0.13)]">

        {/* VIDEO - VERTICAL 9:16 OR HORIZONTAL 16:9 */}
        <div
          className={`relative w-full overflow-hidden bg-black ${
            isVertical ? "aspect-[9/16]" : "aspect-video"
          }`}
        >
          {details ? (
            <>
              <YouTubePlayer
                details={details}
                title={video.title}
              />

              {/* SMALL FULLSCREEN AND YOUTUBE BUTTONS */}
              <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsEnlarged(true)}
                  title="Enlarge video"
                  aria-label={`Enlarge ${video.title}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/75 text-lg text-white shadow-lg transition hover:bg-[#063B27]"
                >
                  ⛶
                </button>

                <a
                  href={details.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Watch on YouTube"
                  aria-label={`Watch ${video.title} on YouTube`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/75 text-lg text-white shadow-lg transition hover:bg-[#063B27]"
                >
                  ↗
                </a>
              </div>
            </>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#124A37] to-[#031F15] px-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-[#FFE000]">
                ▶
              </div>

              <p className="font-['Poppins'] text-[11px] font-semibold tracking-wider text-white">
                Coming Soon
              </p>
            </div>
          )}
        </div>

        {/* VIDEO DETAILS */}
        <div className="flex flex-1 flex-col px-3 pb-4 pt-3 sm:px-4">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {video.category !== "Cinematic Films" && (
              <span className="rounded-full bg-[#F5F1DF] px-2.5 py-1 font-['Poppins'] text-[9px] font-bold uppercase tracking-wider text-[#977000]">
                {video.category}
              </span>
            )}

            <span className="font-['Poppins'] text-[10px] text-gray-400">
              {isVertical ? "Vertical Film" : "Wide Film"}
            </span>
          </div>

          <h3 className="font-['Times_New_Roman'] text-base font-bold leading-snug text-[#063B27] sm:text-lg">
            {video.title}
          </h3>

          <div className="mt-auto pt-3">
            <div className="h-[2px] w-8 rounded-full bg-[#E5C647] transition-all duration-300 group-hover:w-16" />
          </div>
        </div>
      </article>

      {/* ENLARGED VIDEO MODAL */}
      {isEnlarged && details && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${video.title} enlarged player`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsEnlarged(false)}
        >
          <button
            type="button"
            onClick={() => setIsEnlarged(false)}
            aria-label="Close enlarged video"
            className="absolute right-4 top-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-black shadow-lg"
          >
            ✕
          </button>

          <div
            className={`relative w-full overflow-hidden rounded-xl bg-black ${
              isVertical ? "max-w-[420px]" : "max-w-5xl"
            }`}
            style={{
              aspectRatio: isVertical ? "9 / 16" : "16 / 9",
              maxHeight: "85vh",
              maxWidth: isVertical
                ? "min(420px, 47.8vh, 100%)"
                : "min(1024px, 100%)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <YouTubePlayer
              details={details}
              title={video.title}
              enlarged
            />
          </div>

          <a
            href={details.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-4 rounded-full bg-[#063B27] px-3 py-2 text-xs font-semibold text-white hover:bg-[#087C4A]"
          >
            YouTube ↗
          </a>
        </div>
      )}
    </>
  );
}

// =====================================================
// INDOOR AND OUTDOOR VIDEO ROWS
// =====================================================

function VideoGroup({ title, subtitle, items, number }) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="mx-auto mb-5 flex max-w-[1060px] items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E9F0E8] font-['Poppins'] text-xs font-bold text-[#063B27]">
          {number}
        </span>

        <div>
          <h3 className="font-['Times_New_Roman'] text-xl font-bold text-[#063B27] sm:text-2xl">
            {title}
          </h3>

          <p className="font-['Poppins'] text-xs text-gray-500">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1060px] grid-cols-2 items-stretch gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {items.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

// =====================================================
// MAIN STUDENT WORK PAGE
// =====================================================

function Student() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  return (
    <main className="min-h-screen w-full min-w-0 bg-[#FFFDF8]">

      {/* TOP GREEN BANNER - SAME WIDTH AS NAVBAR CONTAINER */}
      <div className="mx-auto w-full max-w-[1400px] px-4 pt-5 sm:px-6 lg:px-10 ml-3px">
        <section className="relative overflow-hidden rounded-[22px] bg-[#063B27] px-5 py-6 text-center sm:px-8 sm:py-7 lg:py-8">

          {/* DECORATIVE CIRCLES */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-48 w-48 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full border border-[#FFE000]/15" />

          <p className="relative mb-2 font-['Poppins'] text-[10px] font-bold uppercase tracking-[0.25em] text-[#FFE000]">
            PDS Photography Academy
          </p>

          <h1 className="relative font-['Times_New_Roman'] text-[34px] font-bold leading-tight text-white sm:text-[42px] lg:text-[46px]">
            Student Work
          </h1>

          <div className="relative mx-auto mt-3 h-[2px] w-12 rounded-full bg-[#FFE000]" />

          <p className="relative mx-auto mt-3 max-w-2xl font-['Poppins'] text-xs leading-6 text-white/85 sm:text-sm">
            Real projects created by the students of PDS Photography Academy
          </p>
        </section>
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-2 py-7 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 font-['Poppins'] text-xs font-semibold transition-all sm:px-5 sm:text-sm ${
                activeCategory === category
                  ? "border-[#063B27] bg-[#063B27] text-white shadow-md"
                  : "border-[#D8DFD6] bg-white text-[#063B27] hover:border-[#063B27] hover:bg-[#FFF6CF]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ALL VIDEO SECTIONS */}
        {sections.map((section) => {
          if (
            activeCategory !== "All Work" &&
            activeCategory !== section.category
          ) {
            return null;
          }

          const sectionVideos = videos
            .filter((video) => video.category === section.category)
            .sort((a, b) => a.sequence - b.sequence);

          const indoorVideos = sectionVideos.filter(
            (video) => video.group === "indoor"
          );

          const outdoorVideos = sectionVideos.filter(
            (video) => video.group === "outdoor"
          );

          return (
            <section
              key={section.category}
              className="border-b border-[#E9EAE3] pb-12 pt-7 sm:pb-14 sm:pt-9"
            >
              {/* SECTION HEADING */}
              <div className="mb-8 text-center">
                <div className="mb-3 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#D4BA57]" />

                  <span className="font-['Poppins'] text-[11px] font-bold tracking-[0.2em] text-[#B68B00]">
                    {section.number}
                  </span>

                  <span className="h-px w-8 bg-[#D4BA57]" />
                </div>

                <h2 className="font-['Times_New_Roman'] text-[30px] font-bold leading-tight text-[#063B27] sm:text-[38px] lg:text-[42px]">
                  {section.heading}
                </h2>

                <p className="mx-auto mt-3 max-w-xl font-['Poppins'] text-sm leading-7 text-gray-500">
                  {section.description}
                </p>
              </div>

              {/* REELS: INDOOR FIRST, OUTDOOR SECOND */}
              {section.category === "Reels" ? (
                <div>
                  <VideoGroup
                    title="Indoor Practice"
                    subtitle="Studio sessions, indoor models and lighting practice"
                    items={indoorVideos}
                    number="01"
                  />

                  <VideoGroup
                    title="Outdoor Practice"
                    subtitle="Outdoor locations, natural light and practical shoots"
                    items={outdoorVideos}
                    number="02"
                  />
                </div>
              ) : (
                <div
                  className={`mx-auto grid w-full items-stretch gap-4 sm:gap-5 lg:gap-6 ${section.columns} ${section.maxWidth}`}
                >
                  {sectionVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* BOTTOM GREEN CTA - SAME WIDTH AS TOP BANNER */}
      <div className="mx-auto w-full max-w-[1400px] px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[22px] bg-[#063B27] px-5 py-8 text-center sm:px-8 sm:py-9">

          <p className="mb-3 font-['Poppins'] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFE000]">
            Create • Learn • Grow
          </p>

          <h2 className="font-['Times_New_Roman'] text-2xl font-bold text-white sm:text-3xl">
            Your Work Could Be Featured Here
          </h2>

          <p className="mx-auto mt-3 max-w-xl font-['Poppins'] text-sm leading-7 text-white/80">
            Join PDS Photography Academy and build your creative portfolio.
          </p>

          <Link
            to="/courses"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#FFE000] px-7 py-3 font-['Poppins'] text-sm font-bold text-[#063B27] shadow-md transition hover:bg-white"
          >
            Explore Courses →
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Student;
