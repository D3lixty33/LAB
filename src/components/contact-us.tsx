import React from "react";

export default function ContactUs() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            LAB SRL
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Hai delle domande, dei dubbi ? Compila il form e contattaci.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-xl">Email</h4>
              <p className="text-gray-600">info@lab.srl</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Phone</h4>
              <p className="text-gray-600">Tel. 0423 374086</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Office</h4>
              <p className="text-gray-600">Piazza Serenissima, 60</p>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="bg-gray-50 shadow-xl rounded-2xl p-8 md:p-10 lg:p-12">
          <form className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label className="font-medium">Nome</label>
              <input
                type="text"
                placeholder="..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-medium">Indirizzo email</label>
              <input
                type="email"
                placeholder="info@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-medium">Testo</label>
              <textarea
                rows={5}
                placeholder="..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Invia
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}