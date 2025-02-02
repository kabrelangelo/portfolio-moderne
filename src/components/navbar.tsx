import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/projects', label: 'Projets' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Témoignages' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:mx-4 lg:mx-8 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-lg shadow-sm' 
          : 'bg-background/80 backdrop-blur-lg md:bg-transparent md:backdrop-blur-none'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <img src="/images/kabrel.png" className="h-36 md:h-48 w-auto mt-6" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const isActive = location.pathname === link.href || 
                             (link.href !== '/' && location.pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary"
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {links.map((link) => {
                  const isActive = location.pathname === link.href || 
                                 (link.href !== '/' && location.pathname.startsWith(link.href));
                  
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 rounded-lg relative"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-mobile"
                          className="absolute inset-0 bg-primary/10 rounded-lg"
                          initial={false}
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                      <span className={`relative z-10 ${isActive ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
