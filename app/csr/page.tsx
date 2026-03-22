import { Metadata } from 'next';
import DonateScanSection from "../_components/DonateScanSection";

export const metadata: Metadata = {
  title: 'CSR Partnerships | Care Guru Foundation',
  description: 'Partner with Care Guru Foundation through Corporate Social Responsibility (CSR). Support life-saving medical treatments for children with rare diseases.',
  keywords: 'CSR India, Corporate Social Responsibility, NGO Partnership, Medical CSR, Corporate Donation, Care Guru Foundation',
  openGraph: {
    title: 'CSR Partnerships | Care Guru Foundation',
    description: 'Partner with Care Guru Foundation through Corporate Social Responsibility (CSR).',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSR Partnerships | Care Guru Foundation',
    description: 'Partner with Care Guru Foundation through Corporate Social Responsibility (CSR).',
  }
};

export default function CSRPage() {
  return (
    <main className="w-full flex flex-col items-center justify-start min-h-screen bg-white py-20 px-6">
      <div className="w-full max-w-4xl text-left font-inter text-gray-800 space-y-12">
        <div className="text-center mb-16">
          <h1 className="font-outfit font-black text-4xl md:text-5xl text-[#5e6bd4] uppercase tracking-wider mb-6">
            Corporate Social Responsibility (CSR)
          </h1>
        </div>

        <section className="space-y-4 text-lg">
          <p>
            At <span className="font-bold text-black">Care Guru Foundation (CGF)</span>, we are committed to improving the lives of underprivileged individuals by providing access to critical healthcare and life-saving medical treatment. We believe that <span className="font-semibold italic">health and dignity are basic human rights</span>, and through Corporate Social Responsibility (CSR) partnerships, we aim to make quality healthcare accessible to those who need it most.
          </p>
          <p>
            Our initiatives support children requiring urgent surgeries, patients battling rare diseases, elderly individuals with chronic illnesses, and families facing financial hardship due to medical emergencies.
          </p>
          <p>
            As highlighted in our official CSR appeal letter, CGF is registered under <span className="font-semibold italic">Section 12A (12AB) and 80G of the Income Tax Act</span> and is also registered with the <span className="font-semibold italic">Ministry of Corporate Affairs (MCA)</span> to undertake CSR activities.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-6">
            <h3 className="font-bold text-xl text-black mb-4">CSR Registration Details</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>CSR-1 Registration Number: <span className="font-bold">CSR00086062</span></li>
              <li>Darpan ID: <span className="font-bold">DL/2024/0381238</span></li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 text-lg">
          <h2 className="font-outfit font-bold text-3xl text-black mb-6 border-b pb-2">Current Medical Support Initiative</h2>
          <p>
            We are currently raising funds to support the treatment of <span className="font-bold">Subhajit and Sudharshan</span>, who are suffering from <span className="font-bold italic">Lesch-Nyhan Syndrome (LNS)</span>, a rare and serious medical condition requiring long-term care and treatment.
          </p>
          <p>
            Your organization’s CSR contribution can help provide essential medical care, improve quality of life, and give hope to families in need.
          </p>
        </section>

        <section className="space-y-4 text-lg">
          <h2 className="font-outfit font-bold text-3xl text-black mb-6 border-b pb-2">Ways Your Company Can Support</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Sponsor life-saving medical treatments</li>
            <li>Support children with rare diseases</li>
            <li>Fund critical surgeries for underprivileged patients</li>
            <li>Contribute through CSR grants or partnerships</li>
            <li>Donate via corporate giving platforms such as Benevity</li>
          </ul>
          <p className="font-semibold mt-4 text-[#5e6bd4]">
            Every CSR contribution helps create measurable and meaningful social impact.
          </p>
        </section>

        <section className="space-y-4 text-lg">
          <h2 className="font-outfit font-bold text-3xl text-black mb-6 border-b pb-2">Transparency & Impact</h2>
          <p>We are committed to maintaining complete transparency with our partners. Donors receive regular updates regarding:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Treatment progress</li>
            <li>Fund utilization reports</li>
            <li>Impact created through contributions</li>
          </ul>
          <p>
            Any unutilized funds will be responsibly redirected to support other patients in need or managed as per donor preference.
          </p>
        </section>

        <section className="space-y-4 text-lg bg-[#e2e5fb] p-8 rounded-xl">
          <h2 className="font-outfit font-bold text-3xl text-black mb-4">Contact Us for CSR Partnership</h2>
          <p>We would be honored to collaborate with your organization in making healthcare accessible to those who need it most.</p>
          <p className="flex items-center text-xl font-medium mt-4">
            📧 <span className="ml-2 font-bold text-black">Email:</span> 
            <a href="mailto:chakrabortypinki174@gmail.com" className="ml-2 text-[#5e6bd4] hover:underline">
              chakrabortypinki174@gmail.com
            </a>
          </p>
          <p className="mt-4 font-semibold text-black italic">
            Together, we can create a lasting positive impact and transform lives.
          </p>
        </section>
      </div>
      <DonateScanSection />
    </main>
  );
}
