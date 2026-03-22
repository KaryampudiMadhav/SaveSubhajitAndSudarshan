import AboutFamilyIntro from "../_components/AboutFamilyIntro";
import AboutSyndrome from "../_components/AboutSyndrome";

export default function AboutFamilyPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <AboutFamilyIntro />
      <AboutSyndrome />
    </main>
  );
}
