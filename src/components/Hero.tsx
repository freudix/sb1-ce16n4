import React from 'react';
import { Youtube, Twitch, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <img 
          src="https://freudix.tv/wp-content/uploads/2024/11/logofreudix.png.webp"
          alt="Freudix Logo"
          className="w-auto h-auto mx-auto mb-8"
        />
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Rejoignez-nous chaque mardi pour des lives exceptionnels sur vos plateformes préférées
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <SocialButton
            icon={<Youtube className="w-6 h-6" />}
            platform="YouTube"
            href="https://www.youtube.com/@freudix"
            className="bg-red-600 hover:bg-red-700"
          />
          <SocialButton
            icon={<Twitch className="w-6 h-6" />}
            platform="Twitch"
            href="https://www.twitch.tv/freudixstudio"
            className="bg-purple-600 hover:bg-purple-700"
          />
          <SocialButton
            icon={<Twitter className="w-6 h-6" />}
            platform="X"
            href="https://x.com/freudix_"
            className="bg-blue-600 hover:bg-blue-700"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ 
  icon, 
  platform, 
  href, 
  className 
}: { 
  icon: React.ReactNode; 
  platform: string; 
  href: string;
  className: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${className}`}
  >
    {icon}
    <span>{platform}</span>
  </a>
);

export default Hero;