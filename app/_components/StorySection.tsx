import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="w-full flex flex-col md:flex-row bg-[#e2e5fb]">
      <div className="flex-1 flex flex-col justify-center px-12 md:px-20 py-16">
        <h2 className="font-outfit font-black text-4xl text-black mb-8 tracking-wide">
          STORY:
        </h2>
        
        <div className="font-inter text-gray-800 text-lg leading-relaxed space-y-4 max-w-lg">
          <p>
            A mother is fighting the toughest battle of her life.
          </p>
          <p>
            Pinky Chakraborty’s 13-year-old son Subhajit is completely bedridden due to Lesch-Nyhan Syndrome, a rare genetic disorder.
          </p>
          <p>
            Recently, her 1-year-old baby Sudarshan was diagnosed with the same illness.
          </p>
          <p>
            Her husband works as a Zomato delivery partner, and Pinky is a full-time caregiver. They have exhausted their savings and loans, and now they need our help.
          </p>
        </div>

        <div className="mt-12 flex justify-end max-w-lg">
          <ArrowRight className="w-8 h-8 text-black" />
        </div>
      </div>
      <div className="flex-1 relative w-full h-[60vh] md:h-auto min-h-[500px]">
        {/* Image of the older boy on the right */}
        <Image 
          src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000" 
          alt="Subhajit (13)" 
          fill 
          className="object-cover"
        />
      </div>
    </section>
  );
}
