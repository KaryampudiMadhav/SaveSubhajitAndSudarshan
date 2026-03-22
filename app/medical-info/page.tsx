export default function MedicalInfoPage() {
  return (
    <main className="w-full bg-white flex flex-col items-center justify-start py-20 px-4 min-h-[70vh]">
      <div className="w-full max-w-4xl text-center mb-16">
        <h1 className="font-outfit font-black text-4xl md:text-5xl text-[#5e6bd4] tracking-wider mb-6">
          FULL TRANSPARENCY
        </h1>
        <p className="font-inter text-xl md:text-2xl text-black">
          To Ensure Complete Transparency, All Supporting Documents
          <br className="hidden md:block" />
          Are Available Below.
        </p>
      </div>

      <div className="w-full max-w-3xl flex flex-col space-y-12 text-left">
        <section>
          <h2 className="font-outfit font-bold text-2xl flex items-center mb-4 text-black">
            <span className="mr-3 text-3xl">⚕</span> MEDICAL REPORTS
          </h2>
          <a
            href="https://drive.google.com/folder"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-lg underline hover:text-[#5e6bd4] transition-colors text-black"
          >
            https://drive.google.com/folder
          </a>
        </section>

        <section>
          <h2 className="font-outfit font-bold text-2xl flex items-center mb-4 text-black">
            <span className="mr-3 text-3xl">📽</span> APPEAL VIDEO
          </h2>
          <a
            href="https://www.youtube.com/watch?v=WHiP-QGHMTI"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-lg underline hover:text-[#5e6bd4] transition-colors text-black"
          >
            https://www.youtube.com/watch?v=WHiP-QGHMTI
          </a>
        </section>

        <section>
          <h2 className="font-outfit font-bold text-2xl flex items-center mb-4 text-black">
            <span className="mr-3 text-3xl">🫂</span> IMPACT GURU CAMPAIGN
          </h2>
          <a
            href="https://www.impactguru.com/fundraiser/help-subhajit-and-sudarshan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-lg underline hover:text-[#5e6bd4] transition-colors text-black"
          >
            https://www.impactguru.com/fundraiser/help-subhajit-and-sudarshan
          </a>
        </section>
      </div>
    </main>
  );
}
