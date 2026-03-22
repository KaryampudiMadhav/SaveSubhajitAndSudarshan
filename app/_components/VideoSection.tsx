export default function VideoSection() {
  return (
    <section className="w-full bg-white py-24 flex flex-col items-center justify-center px-4">
      <h2 className="font-outfit font-black text-4xl text-black mb-12 uppercase tracking-wide">
        APPEAL VIDEO
      </h2>
      
      <div className="w-full max-w-5xl aspect-video rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white p-4">
        <div className="w-full h-full rounded-2xl bg-[#616fdf] flex items-center justify-center cursor-pointer hover:bg-[#5260cc] transition-colors group">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center pl-2 shadow-lg group-hover:scale-105 transition-transform">
            <svg 
              className="w-10 h-10 text-[#616fdf] fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
