import React from 'react';
import { Youtube, Twitch, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <img 
              src="https://freudix.tv/wp-content/uploads/2024/11/logofreudix.png.webp" 
              alt="Freudix Logo" 
              className="h-8 w-auto"
            />
            <h3 className="text-xl font-bold text-white">Freudix.tv</h3>
          </div>
          
          <div className="flex gap-6">
            <SocialIcon 
              href="https://www.youtube.com/@freudix" 
              icon={<Youtube className="w-6 h-6" />}
              label="YouTube"
            />
            <SocialIcon 
              href="https://www.twitch.tv/freudixstudio" 
              icon={<Twitch className="w-6 h-6" />}
              label="Twitch"
            />
            <SocialIcon 
              href="https://x.com/freudix_" 
              icon={<Twitter className="w-6 h-6" />}
              label="X"
            />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Freudix.tv. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;