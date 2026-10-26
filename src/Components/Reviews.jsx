
import { useEffect, useRef, useState } from "react";

// =============================================
// STUDENT REVIEWS
// Expanded sample drafts - verify before publishing
// =============================================

const reviews = [
  {
    name: "Ramya Thakur",
    course: "Photography Course",
    review:
      "The photography classes helped me improve my skills and confidence. The practical sessions gave me opportunities to understand camera settings, composition and creative techniques. Learning through real exercises made the experience engaging and helped me feel more comfortable while taking photographs.",
  },
  {
    name: "Harshit Singh",
    course: "Cinematography Course",
    review:
      "The mentors explained everything clearly and made learning easy. The course introduced me to important aspects of cinematography, including camera movement, framing, lighting and visual storytelling. The practical approach helped me understand how different creative decisions come together in a film.",
  },
  {
    name: "Hardik",
    course: "Content Creation Course",
    review:
      "I learned how to create better content for social media. The training helped me explore creative ideas, plan videos and understand how to present content in a more engaging way. Working on practical exercises gave me a better understanding of the content creation process.",
  },
  {
    name: "Akshita Patel",
    course: "Video Editing Course",
    review:
      "Practical projects helped me improve my editing skills. I gained a better understanding of arranging footage, creating smooth transitions and developing a consistent editing style. Working on different projects made the learning process interesting and helped me become more confident with editing.",
  },
  {
    name: "Aditya Thakur",
    course: "Photography Course",
    review:
      "I learned professional camera settings and lighting techniques. The practical sessions helped me explore different photography styles and understand how lighting changes the final result. It was a useful learning experience that encouraged me to experiment with new compositions and creative ideas.",
  },
  {
    name: "Mansiiee",
    course: "Video Editing Course",
    review:
      "The academy gave me a great learning environment. The practical activities encouraged me to explore new editing techniques and develop my creativity. Having opportunities to work on different types of footage made the learning experience enjoyable and helped me improve my confidence.",
  },
  {
    name: "Aman khan",
    course: "Photography Course",
    review:
      "Hands-on training helped me understand real photography. The sessions introduced me to camera handling, lighting, framing and creative composition. Practicing these techniques made the concepts easier to understand and encouraged me to develop my own approach to photography.",
  },
  {
    name: "Rajesh Tiwari",
    course: "Cinematography Course",
    review:
      "The practical sessions helped me understand filmmaking. I learned more about framing, camera movement and the importance of lighting in visual storytelling. The learning activities made the technical concepts easier to follow and inspired me to explore different filmmaking techniques.",
  },
];

// =============================================
// REVIEW CARD
// =============================================

