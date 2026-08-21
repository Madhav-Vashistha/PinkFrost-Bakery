import { siteData } from '../data/content';

export default function CategoryNav() {
  return (
    <div id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-brand-dark mb-4">Shop by Category</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {siteData.categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="group block text-center">
              <div className="relative rounded-full overflow-hidden aspect-square mb-4 border-2 border-transparent group-hover:border-brand-gold transition-colors duration-300">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="font-medium text-sm md:text-base text-gray-800 group-hover:text-brand-gold transition-colors">
                {cat.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
