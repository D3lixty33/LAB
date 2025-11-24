import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { v4 as uuidv4 } from "uuid";
import broker from "@/assets/images/webp/broker.webp";
import arrowDown from "@/assets/small-animations/arrow down.webm";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface PresentationProps {
  id: string;
  text: React.ReactNode;
}

export default function Presentation() {
  const comp = useRef(null); // important for gsap.context()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(".who", { type: "words" });

      gsap.from(".b-who", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".b-who",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(split.words, {
        y: 40,
        opacity: 0,
        stagger: 0.06,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".who",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".img-flow", {
        y: -150,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".img-flow",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".video", {
        
      })
    }, comp);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  // JSX handling
  const handleText = (idTxt: string) => {
    const lab = "LAB SRL";

    switch (idTxt) {
      case "0":
        return <span className="font-bold">{lab}</span>;
      case "1":
        return <span className="font-bold">PROVA</span>;
      default:
        return null;
    }
  };

  const myuuid = uuidv4();

  const text: PresentationProps[] = [
    {
      id: myuuid,
      text: (
        <>
          {handleText("0")} è una società di brokeraggio assicurativo costituita
          nel 2009 con sede a Castelfranco Veneto (Treviso). Vanta una
          pluriennale esperienza nel settore grazie ad una expertise maturata
          nella gestione di convenzioni assicurative connesse ad operazioni di
          mutui e finanziamenti in genere. Missione dell’azienda è di affiancare
          i clienti ed i propri collaboratori nella gestione del rischio in modo
          strategico ed altamente innovativo convertendolo in vero e proprio
          valore.
        </>
      ),
    },
  ];

  return (
    <div ref={comp} className="flex w-full h-auto flex-col gap-16 mt-4 p-4">
      <div className="flex w-full">
        <div className="flex w-1/2">
          <h1 className="font-bold text-8xl who">CHI SIAMO</h1>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <div className="flex w-1/2 w-8 h-8">
            <video autoPlay muted loop playsInline className="video">
              <source src={arrowDown} type="video/webm"></source>
            </video>
          </div>
        </div>
      </div>
      <div className="flex w-full h-auto gap-8">
        {/* Image */}
        <div className="w-1/2 flex rounded-lg relative overflow-hidden img-flow">
          <img src={broker} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gray-200 opacity-20 flex items-center justify-center">
            <p className="text-white">Prova</p>
          </div>
        </div>

        {/* Text */}
        <div className="w-1/2 flex items-center">
          {text.map((txt) => (
            <p
              key={txt.id}
              className="text-gray-800 text-lg leading-relaxed b-who"
              style={{ fontWeight: 100 }}
            >
              {txt.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
