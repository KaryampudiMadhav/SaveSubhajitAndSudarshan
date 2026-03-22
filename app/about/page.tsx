import AboutFamilyIntro from "../_components/AboutFamilyIntro";
import AboutSyndrome from "../_components/AboutSyndrome";
import DonateScanSection from "../_components/DonateScanSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About the Family | Save Subhajit & Sudarshan',
  description: 'Learn the heartbreaking story of Subhajit and Sudarshan, two young brothers battling Lesch-Nyhan Syndrome, and how you can help them survive.',
  keywords: 'Lesch-Nyhan Syndrome, Medical Fundraising, Save Subhajit, Save Sudarshan, Family Story',
};

export default function AboutFamilyPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <AboutFamilyIntro />
      <AboutSyndrome />
      <DonateScanSection />
    </main>
  );
}
