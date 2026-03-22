import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#5362cf] py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between pb-12">
        <div className="mb-12 md:mb-0 max-w-xs">
          <div className="flex items-center mb-10">
            <Image 
              src="/donation_logo.png" 
              alt="Donate Logo" 
              width={400} 
              height={150} 
              className="h-[100px] md:h-[130px] w-auto object-contain scale-110 origin-left" 
            />
          </div>          <p className="font-inter text-2xl text-white">
            Make a <span className="text-[#fde047] font-bold">Big</span> difference by <span className="text-[#fde047] font-bold">Small</span> Efforts
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 font-inter text-white">
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg mb-2">Fundraising Platform</h3>
            <a href="https://www.impactguru.com/fundraiser/help-subhajit-and-sudarshan" className="opacity-70 hover:opacity-100 transition-opacity">Impact Guru</a>
            <a href="/csr" className="opacity-70 hover:opacity-100 transition-opacity">CSR Initiatives</a>
            <a href="/benevity" className="opacity-70 hover:opacity-100 transition-opacity">Benevity Corporate</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg mb-2">Explore Links</h3>
            <a href="/about" className="opacity-70 hover:opacity-100 transition-opacity">About Family</a>
            <a href="/medical-info" className="opacity-70 hover:opacity-100 transition-opacity">Medical Documents</a>
            <a href="/donate" className="opacity-70 hover:opacity-100 transition-opacity">Donate Now</a>
            <a href="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact Us</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="opacity-70">93332560570</p>
            <p className="opacity-70">chakrabortypinki174@gmail.com</p>
            <div className="mt-4">
              <p className="mb-2">Your Message:</p>
              <textarea 
                className="w-full bg-white/10 border border-white/20 rounded p-3 text-sm placeholder-white/50 text-white outline-none focus:border-white/50 transition-colors"
                placeholder="Send your message"
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/20 pt-8" />
    </footer>
  );
}
