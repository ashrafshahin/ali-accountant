
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <span className="text-lg font-bold">A&C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight">Ali & Co</span>
                <span className="text-xs font-medium opacity-80">Accountants</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Professional accounting services tailored to your business needs. Smart accounting for smart business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news-resources" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  News & Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-80" />
                <span className="text-sm leading-relaxed opacity-90">
                  76-78 Bury Park Road<br />
                  Luton, Bedfordshire<br />
                  LU1 1HE, UK
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0 opacity-80" />
                <a href="mailto:info@alincoaccountants.org" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  info@alincoaccountants.org
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0 opacity-80" />
                <a href="tel:01582249455" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  01582 249455
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Smartphone className="h-4 w-4 flex-shrink-0 opacity-80" />
                <a href="tel:07458300774" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-200">
                  07458 300774
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Follow Us</span>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 opacity-90 hover:opacity-100 hover:bg-primary transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 opacity-90 hover:opacity-100 hover:bg-primary transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 opacity-90 hover:opacity-100 hover:bg-primary transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 opacity-90 hover:opacity-100 hover:bg-primary transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Ali & Co Accountants. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
