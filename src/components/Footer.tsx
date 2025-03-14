
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-medium tracking-tight">
              DigiCat
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              A minimalist news source for the latest in science, technology, and artificial intelligence.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/category/science" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/ai" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/technology" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DigiCat. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              Designed with simplicity in mind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
