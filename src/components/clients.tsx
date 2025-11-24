import family from "@/assets/images/jpg/family.jpg";
import buisness from "@/assets/images/jpg/buisness.jpg";
import { v4 as uuidv4 } from "uuid";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface ClientProps {
  id: string;
  subtitle: string;
  img: string; // <-- now store only the path
  text: string;
}

export default function Clients() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(".collab", { type: "words" });

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
    }, comp);

    return () => ctx.revert();
  });

  const collaborationCard: ClientProps[] = [
    {
      id: uuidv4(),
      img: family,
      subtitle: "Privati",
      text: "Grazie alla professionalità derivante dall’esperienza pluriennale e al costante aggiornamento professionale offriamo ai nostri clienti consulenze ad hoc previa una attenta analisi e valutazione delle migliori soluzioni assicurative proposte dal mercato. L’obiettivo è di affiancare le famiglie nell’affrontare gli imprevisti dovuti alla gestione di sinistri attinenti dalla circolazione stradale , connessi ad abitazioni, condizioni di salute e previdenza in genere. Alcune delle nostre aree di competenza: Salute e Infortuni Abitazione Vita, Risparmio e Previdenza RCA Viaggi"
    },
    {
      id: uuidv4(),
      img: buisness,
      subtitle: "Aziende",
      text: "Il broker è la figura prescelta dalla maggior parte degli imprenditori per affiancarli nella valutazione dei rischi al fine di trovare soluzioni idonee alla tutela delle aziende, per prevenire situazioni sempre più complesse che richiedono soluzioni altamente professionali. Obiettivo principale è quello di consentire alle aziende di rimanere al passo con i tempi guidando l’azienda nella gestione degli eventi che possano ostacolare, danneggiare ed interrompere il ciclo produttivo. Alcune delle nostre aree di competenza: Multirischi Aziende D&O e RC Professionale Key Man Car, Decennale Postuma"
    }
  ];

  return (
    <div className="p-4 " ref={comp}>
      <div className="flex w-full justify-center items-center mb-10">
        <h1 className="font-bold text-8xl collab">A CHI CI RIVOLGIAMO</h1>
      </div>
      <div className="flex w-full h-auto gap-16">
        {collaborationCard.map((card) => (
          <div
            key={card.id}
            className="relative rounded-lg overflow-hidden w-full h-[300px]flex-shrink-0"
          >
            <img src={card.img} className="w-full h-full object-cover" alt="" />

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
