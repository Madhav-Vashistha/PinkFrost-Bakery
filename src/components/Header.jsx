import { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { siteData } from '../data/content';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-gold p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none">
            <a href="#" className="font-display font-bold text-2xl tracking-wider text-brand-dark">
              PINK FROST
              <span className="block text-[10px] uppercase tracking-[0.3em] font-sans text-center text-gray-500 mt-1">Patisserie</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-brand-gold transition-colors">Menu</a>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-brand-gold transition-colors flex items-center">
                Categories
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {siteData.categories.map(cat => (
                  <a key={cat.id} href={`#${cat.id}`} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-gold">
                    {cat.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-brand-gold transition-colors">Our Story</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <a href={siteData.instagram} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-brand-gold hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <button className="text-gray-600 hover:text-brand-gold">
              <Search size={20} />
            </button>
            <a href={siteData.whatsappLink} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-brand-gold relative">
              <ShoppingBag size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#categories" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-gold hover:bg-gray-50">Menu</a>
            <div className="px-3 py-2">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Categories</p>
              {siteData.categories.map(cat => (
                <a key={cat.id} href={`#${cat.id}`} onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium text-gray-600 hover:text-brand-gold pl-4">
                  {cat.name}
                </a>
              ))}
            </div>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-gold hover:bg-gray-50">Our Story</a>
            <a href={siteData.instagram} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-gold hover:bg-gray-50">Follow on Instagram</a>
          </div>
        </div>
      )}
    </header>
  );
}
