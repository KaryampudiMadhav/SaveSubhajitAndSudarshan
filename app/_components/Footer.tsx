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
              width={350} 
              height={100} 
              className="h-20 md:h-24 w-auto object-contain" 
            />
          </div>          <p className="font-inter text-2xl text-white">
            Make a <span className="text-[#fde047] font-bold">Big</span> difference by <span className="text-[#fde047] font-bold">Small</span> Efforts
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 font-inter text-white">
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg mb-2">Fundraising Platform</h3>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Impact Guru</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg mb-2">Social Links</h3>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">X</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Facebook</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Whatsapp</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="opacity-70">+1234 567890</p>
            <p className="opacity-70">xyz@gmail.com</p>
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
