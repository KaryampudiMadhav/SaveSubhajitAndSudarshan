export default function AboutFamilyIntro() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-20 px-6">
      <div className="max-w-4xl w-full text-center mb-16">
        <h1 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl text-black leading-tight uppercase tracking-wider">
          A <span className="text-[#5e6bd4]">MOTHER&apos;S</span> FIGHT TO<br />
          SAVE HER <span className="text-[#5e6bd4]">SONS</span>
        </h1>
      </div>

      <div className="max-w-3xl w-full font-inter text-lg md:text-xl text-gray-900 leading-relaxed space-y-4">
        <p>
          My name is <span className="font-bold">Pinky Chakraborty</span>, a mother fighting to save both of my children.
        </p>
        <p>
          My 13-year-old son <span className="font-bold">Subhajit</span> is completely bedridden due to <span className="font-bold">Lesch-Nyhan Syndrome</span>, a rare genetic disorder that severely affects movement, neurological development, and overall health.
        </p>
        <p>
          Recently, our 1-year-old baby <span className="font-bold">Sudarshan</span> was diagnosed with the same disease.
        </p>
        <p>
          I have already witnessed how cruel this illness can be. I have seen one child slowly <span className="font-bold">lose</span> his childhood. Now, I am watching the same <span className="font-bold">painful</span> journey begin again with my youngest son.
        </p>
        <p>
          My husband works as a <span className="font-bold">Zomato delivery partner</span>, and I am a <span className="font-bold">full-time caregiver</span> for both children. We have exhausted our <span className="font-bold">savings</span> and taken loans beyond our <span className="font-bold">capacity</span>.
        </p>
        <p>
          Today, we humbly ask for your <a href="#donate" className="text-[#5e6bd4] font-medium underline underline-offset-4 hover:text-indigo-800 transition-colors">support</a>.
        </p>
      </div>
    </section>
  );
}
