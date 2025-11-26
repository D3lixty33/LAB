import gsap from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";
import Allianz from '@/assets/images/svg/allianz-logo.svg'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface Image {
  id: string;
  src?: string;
  text: string;
}

export default function Player() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const comp = useRef(null);

  // TITLE ANIMATION
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(".title", { type: "words" });

      gsap.from(split.words, {
        y: 40,
        opacity: 0,
        stagger: 0.06,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  // CAROUSEL SCROLL
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let currentX = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const scrollAmount = e.deltaY * 1.2;
      currentX -= scrollAmount;

      const maxScroll = el.scrollWidth - el.clientWidth;
      currentX = Math.max(Math.min(currentX, 0), -maxScroll);

      gsap.to(el, {
        x: currentX,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  // HOVER EFFECTS
  const handleMouseEnter = () => {
    gsap.to(".item", {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 8px",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".item", {
      boxShadow: "0 0 0 0px",
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  const images: Image[] = [
    { id: "1", src: Allianz, text: "" },
    {
      id: "2",
      src: "",
      text: "LAB è una piattaforma tecnologica per collaborare nel gestire rischi",
    },
    {
      id: "3",
      src: "",
      text: "Lab è Salute Casa Vita Risparmio Previdenza Auto Viaggi",
    },
  ];

  return (
    <div ref={comp}>
      {/* Title */}
      <div className="flex w-full h-auto p-4 justify-center">
        <h1 className="font-bold text-8xl player max-sm:text-6xl title inline-block">
          I NOSTRI PLAYER
        </h1>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="snap-mandatory flex space-x-4 p-4"
      >
        {images.map((img) => (
          <div
            key={img.id}
            className="item snap-start relative flex-shrink-0 w-full h-[250px] rounded-lg overflow-hidden"
          >
            {img.src && (
              <img
                src={img.src}
                loading="lazy"
                alt={`slide-${img.id}`}
                className="w-full h-full object-fit"
              />
            )}

            <div className="absolute inset-0 bg-grey-700 bg-opacity-40 flex items-center">
              <h1 className="h1 text-white text-6xl font-bold pl-8">
                {img.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
