import HeroSection from "./_components/HeroSection";
import ProgressSection from "./_components/ProgressSection";
import StorySection from "./_components/StorySection";
import VideoSection from "./_components/VideoSection";
import ContributionsSection from "./_components/ContributionsSection";
import DonateScanSection from "./_components/DonateScanSection";
import HelpSection from "./_components/HelpSection";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-start">
      <HeroSection />
      <ProgressSection />
      <StorySection />
      <VideoSection />
      <ContributionsSection />
      <DonateScanSection />
      <HelpSection />
    </main>
  );
}
