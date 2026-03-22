import Image from "next/image";

interface ContributionsSectionProps {
  imageUrl1?: string;
  imageUrl2?: string;
}

export default function ContributionsSection({ imageUrl1, imageUrl2 }: ContributionsSectionProps) {
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

      <div className="flex-1 flex flex-col md:flex-row h-[50vh] md:h-[60vh] min-h-[400px]">
        {imageUrl1 && (
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full border-b-[6px] md:border-b-0 md:border-r-[6px] border-[#e2e5fb]">
            <Image 
              src={imageUrl1} 
              alt="Contribution Impact 1" 
              fill 
              className="object-cover"
            />
          </div>
        )}
        {imageUrl2 && (
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full border-t-[6px] md:border-t-0 md:border-l-[6px] border-[#e2e5fb]">
            <Image 
              src={imageUrl2} 
              alt="Contribution Impact 2" 
              fill 
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
