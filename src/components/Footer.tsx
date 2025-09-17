import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-600 to-green-400 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Vedham Eldix</h3>
                <p className="text-green-300 text-sm">Nutrition Rooted in Tradition, Crafted for Today</p>
              </div>
            </div>
            <p className="text-green-100 mb-4 max-w-md">
              Founded by educator-turned-entrepreneur Vijaya Edison, we bring traditional wisdom 
              and modern nutrition science together for your family's wellness.
            </p>
            <div className="flex space-x-4">
              <div className="bg-green-800 p-2 rounded-full">
                <span className="text-sm font-semibold">100% Natural</span>
              </div>
              <div className="bg-orange-600 p-2 rounded-full">
                <span className="text-sm font-semibold">No Preservatives</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-green-100">
                  46.Lakshminarayana St, Maruthi Nagar, Kanchipuram
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <a href="mailto:Support@vedhameldix.com" className="text-sm text-green-100 hover:text-white transition-colors">
                  Support@vedhameldix.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/919842909360" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-green-100 hover:text-white transition-colors"
                >
                  WhatsApp Order
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Order</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/919842909360"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-md text-center font-medium"
              >
                WhatsApp
              </a>
              <div className="text-sm text-green-200 text-center">
                <p>GPay Available</p>
                <p className="font-semibold">9842909360</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-green-300">
              © 2025 Vedham Eldix. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-green-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;