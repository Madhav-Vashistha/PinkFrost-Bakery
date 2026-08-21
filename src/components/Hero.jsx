import { siteData } from '../data/content';

export default function Hero() {
  return (
    <div className="relative bg-brand-pink h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/hero_cake.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
          Custom Celebration Cakes
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-8 font-light drop-shadow-md">
          {siteData.tagline}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#categories" 
            className="bg-white text-brand-dark px-8 py-3 font-medium uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-white transition-colors w-full sm:w-auto text-center"
          >
            Explore Menu
          </a>
          <a 
            href={siteData.whatsappLink} 
            target="_blank" 
            rel="noreferrer"
            className="border-2 border-white text-white px-8 py-3 font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-brand-dark transition-colors w-full sm:w-auto text-center"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}
