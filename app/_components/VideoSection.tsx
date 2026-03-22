"use client";
import React from 'react';

interface VideoSectionProps {
  videoUrl1?: string | null;
  videoUrl2?: string | null;
}

export default function VideoSection({ videoUrl1, videoUrl2 }: VideoSectionProps) {
  // Convert standard YouTube URLs into embeddable URLs
  const getEmbedUrl = (url?: string | null) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const embed1 = getEmbedUrl(videoUrl1);
  const embed2 = getEmbedUrl(videoUrl2);

  if (!embed1 && !embed2) return null; // Don't render the section if no videos

  return (
    <section className="w-full bg-white py-24 flex flex-col items-center justify-center px-4">
      <h2 className="font-outfit font-black text-4xl text-black mb-12 uppercase tracking-wide">
        APPEAL VIDEOS
      </h2>
      
      <div className={`w-full max-w-6xl grid grid-cols-1 ${embed1 && embed2 ? 'md:grid-cols-2' : ''} gap-8`}>
        {embed1 && (
          <div className="w-full aspect-video rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white p-2 overflow-hidden">
            <iframe 
              className="w-full h-full rounded-2xl"
              src={embed1} 
              title="Appeal Video 1" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}
        
        {embed2 && (
          <div className="w-full aspect-video rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white p-2 overflow-hidden">
            <iframe 
              className="w-full h-full rounded-2xl"
              src={embed2} 
              title="Appeal Video 2" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}
