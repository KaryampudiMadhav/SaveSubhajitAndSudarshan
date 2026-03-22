import React from 'react';
import DonateScanSection from "../_components/DonateScanSection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Documents & Proof | Save Subhajit & Sudarshan',
  description: 'View the official medical documents, doctor appeal videos, and hospital records proving the authenticity of Subhajit and Sudarshan\'s condition.',
  keywords: 'Medical Proof, Doctor Video, Lesch-Nyhan Syndrome Diagnosis, Hospital Records, Transparent Donation',
};

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
            <span className="mr-3 text-3xl">⚕</span> MEDICAL DOCUMENTS AND PHOTOS
          </h2>
          <a
            href="https://drive.google.com/drive/folders/1dt0TbvX-eAIvsJSbpHnTVe5WJL_amg12?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-lg underline hover:text-[#5e6bd4] transition-colors text-black break-all"
          >
            https://drive.google.com/drive/folders/1dt0TbvX-eAIvsJSbpHnTVe5WJL_amg12?usp=drive_link
          </a>
        </section>

        <section>
          <h2 className="font-outfit font-bold text-2xl flex items-center mb-4 text-black">
            <span className="mr-3 text-3xl">📽</span> DOCTOR VIDEO
          </h2>
          <a
            href="https://youtu.be/WhiP-QGHMTI"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-lg underline hover:text-[#5e6bd4] transition-colors text-black break-all"
          >
            https://youtu.be/WhiP-QGHMTI
          </a>
        </section>

        <section>
          <h2 className="font-outfit font-bold text-2xl flex items-center mb-4 text-black">
            <span className="mr-3 text-3xl">🎞</span> MOTHER&apos;S APPEAL VIDEO
          </h2>
          <a
            href="https://youtube.com/shorts/ruqWLY-OMY0?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-lg underline hover:text-[#5e6bd4] transition-colors text-black break-all"
          >
            https://youtube.com/shorts/ruqWLY-OMY0?feature=share
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
            className="font-inter text-lg underline hover:text-[#5e6bd4] transition-colors text-black break-all"
          >
            https://www.impactguru.com/fundraiser/help-subhajit-and-sudarshan
          </a>
        </section>
      </div>
      <DonateScanSection />
    </main>
  );
}
