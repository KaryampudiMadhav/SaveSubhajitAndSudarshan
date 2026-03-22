import DonateScanSection from "../_components/DonateScanSection";

export default function DonatePage() {
  return (
    <main className="w-full flex flex-col items-center justify-start min-h-screen bg-white">
      <div className="w-full max-w-4xl text-center py-20 px-6">
        <h1 className="font-outfit font-black text-4xl md:text-5xl text-[#5e6bd4] uppercase tracking-wider mb-6">
          MAKE A DIFFERENCE TODAY
        </h1>
        <p className="font-inter text-xl text-black leading-relaxed">
          Your Donation Can Help Provide Life-Saving Treatment And<br className="hidden md:block" />
          Care For Subhajit And Sudarshan.
        </p>
      </div>

      <div className="w-full max-w-4xl px-6 text-left mb-4">
        <h2 className="font-outfit font-black text-3xl md:text-4xl text-black uppercase tracking-wider mb-6">
          DONATE VIA:
        </h2>
        
        <div className="mb-8">
          <h3 className="flex items-center text-2xl font-bold text-black mb-2">
            <span className="mr-3 text-3xl">🫂</span> IMPACT GURU CAMPAIGN
          </h3>
          <a
            href="https://www.impactguru.com/fundraiser/help-subhajit-and-sudarshan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-lg underline hover:text-[#5e6bd4] transition-colors text-black ml-10 block"
          >
            https://www.impactguru.com/fundraiser/help-subhajit-and-sudarshan
          </a>
        </div>
      </div>

      {/* Reuse the existing DonateScanSection */}
      <DonateScanSection />
    </main>
  );
}