function ReviewCard({ review }) {
  return (
    <article className="relative flex h-full min-h-[370px] w-full flex-col overflow-hidden rounded-[20px] border border-[#E7E5D9] bg-white px-6 py-7 shadow-[0_8px_30px_rgba(0,40,20,0.07)] sm:min-h-[395px] sm:px-7 sm:py-8">

      {/* DECORATIVE QUOTE */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-4 text-[75px] leading-none text-[#E8F0E5]"
        style={{ fontFamily: "Georgia, serif" }}
      >
        ”
      </span>

      {/* DECORATIVE STARS */}
      <div
        className="relative mb-4 shrink-0 text-[17px] tracking-[3px] text-[#B68B00]"
        aria-hidden="true"
      >
        ★★★★★
      </div>

      {/* REVIEW TEXT - NO INNER SCROLLBAR */}
      <div className="relative flex-1">
        <p
          className="text-[14px] font-semibold italic leading-[1.8] text-[#405148] sm:text-[15px]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          “{review.review}”
        </p>
      </div>

      {/* STUDENT DETAILS */}
      <div className="mt-5 flex shrink-0 items-center gap-3 border-t border-[#E8EDE5] pt-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#FFE000] bg-[#F0F7EF] font-['Times_New_Roman'] text-xl font-bold text-[#063B27]">
          {review.name.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0">
          <h3 className="font-['Poppins'] text-sm font-bold text-[#063B27]">
            {review.name}
          </h3>

          <p className="mt-1 font-['Poppins'] text-xs text-[#647067]">
            {review.course}
          </p>
        </div>

      </div>

    </article>
  );
}

// =============================================
// MAIN REVIEWS SECTION
// =============================================

function Reviews() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const positionRef = useRef(0);
  const lastFrameRef = useRef(null);
  const pausedRef = useRef(false);

  const [isPaused, setIsPaused] = useState(false);

  const loopedReviews = [...reviews, ...reviews];

  // KEEP PAUSE STATE IN SYNC
  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  // =============================================
  // SMOOTH INFINITE CAROUSEL
  // =============================================

  useEffect(() => {
    let animationId;

    const animate = (timestamp) => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track) return;

      if (lastFrameRef.current === null) {
        lastFrameRef.current = timestamp;
      }

      const delta = Math.min(
        timestamp - lastFrameRef.current,
        50
      );

      lastFrameRef.current = timestamp;

      // Half the track is one complete set of reviews.
      const singleSetWidth = track.scrollWidth / 2;

      if (!pausedRef.current && singleSetWidth > 0) {
        // Movement speed: 30 pixels per second
        positionRef.current += (30 * delta) / 1000;

        if (positionRef.current >= singleSetWidth) {
          positionRef.current %= singleSetWidth;
        }

        viewport.scrollLeft = positionRef.current;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // =============================================
  // MANUAL NAVIGATION
  // =============================================

  const moveCarousel = (direction) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const firstCard = track.querySelector(
      "[data-review-card]"
    );

    if (!firstCard) return;

    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap) || 0;

    const cardWidth =
      firstCard.getBoundingClientRect().width;

    const distance = cardWidth + gap;
    const loopWidth = track.scrollWidth / 2;

    if (loopWidth <= 0) return;

    positionRef.current =
      (
        positionRef.current +
        direction * distance +
        loopWidth
      ) % loopWidth;

    viewport.scrollLeft = positionRef.current;
  };

  return (
    <section
      id="reviews"
      className="relative scroll-mt-[90px] overflow-hidden bg-[#FFFDF8] pb-9 pt-5 sm:pb-11 sm:pt-6cd "
    >

      {/* =============================================
          SECTION HEADING
      ============================================= */}
      <div className="mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">

        {/* SMALL LABEL */}
        <div className="mb-2 flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-[#B68B00]" />

          <p className="font-['Poppins'] text-[11px] font-bold uppercase tracking-[0.3em] text-[#996000]">
            STUDENT REVIEWS
          </p>

          <span className="h-px w-8 bg-[#B68B00]" />

        </div>

        {/* MAIN HEADING */}
        <h2
          className="text-[34px] font-bold leading-[1.2] text-[#063B27] sm:text-[44px] lg:text-[50px]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          What Our Students{" "}
          <span className="italic text-[#286C28]">
            Say
          </span>
        </h2>

        {/* YELLOW UNDERLINE */}
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#FFE000]" />

        {/* SUBHEADING */}
        <p className="mt-3 font-['Poppins'] text-sm leading-6 text-[#647067]">
          Real experiences from our creative community.
        </p>

      </div>

      {/* =============================================
          CAROUSEL - CLOSE TO HEADING
      ============================================= */}
      <div
        className="relative mt-5 sm:mt-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(
              event.relatedTarget
            )
          ) {
            setIsPaused(false);
          }
        }}
      >

        {/* SCROLL VIEWPORT */}
        <div
          ref={viewportRef}
          className="w-full overflow-x-hidden"
          aria-label="Student reviews carousel"
        >

          {/* MOVING TRACK */}
          <div
            ref={trackRef}
            className="flex w-max items-stretch gap-5 py-2 lg:gap-6"
          >

            {loopedReviews.map((review, index) => (

              <div
                key={`${review.name}-${index}`}
                data-review-card
                aria-hidden={index >= reviews.length}
                className="w-[min(84vw,370px)] shrink-0 sm:w-[360px] lg:w-[390px]"
              >
                <ReviewCard review={review} />
              </div>

            ))}

          </div>

        </div>

        {/* SOFT EDGE FADES */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#FFFDF8] to-transparent sm:w-12" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#FFFDF8] to-transparent sm:w-12" />

        {/* =============================================
            NAVIGATION
        ============================================= */}
        <div className="relative z-10 mt-3 flex items-center justify-center gap-5">

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label="Previous reviews"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#063B27] text-2xl text-white transition-all duration-300 hover:bg-[#286C28]"
          >
            ‹
          </button>

          {/* YELLOW LINE */}
          <span className="h-1 w-20 rounded-full bg-[#FFE000]" />

          {/* NEXT */}
          <button
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label="Next reviews"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#063B27] text-2xl text-white transition-all duration-300 hover:bg-[#286C28]"
          >
            ›
          </button>

        </div>

      </div>

    </section>
  );
}

export default Reviews;
