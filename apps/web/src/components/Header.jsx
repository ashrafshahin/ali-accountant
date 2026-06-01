
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../../public/images/ali-logo.png'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Accounts Preparation', slug: 'accounts-preparation' },
    { name: 'Bookkeeping', slug: 'bookkeeping' },
    { name: 'Company Formation', slug: 'company-formation' },
    { name: 'Payroll & Pension', slug: 'payroll-pension' },
    { name: 'Tax Planning', slug: 'tax-planning' },
    { name: 'Business Plan', slug: 'business-plan' },
    { name: 'VAT Return', slug: 'vat-return' },
    { name: 'Tax Return', slug: 'tax-return' },
  ];

  const isActive = (path) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */} 
          
          <Link to="/" className="flex items-center space-x-2">
            <div className=''>
              <img className=' sm:h-30 sm:w-40 md:h-37 md:w-60 h-16 w-26 ' src={logo} alt="Company logo" />
            </div>
          </Link>
          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive('/') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary hover:bg-accent/50'
              }`}
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${
                      isServicesActive ? 'text-primary bg-accent' : ''
                    }`}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-1 p-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">{service.name}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive('/about') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary hover:bg-accent/50'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/news-resources"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive('/news-resources') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary hover:bg-accent/50'
              }`}
            >
              News & Resources
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive('/contact') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary hover:bg-accent/50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                    isActive('/') ? 'text-primary bg-accent' : 'text-foreground hover:bg-accent'
                  }`}
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                    isActive('/about') ? 'text-primary bg-accent' : 'text-foreground hover:bg-accent'
                  }`}
                >
                  About Us
                </Link>

                <Link
                  to="/news-resources"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                    isActive('/news-resources') ? 'text-primary bg-accent' : 'text-foreground hover:bg-accent'
                  }`}
                >
                  News & Resources
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                    isActive('/contact') ? 'text-primary bg-accent' : 'text-foreground hover:bg-accent'
                  }`}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
