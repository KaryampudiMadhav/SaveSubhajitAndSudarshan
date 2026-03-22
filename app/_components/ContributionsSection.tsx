import Image from "next/image";

export default function ContributionsSection() {
  const contributions = [
    "Specialized medical treatment",
    "Long-term care",
    "Medicines and hospital support",
    "Mobility and therapy support",
  ];

  return (
    <section className="w-full bg-[#e2e5fb] flex flex-col md:flex-row min-h-[60vh]">
      <div className="flex-1 flex flex-col justify-center px-12 md:px-20 py-16">
        <h2 className="font-outfit font-semibold text-2xl lg:text-3xl text-black mb-8 tracking-wide">
          Your contribution will help with:
        </h2>
        
        <ul className="space-y-4">
          {contributions.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-3">
              <div className="bg-[#10b981] rounded-md p-1 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-inter text-gray-800 text-lg lg:text-xl">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex h-[50vh] md:h-auto min-h-[400px]">
        {/* Collage of two images side by side */}
        <div className="relative w-1/2 h-full border-r-[6px] border-[#e2e5fb]">
          <Image 
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600" 
            alt="Subhajit (13)" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative w-1/2 h-full border-l-[6px] border-[#e2e5fb]">
          <Image 
            src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=600" 
            alt="Sudarshan (1)" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
