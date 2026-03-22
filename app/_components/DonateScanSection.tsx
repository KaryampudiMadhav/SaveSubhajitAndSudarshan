import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

export default async function DonateScanSection() {
  const campaign = await client.fetch('*[_type == "campaign"][0]', {}, { next: { revalidate: 10 } });
  const qrCodeImageUrl = campaign?.qrCodeImage ? urlForImage(campaign.qrCodeImage).url() : undefined;

  // Use Sanity QR Code, or fallback to the static generated one if empty
  const qrImageSrc = qrCodeImageUrl || "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=supportsubhaj4@yesbank&pn=Donation";

  return (
    <section className="w-full bg-white flex justify-center py-16 px-4">
      <div className="bg-[#f8f9fe] border border-gray-100 rounded-[2rem] p-12 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between shadow-sm">
        <div className="flex-1 flex flex-col space-y-6">
          <h2 className="font-outfit font-bold text-4xl text-[#5e6bd4]">
            Scan to Donate
          </h2>
          
          <div className="flex items-center space-x-2">
            <span className="font-outfit font-bold text-2xl text-[#10b981]">Impact<span className="text-[#059669]">Guru</span></span>
          </div>

          <div className="font-inter">
            <p className="text-gray-800 text-lg mb-2">For UPI transaction:</p>
            <p className="text-2xl text-black font-medium">
              Donate at: <br className="hidden md:block" />
              <span className="text-[#5e6bd4]">supportsubhaj4@yesbank</span>
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-0 flex-shrink-0 bg-[#f1f3fd] p-8 rounded-[2rem] flex flex-col items-center">
          <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
            <div className="w-48 h-48 relative">
              <Image 
                src={qrImageSrc} 
                alt="Donation QR Code" 
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="font-inter text-gray-500 text-sm">Scan with your phone camera</p>
        </div>
      </div>
    </section>
  );
}
