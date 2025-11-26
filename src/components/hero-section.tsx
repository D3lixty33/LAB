import lion from "@/assets/images/webp/lion/desktop/lion-desktop.webp";
import office from "@/assets/images/webp/office/desktop/office-desktop.webp";
import lock from "@/assets/images/webp/lock/desktop/lock-desktop.webp";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface Image {
  id: string;
  src: string;
  text: string;
}

export default function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let currentX = 0;     // animated position
    let targetX = 0;      // actual scroll target
    const maxScroll = () => el.scrollWidth - el.clientWidth;

    const setX = gsap.quickSetter(el, "x", "px");
  //  const shadowSetter = gsap.quickSetter(".item-shadow", "opacity");

    // -----------------------------
    // Smooth scrolling loop (GSAP RAF)
    // -----------------------------
    gsap.ticker.add(() => {
      currentX = gsap.utils.interpolate(currentX, targetX, 0.12); // smoothing
      setX(currentX);
    });

    // -----------------------------
    // Scroll handler
    // -----------------------------
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      targetX -= e.deltaY * 1.1;
      targetX = Math.max(Math.min(targetX, 0), -maxScroll());
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  // -----------------------------
  // Hover shadow optimization (GPU smooth)
  // -----------------------------
  const handleMouseEnter = () => {
    gsap.to(".item-shadow", {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".item-shadow", {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  const images: Image[] = [
    { id: "1", src: lion, text: "LA VERA FORZA SI MISURA IN CIO CHE PROTEGGI" },
    {
      id: "2",
      src: office,
      text: "LAB E' UNA PIATTAFORMA PER COLLABORARE NELLA GESTIONE DEI RISCHI",
    },
    {
      id: "3",
      src: lock,
      text: "LAB E' SALUTE CASA VITA RISPARMIO PREVIDENZA VIAGGI",
    },
  ];

  return (
    <>
      <div
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="snap-mandatory flex space-x-4 p-4"
      >
        {images.map((img) => (
          <div
            key={img.id}
            className="item snap-start relative flex-shrink-0 w-full h-[500px] rounded-lg overflow-hidden"
          >
            {/* REAL IMAGE */}
            <img
              src={img.src}
              loading="lazy"
              alt={`slide-${img.id}`}
              className="w-full h-full object-cover"
            />

            {/* GPU SHADOW OVERLAY */}
            <div className="item-shadow absolute inset-0 bg-black opacity-0 pointer-events-none" />

            {/* TEXT */}
            <div className="absolute inset-0 bg-grey-700 bg-opacity-40 flex items-center">
              <h1 className="h1 text-white text-6xl font-bold pl-8 max-sm:text-3xl">
                {img.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
