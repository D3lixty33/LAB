import handShake from "@/assets/images/webp/hand shake/desktop/hand-shake-desktop.webp";
import carSpeed from "@/assets/images/webp/car-speed/desktop/car-speed-desktop.webp";
import smilingGirl from "@/assets/images/webp/smiling-girl/desktop/smiling-girl-desktop.webp";
import { v4 as uuidv4 } from "uuid";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CollaborationProps {
  id: string;
  subtitle: string;
  img: string; // <-- now store only the path
  text: string;
  class?: string;
}

export default function Collaboration() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(".collab", { type: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards",
          start: "top 80%",
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
          trigger: ".collab",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.addLabel(".card1")
        .from(".card1", {  x: 250, opacity: 0, duration: 0.6 })
        .addLabel(".card2")
        .from(".card2", {  x: 350, opacity: 0, duration: 0.6 })
        .addLabel(".card3")
        .from(".card3", {  x: 450, opacity: 0, duration: 0.6 });
    }, comp);

    return () => ctx.revert();
  });

  const collaborationCard: CollaborationProps[] = [
    {
      id: uuidv4(),
      img: handShake,
      class: "card1",
      subtitle: "Soluzioni per i mediatori del credito",
      text: "(L. 141 collaborazione tra mediatori creditizi e broker assicurativi). Lab srl consente di mettere a disposizione gratuitamente una piattaforma on line con differenti prodotti assicurativi di primarie e specializzate Compagnie assicurative. Principali vantaggi della partnership: Ampia gamma di soluzioni Sistema all’avanguardia Autonomia attraverso un sistema altamente performante con marginalità ben al di sopra della media di mercato Sistema di emissione veloce, fruibile, intuitivo e di facile consultazione Assistenza tecnica e professionale verso gli intermediari  nella gestione delle proposte assicurative e garanzia del service verso la clientela.",
    },
    {
      id: uuidv4(),
      img: carSpeed,
      class: "card2",
      subtitle: "Soluzioni per gli intermediari assicurativi",
      text: "(lettere E,A;B del RUI) Lab Srl consente agli intermediari regolarmente contrattualizzati l’utilizzo gratuito della piattaforma informatica di propria concezione che consente loro di poter emettere in autonomia e con provvigioni al di sopra della media di mercato, polizze assicurative relative ai rami RCA ed CVT con primarie Compagnie assicurative. La piattaforma è facilmente fruibile via web e permette di operare in completa autonomia con soluzioni che permettano l’acquisizione di clientela sia retail che corporate.",
    },
    {
      id: uuidv4(),
      img: smilingGirl,
      class: "card3",
      subtitle: "Soluzioni per dealer e concessionari",
      text: "Il sistema è “chiavi in mano” e permette di ottenere: Redditività ben al di sopra della media di mercato. Completa informatizzazione del processo ed autonomia gestionale. Contenuti tecnico/assicurativi eccellenti. Servizi correlati complementari e funzionali al Business. Gestione sinistri dedicata. Finanziamento polizze. LAB Academy.",
    },
  ];

  return (
    <div className="p-4 " ref={comp}>
      <div className="flex w-full justify-center items-center mb-10">
        <h1 className="font-bold text-8xl collab">COLLABORATORI</h1>
      </div>
      <div className="flex w-full h-[350px] gap-16 cards">
        {collaborationCard.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-lg overflow-hidden w-1/3 h-[300px] ${card.class}`}
          >
            <img
              src={card.img}
              loading="lazy"
              className="w-full object-cover"
              alt=""
            />

            <div className="absolute inset-0 text-white p-6 flex flex-col gap-4 bg-black/30">
              <h1 className="text-lg font-bold">{card.subtitle}</h1>
              <p className="font-thin">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
