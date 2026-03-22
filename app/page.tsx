import HeroSection from "./_components/HeroSection";
import ProgressSection from "./_components/ProgressSection";
import StorySection from "./_components/StorySection";
import VideoSection from "./_components/VideoSection";
import ContributionsSection from "./_components/ContributionsSection";
import DonateScanSection from "./_components/DonateScanSection";
import HelpSection from "./_components/HelpSection";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";

import { Metadata } from 'next';

export const revalidate = 10; // Revalidate every 10 seconds

export const metadata: Metadata = {
  title: 'Help Save Subhajit & Sudarshan | Donation Campaign',
  description: 'Join our urgent campaign to save Subhajit (13) and Sudarshan (1) from Lesch-Nyhan Syndrome. Every small effort makes a big difference in their fight!',
  keywords: 'Donation, Healthcare, Lesch-Nyhan Syndrome, Charity, Save Children, Medical Fundraiser, India',
  openGraph: {
    title: 'Help Save Subhajit & Sudarshan | Urgent Medical Fundraiser',
    description: 'Join our urgent campaign to save two brothers from Lesch-Nyhan Syndrome. Your donation can save lives.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help Save Subhajit & Sudarshan',
    description: 'Join our urgent campaign to save two brothers from Lesch-Nyhan Syndrome. Your donation can save lives.',
  }
};

export default async function Home() {
  const campaign = await client.fetch('*[_type == "campaign"][0]');
  
  const mainImageSrc = campaign?.mainImage ? urlForImage(campaign.mainImage).width(1200).url() : undefined;
  const secondaryImageSrc = campaign?.secondaryImage ? urlForImage(campaign.secondaryImage).width(1200).url() : undefined;
  const progressImageUrl = campaign?.progressImage ? urlForImage(campaign.progressImage).width(800).url() : undefined;
  const storyImageUrl = campaign?.storyImage ? urlForImage(campaign.storyImage).width(1000).url() : undefined;
  const contributionsImageUrl1 = campaign?.contributionsImage1 ? urlForImage(campaign.contributionsImage1).width(800).url() : undefined;
  const contributionsImageUrl2 = campaign?.contributionsImage2 ? urlForImage(campaign.contributionsImage2).width(800).url() : undefined;
  const videoUrl1 = campaign?.appealVideoUrl || undefined;
  const videoUrl2 = campaign?.secondVideoUrl || undefined;

  return (
    <main className="flex w-full flex-col items-center justify-start">
      <HeroSection mainImageSrc={mainImageSrc} secondaryImageSrc={secondaryImageSrc} />
      <ProgressSection 
        amountRequired={campaign?.amountRequired}
        amountRaised={campaign?.amountRaised}
        supportersCount={campaign?.supportersCount}
        imageUrl={progressImageUrl}
      />
      <StorySection imageUrl={storyImageUrl} />
      <VideoSection videoUrl1={videoUrl1} videoUrl2={videoUrl2} />
      <ContributionsSection imageUrl1={contributionsImageUrl1} imageUrl2={contributionsImageUrl2} />
      <DonateScanSection />
      <HelpSection />
    </main>
  );
}
