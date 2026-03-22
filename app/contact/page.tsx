import { Facebook, Instagram, Mail, MessageCircle, Phone, Twitter } from "lucide-react";

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
            <p className="text-xl text-gray-800 ml-9">+1234 567890 (Pinky Chakraborty)</p>
          </section>

          {/* Email */}
          <section>
            <h2 className="flex items-center text-2xl font-bold text-black mb-3">
              <Mail className="w-6 h-6 mr-3 fill-current text-gray-400" />
              EMAIL
            </h2>
            <p className="text-xl text-gray-800 ml-9">xyz@gmail.com</p>
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
        <div className="flex items-center space-x-6 pt-10 ml-9">
          <a href="#" className="text-black hover:text-[#5e6bd4] transition-colors">
            {/* Custom X Logo or Twitter */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-10 h-10 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a href="#" className="text-[#1877f2] hover:opacity-80 transition-opacity">
            <Facebook className="w-10 h-10 fill-current border-none" />
          </a>
          <a href="#" className="text-[#e1306c] hover:opacity-80 transition-opacity">
            <Instagram className="w-10 h-10" />
          </a>
        </div>
      </div>
    </main>
  );
}
