export default function HelpSection() {
  return (
    <section className="w-full bg-[#6574dc] py-20 px-4 flex flex-col items-center justify-center text-center">
      <h2 className="font-outfit font-black text-4xl text-white mb-10 tracking-wider">
        HOW YOU CAN HELP
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10 font-outfit font-black text-3xl md:text-5xl tracking-widest">
        <span className="text-[#6ee7b7]">DONATE</span>
        <span className="text-[#fde047]">SHARE</span>
        <span className="text-[#fca5a5]">SUPPORT</span>
      </div>

      <div className="font-inter text-xl md:text-2xl text-white leading-relaxed max-w-3xl mb-12">
        <p>
          Every <span className="text-[#fde047] font-semibold">Share</span> and every small <span className="text-[#fde047] font-semibold">Donation</span> brings <span className="text-[#fde047] font-semibold">Hope</span>.
        </p>
        <p>
          Together, we can give <span className="text-[#fde047] font-semibold">Subhajit</span> and <span className="text-[#fde047] font-semibold">Sudarshan</span> a chance to live.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button className="bg-black text-white font-inter font-bold text-lg py-4 px-8 flex items-center space-x-2 w-full sm:w-auto justify-center hover:bg-gray-800 transition-colors">
          <span>Donate Now</span>
          <span className="text-xl">💕</span>
        </button>
        
        <button className="bg-transparent border border-black text-black font-inter font-bold text-lg py-4 px-8 w-full sm:w-auto justify-center hover:bg-black/5 transition-colors">
          Become a Volunteer
        </button>
      </div>
    </section>
  );
}
