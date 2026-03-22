import { Facebook, Instagram, Mail, MessageCircle, Phone, Twitter } from "lucide-react";
import DonateScanSection from "../_components/DonateScanSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us | Save Subhajit & Sudarshan',
  description: 'Get in touch with the Chakraborty family. Find our phone number, email address, and social media links here to offer support or verify details.',
  keywords: 'Contact Pinky Chakraborty, Phone Number, Email, Social Media, Charity Contact',
  openGraph: {
    title: 'Contact Us | Save Subhajit & Sudarshan',
    description: 'Get in touch with the Chakraborty family to offer support or verify details.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact the Chakraborty Family',
    description: 'Get in touch with the Chakraborty family to offer support or verify details.',
  }
};

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col items-center justify-start min-h-screen bg-white py-20 px-6">
      <div className="w-full max-w-2xl bg-white flex flex-col items-start space-y-10">
        <h1 className="font-outfit font-black text-4xl md:text-5xl text-[#5e6bd4] uppercase tracking-wider mb-2">
          YOU CAN CONTACT US AT:
        </h1>

        <div className="w-full space-y-8 font-inter">
          {/* Mobile No */}
          <section>
            <h2 className="flex items-center text-2xl font-bold text-black mb-3">
              <Phone className="w-6 h-6 mr-3 fill-current" />
              MOBILE NO.
            </h2>
            <p className="text-xl text-gray-800 ml-9">93332560570</p>
          </section>

          {/* Email */}
          <section>
            <h2 className="flex items-center text-2xl font-bold text-black mb-3">
              <Mail className="w-6 h-6 mr-3 fill-current text-gray-400" />
              EMAIL
            </h2>
            <p className="text-xl text-gray-800 ml-9">chakrabortypinki174@gmail.com</p>
          </section>

          {/* Message */}
          <section className="w-full">
            <h2 className="flex items-center text-2xl font-bold text-black mb-4">
              <MessageCircle className="w-6 h-6 mr-3 fill-current text-gray-300" />
              YOUR MESSAGE
            </h2>
            <div className="ml-9">
              <textarea 
                className="w-full bg-[#f8f9fe] border border-gray-100 rounded-lg p-6 text-gray-700 min-h-[150px] outline-none focus:border-[#5e6bd4] transition-colors resize-y text-lg"
                placeholder="Send your message"
              ></textarea>
            </div>
          </section>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center gap-6 pt-10 ml-9">
          <a href="https://x.com/QuietHopeMom" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5e6bd4] transition-colors">
            {/* X Logo */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-10 h-10 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61585613822773&sk=about" target="_blank" rel="noopener noreferrer" className="text-[#1877f2] hover:opacity-80 transition-opacity">
            <Facebook className="w-10 h-10 fill-current border-none" />
          </a>
          <a href="https://www.instagram.com/quiethopemom/" target="_blank" rel="noopener noreferrer" className="text-[#e1306c] hover:opacity-80 transition-opacity">
            <Instagram className="w-10 h-10" />
          </a>
          <a href="https://www.youtube.com/@Save-Subhajit-n-Sudharshan" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            {/* YouTube SVG */}
            <svg viewBox="0 0 24 24" fill="#FF0000" className="w-12 h-12"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://www.reddit.com/user/QuietHopeMom/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            {/* Reddit SVG */}
            <svg viewBox="0 0 24 24" fill="#FF4500" className="w-11 h-11"><path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.12c0 1.253 1.022 2.27 2.28 2.27 1.258 0 2.28-1.017 2.28-2.27s-1.022-2.271-2.28-2.271c-1.002 0-1.849.646-2.164 1.543l-4.437-1.037c-.36-.084-.717.123-.842.471l-1.637 5.159c-2.738.073-5.212.83-7.042 2.036-.481-.476-1.144-.775-1.87-.775-1.465 0-2.657 1.186-2.657 2.645 0 .937.494 1.761 1.229 2.215-.05.289-.076.586-.076.885 0 3.743 4.412 6.784 9.845 6.784 5.433 0 9.845-3.041 9.845-6.784 0-.295-.026-.588-.076-.874.721-.456 1.205-1.267 1.205-2.195zm-18.04 0c0-.585.48-1.062 1.07-1.062.298 0 .565.123.754.321-1.096.79-1.782 1.838-1.974 3.014-.527-.291-.849-.894-.849-1.527v-.746zm14.869 3.092c-.378 1.96-3.033 3.527-6.829 3.527-3.796 0-6.45-1.567-6.829-3.527-.087-.456.242-.888.705-.888.358 0 .673.256.745.609.288 1.457 2.457 2.645 5.378 2.645 2.922 0 5.091-1.188 5.379-2.645.071-.353.386-.609.745-.609.462 0 .791.431.706.888zm.278-1.526c-.198-1.184-.89-2.235-1.996-3.029.183-.19.444-.307.734-.307.59 0 1.07.477 1.07 1.062 0 .622-.313 1.214-.827 1.517v.757h1.019z"/></svg>
          </a>
          <a href="https://discord.gg/s6YMUc4N" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            {/* Discord SVG */}
            <svg viewBox="0 0 127.14 96.36" fill="#5865F2" className="w-10 h-10"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.1,46,96,53,91,65.69,84.69,65.69Z"/></svg>
          </a>
        </div>
      </div>
      <DonateScanSection />
    </main>
  );
}
