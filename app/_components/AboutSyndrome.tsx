export default function AboutSyndrome() {
  return (
    <section className="w-full bg-[#e2e5fb] flex flex-col items-center py-24 px-6">
      <div className="max-w-4xl w-full text-center mb-16">
        <h2 className="font-outfit font-black text-4xl md:text-5xl text-black uppercase tracking-wider">
          WHAT IS <span className="text-[#5e6bd4]">LESCH-NYHAN SYNDROME</span>?
        </h2>
      </div>

      <div className="max-w-3xl w-full font-inter text-lg md:text-xl text-gray-900 leading-relaxed">
        <p className="mb-6">
          <span className="text-[#5e6bd4] font-semibold">Lesch-Nyhan Syndrome</span> (LNS) is a rare genetic disorder that affects the nervous system and causes severe neurological and physical complications.
        </p>
        
        <p className="mb-4">Children with LNS often suffer from:</p>
        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li>Severe muscle control problems</li>
          <li>Developmental delays</li>
          <li>Self-injury behaviors</li>
          <li>Kidney and metabolic complications</li>
          <li>Limited mobility or complete bedridden conditions</li>
        </ul>

        <p className="space-y-4">
          <span className="block mb-4">Managing this condition requires continuous medical care, specialized treatment, and long-term support.</span>
          <span className="block">The cost of treatment is extremely high, making it impossible for many families to handle alone.</span>
        </p>
      </div>
    </section>
  );
}
