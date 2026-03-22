import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#5e6bd4] w-full py-1.5 md:py-2 px-6 md:px-8 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex justify-start">
        <Link href="/" className="flex items-center">
          <Image 
            src="/donation_logo.png" 
            alt="Donate Logo" 
            width={300} 
            height={100} 
            className="h-[55px] md:h-[70px] lg:h-[80px] w-auto object-contain scale-110 md:scale-125 origin-left"
            priority
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex justify-center items-center space-x-4 lg:space-x-8 font-inter font-medium text-white text-[13px] lg:text-[15px] whitespace-nowrap">
        <Link href="/" className="hover:text-purple-200 transition-colors">Home</Link>
        <Link href="/donate" className="hover:text-purple-200 transition-colors">Donate</Link>
        <Link href="/medical-info" className="hover:text-purple-200 transition-colors">Medical Info</Link>
        <Link href="/about" className="hover:text-purple-200 transition-colors">About the family</Link>
        <Link href="/csr" className="hover:text-purple-200 transition-colors">CSR</Link>
        <Link href="/benevity" className="hover:text-purple-200 transition-colors">Benevity</Link>
        <Link href="/contact" className="hover:text-purple-200 transition-colors">Contact</Link>
      </div>
      
      {/* Spacer to keep links perfectly centered */}
      <div className="hidden md:block"></div>
    </nav>
  );
}
