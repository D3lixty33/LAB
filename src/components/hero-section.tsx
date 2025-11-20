import lion from "@/assets/images/lion.jpg";
import office from "@/assets/images/office.jpg";
import lock from "@/assets/images/lock.jpg";
import gsap from "gsap";
import "./styles/index.css";
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

  const handleMouseEnter = () => {
    gsap.to(".item", {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 8px",
      duration : 0.4,
      ease : "power3.out"
    })
  }

  const handleMouseLeave = () => {
    gsap.to(".item" , {
      boxShadow : "0 0 0 0px",
      duration : 0.6,
      ease : "power3.inOut"
    })
  }

  const images: Image[] = [
    { id: "1", src: lion, text: "LA VERA FORZA SI MISURA IN CIO CHE PROTEGGI" },
    {
      id: "2",
      src: office,
      text: "LAB è una piattaforma tecnologica per collaborare nel gestire rischi",
    },
    {
      id: "3",
      src: lock,
      text: "Lab è Salute Casa Vita Risparmio Previdenza Auto Viaggi",
    },
  ];

  return (
    <>
      <div 
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="snap-mandatory flex space-x-4 p-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="item snap-start relative flex-shrink-0 w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={img.src}
              alt={`slide-${img.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-grey-700 bg-opacity-40 flex items-center">
              <h1 className="text-white text-6xl font-bold pl-8" key={img.id}>
                {img.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
