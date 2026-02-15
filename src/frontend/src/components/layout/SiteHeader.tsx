import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPublicAssetUrl } from '@/utils/publicAssetUrl';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Links', href: '#useful-links' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:container md:mx-auto md:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="flex items-center space-x-3">
            <img
              src={getPublicAssetUrl('MR icon-1.png')}
              alt="MR Enterprises"
              className="h-10 w-auto object-contain block mx-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="ml-4"
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full"
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
