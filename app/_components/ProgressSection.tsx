import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProgressSection() {
  return (
    <section className="w-full bg-white flex flex-col md:flex-row">
      <div className="flex-1 relative w-full h-[60vh] md:h-auto min-h-[400px]">
        {/* We use an image here. From the design, it shows a baby image on the left. */}
        <Image 
          src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=1000" 
          alt="Sudarshan (1)" 
          fill 
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center px-12 md:px-20 py-16">
        <h2 className="font-outfit font-bold text-3xl lg:text-4xl text-black mb-10 tracking-wide uppercase">
          FUNDRAISING PROGRESS:
        </h2>
        
        <div className="space-y-4 font-inter text-2xl lg:text-3xl">
          <p className="text-gray-700">
            Required: <span className="text-[#10b981] font-bold">₹2,67,70,000</span>
          </p>
          <p className="text-gray-700">
            Raised: <span className="text-[#ef4444] font-bold">₹1,65,879</span>
          </p>
          <p className="text-gray-700">
            Supporters: <span className="text-[#5e6bd4] font-bold">136</span>
          </p>
        </div>

        <div className="mt-16 flex justify-end">
          <ArrowRight className="w-8 h-8 text-black" />
        </div>
      </div>
    </section>
  );
}
