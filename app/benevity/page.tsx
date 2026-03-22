import { Metadata } from 'next';
import DonateScanSection from "../_components/DonateScanSection";

export const metadata: Metadata = {
  title: 'Donate via Benevity | Workplace Giving',
  description: 'Employees of multinational companies can support our medical campaigns safely through the official Benevity corporate giving platform. Find the links here.',
  keywords: 'Benevity Donation, Corporate Giving, Workplace Giving Program, Employee Donation Match',
};

export default function BenevityPage() {
  return (
    <main className="w-full flex flex-col items-center justify-start min-h-screen bg-white py-20 px-6">
      <div className="w-full max-w-4xl text-left font-inter text-gray-800 space-y-12">
        <div className="text-center mb-16">
          <h1 className="font-outfit font-black text-4xl md:text-5xl text-[#5e6bd4] uppercase tracking-wider mb-4 leading-tight">
            Benevity
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            For Employees working in Multinational Companies
          </p>
        </div>

        <section className="space-y-4 text-lg bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h2 className="font-outfit font-bold text-3xl text-black mb-6">What is Benevity?</h2>
          <p>
            Benevity is a trusted corporate giving platform used by many multinational companies to support charitable causes. Through Benevity, employees can donate to verified nonprofit projects directly from their company’s workplace giving program.
          </p>
          <p>
            If your company offers Benevity, you can contribute easily, and in many cases, your employer may also match your donation — helping make an even bigger impact.
          </p>
        </section>

        <section className="space-y-6 text-lg">
          <p className="font-semibold text-black text-xl mb-8">
            Employees working in multinational companies can support this project through Benevity using the links below:
          </p>
          
          <div className="flex flex-col space-y-8">
            <div className="bg-[#e2e5fb] p-6 rounded-xl w-full">
              <h3 className="font-bold text-2xl text-black mb-3">👉 India Benevity Link:</h3>
              <a 
                href="https://causes.benevity.org/projects/704599" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-[#5e6bd4] hover:text-indigo-800 underline break-all font-medium block ml-6"
              >
                https://causes.benevity.org/projects/704599
              </a>
            </div>

            <div className="bg-[#e2e5fb] p-6 rounded-xl w-full">
              <h3 className="font-bold text-2xl text-black mb-3">👉 US Benevity Link:</h3>
              <a 
                href="https://causes.benevity.org/projects/704607" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-[#5e6bd4] hover:text-indigo-800 underline break-all font-medium block ml-6"
              >
                https://causes.benevity.org/projects/704607
              </a>
            </div>
          </div>
        </section>

        <section className="text-center pt-10 border-t mt-12">
          <p className="text-2xl font-bold text-black font-outfit">
            Your contribution through Benevity helps create meaningful social impact and support important initiatives worldwide. 🌍💙
          </p>
        </section>
      </div>
      <DonateScanSection />
    </main>
  );
}
