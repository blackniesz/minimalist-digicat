
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'Science', path: '/category/science' },
  { name: 'AI', path: '/category/ai' },
  { name: 'Technology', path: '/category/technology' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md',
        scrolled ? 'bg-white/90 shadow-sm' : 'bg-white/70'
      )}
    >
      <nav className="container h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-medium text-xl tracking-tight transition-opacity hover:opacity-80"
          aria-label="DigiCat Home"
        >
          DigiCat
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors',
                location.pathname === category.path 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus-ring rounded-md p-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-opacity"
          >
            {isMenuOpen ? (
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            ) : (
              <path 
                d="M4 6H20M4 12H20M4 18H20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile navigation */}
      <div 
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-56 border-b border-border' : 'max-h-0'
        )}
      >
        <div className="container py-4 space-y-4">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className={cn(
                'block py-2 text-base font-medium transition-colors',
                location.pathname === category.path 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
