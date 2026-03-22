import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#5e6bd4] w-full py-1.5 md:py-2 px-6 md:px-8 flex items-center relative sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center z-10">
        <Image 
          src="/donation_logo.png" 
          alt="Donate Logo" 
          width={100} 
          height={100} 
          className="h-[40px] md:h-[48px] w-auto object-contain scale-110 md:scale-125 origin-left"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-6 md:space-x-10 font-inter font-medium text-white text-[15px] z-0 w-max">
        <Link href="/" className="hover:text-purple-200 transition-colors">Home</Link>
        <Link href="/donate" className="hover:text-purple-200 transition-colors">Donate</Link>
        <Link href="/medical-info" className="hover:text-purple-200 transition-colors">Medical Info</Link>
        <Link href="/about" className="hover:text-purple-200 transition-colors">About the family</Link>
        <Link href="/contact" className="hover:text-purple-200 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
