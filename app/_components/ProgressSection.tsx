import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProgressSectionProps {
  amountRequired?: number | null;
  amountRaised?: number | null;
  supportersCount?: number | null;
  imageUrl?: string;
}

export default function ProgressSection({
  amountRequired,
  amountRaised,
  supportersCount,
  imageUrl,
}: ProgressSectionProps) {
  // Format numbers nicely with commas according to Indian Number System
  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formattedRequired = amountRequired ? formatINR(amountRequired) : "₹2,67,70,000";
  const formattedRaised = amountRaised ? formatINR(amountRaised) : "₹1,65,879";
  const formattedSupporters = supportersCount || 136;

  return (
    <section className="w-full bg-white flex flex-col md:flex-row">
      <div className="flex-1 relative w-full h-[60vh] md:h-auto min-h-[400px] bg-gray-50 flex items-center justify-center">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt="Progress Section Image" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex-1 flex flex-col justify-center px-12 md:px-20 py-16">
        <h2 className="font-outfit font-bold text-3xl lg:text-4xl text-black mb-10 tracking-wide uppercase">
          FUNDRAISING PROGRESS:
        </h2>
        
        <div className="space-y-4 font-inter text-2xl lg:text-3xl">
          <p className="text-gray-700">
            Required: <span className="text-[#10b981] font-bold">{formattedRequired}</span>
          </p>
          <p className="text-gray-700">
            Raised: <span className="text-[#ef4444] font-bold">{formattedRaised}</span>
          </p>
          <p className="text-gray-700">
            Supporters: <span className="text-[#5e6bd4] font-bold">{formattedSupporters}</span>
          </p>
        </div>

        <div className="mt-16 flex justify-end">
          <ArrowRight className="w-8 h-8 text-black" />
        </div>
      </div>
    </section>
  );
}
