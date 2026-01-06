import React from 'react';
import { ShieldCheck, Dog, Cat, Home, Stethoscope, ChevronRight } from 'lucide-react';

export default function PetHealthPortal() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* High-Authority Header */}
      <nav className="bg-[#1a2b4b] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">FleaAndTick.com</h1>
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-red-400 transition-colors">Dogs</a>
            <a href="#" className="hover:text-red-400 transition-colors">Cats</a>
            <a href="#" className="hover:text-red-400 transition-colors">Prevention Guide</a>
            <a href="#" className="hover:text-red-400 transition-colors font-bold text-red-500 underline underline-offset-4">Blog</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - The "Trust" Header */}
      <section className="relative bg-white overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-12 lg:p-20 z-10 bg-white">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-[#1a2b4b] leading-tight mb-6">
              Freedom From Fleas & Ticks <span className="text-red-600 italic">Starts Here.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Expert-backed protection guides for your pets. Facts first, not ads. Join 50,000+ pet parents making safer choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl">
                Compare Dog Meds
              </button>
              <button className="border-2 border-[#1a2b4b] text-[#1a2b4b] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all">
                Cat Safety Guide
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000" 
              alt="Healthy Golden Retriever" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* The Product Comparison Table - The "Utility" Hub */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-[#1a2b4b] mb-2">Flea & Tick Product Comparison</h3>
          <p className="text-slate-600">Updated for 2026. Independent analysis of top-selling veterinary treatments.</p>
        </div>
        
        <div className="overflow-x-auto rounded-xl shadow-2xl border border-slate-200">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-[#1a2b4b] text-white">
                <th className="p-5 font-bold uppercase tracking-wider">Featured Articles</th>
                <th className="p-5 font-bold uppercase tracking-wider">Quick Facts</th>
                <th className="p-5 font-bold uppercase tracking-wider">Vet Pros/Cons</th>
                <th className="p-5 font-bold uppercase tracking-wider">Safety Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-100 rounded border border-slate-200 flex-shrink-0 flex items-center justify-center">
                      <ShieldCheck className="text-blue-600" />
                    </div>
                    <div>
                      <span className="text-blue-600 font-bold block mb-1 group-hover:underline">Bravecto (Fluralaner)</span>
                      <p className="text-xs text-slate-500 uppercase font-semibold">12-Week Protection</p>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-sm text-slate-600 italic">One chewable dose provides 12 weeks of protection against fleas and ticks.</td>
                <td className="p-6 text-sm text-slate-600">Longest lasting on the market. Must be given with food.</td>
                <td className="p-6">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">EXCELLENT</span>
                </td>
              </tr>
              {/* More products would go here */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Shop by Pet Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-[#1a2b4b] mb-16">Expert Care Guides By Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Dog className="w-8 h-8"/>, label: "Puppy Care", color: "bg-blue-600" },
              { icon: <Cat className="w-8 h-8"/>, label: "Cat Safety", color: "bg-red-600" },
              { icon: <Home className="w-8 h-8"/>, label: "Home Defense", color: "bg-[#1a2b4b]" },
              { icon: <Stethoscope className="w-8 h-8"/>, label: "Vet Consult", color: "bg-emerald-600" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all cursor-pointer border border-slate-200 group">
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl mb-4 text-[#1a2b4b]">{item.label}</h4>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Comprehensive guides written by licensed DVMs for your peace of mind.</p>
                <div className="flex items-center justify-center text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:text-red-600 transition-colors">
                  View Guides <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
