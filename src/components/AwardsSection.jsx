import { siteData } from '../data/content';
import { Award } from 'lucide-react';

export default function AwardsSection() {
  if (!siteData.awards || siteData.awards.length === 0) return null;

  return (
    <div className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl text-brand-dark uppercase tracking-widest text-sm font-bold">Awards & Recognition</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {siteData.awards.map((award, idx) => (
            <div key={idx} className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-16 h-16 rounded-full bg-brand-pink/50 flex items-center justify-center mb-4 text-brand-gold">
                <Award size={32} />
              </div>
              <h3 className="font-display text-lg text-brand-dark mb-1">{award.title}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
