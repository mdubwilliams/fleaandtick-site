import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[600px] flex items-center bg-[#0A1D37] text-white overflow-hidden">
        <div className="container mx-auto px-6 z-10">
          <h1 className="text-6xl font-serif mb-4">Freedom From Fleas & Ticks Starts Here.</h1>
          <p className="text-xl max-w-lg mb-8 text-slate-300">Expert-backed protection guides for your pets. Facts first, not ads.</p>
          <div className="flex gap-4">
            <button className="bg-[#BE1E2D] px-8 py-4 rounded-md font-bold text-lg">Compare Dog Meds</button>
            <button className="bg-white text-[#0A1D37] px-8 py-4 rounded-md font-bold text-lg">Cat Safety Guide</button>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e" className="absolute right-0 h-full w-1/2 object-cover opacity-80" alt="Pet protection" />
      </section>
    </main>
  );
}