import Image from "next/image";

interface HeroSectionProps {
  mainImageSrc?: string;
  secondaryImageSrc?: string;
}

export default function HeroSection({ mainImageSrc, secondaryImageSrc }: HeroSectionProps) {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[85vh]">
      {/* Left Content Area */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
        <h1 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-black mb-6 uppercase">
          HELP SAVE <span className="text-[#5e6bd4]">TWO</span><br />
          BROTHERS FIGHTING A<br />
          RARE <span className="text-[#5e6bd4]">GENETIC DISEASE</span>
        </h1>
        
        <p className="font-inter text-lg text-gray-900 mb-10 max-w-xl leading-relaxed">
          Subhajit (13) and Sudarshan (1) are battling Lesch-Nyhan Syndrome. Their family has exhausted all savings. Your support can help them get life-saving treatment.
        </p>
        
        <div className="flex items-center space-x-6">
          <button className="bg-black text-white font-inter font-bold text-lg py-4 px-8 flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <span>Donate Now</span>
            <span className="text-xl">💕</span>
          </button>
          
          <a href="#video" className="font-inter font-medium text-black underline decoration-1 underline-offset-4 hover:text-gray-700 transition-colors">
            Watch Their Story
          </a>
        </div>
      </div>

      {/* Right Image Stack */}
      <div className="flex-1 flex flex-col gap-6 p-6 md:p-12 justify-center">
        {mainImageSrc && (
          <div className="relative w-full aspect-[4/3] max-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
            <Image 
              src={mainImageSrc} 
              alt="Hero Image 1" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        )}
        {secondaryImageSrc && (
          <div className="relative w-full aspect-[4/3] max-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white md:ml-12 bg-gray-100">
            <Image 
              src={secondaryImageSrc} 
              alt="Hero Image 2" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
