import React from 'react';
import { Youtube, Twitch, Twitter } from 'lucide-react';

const WatchPlatforms = () => {
  return (
    <section id="platforms" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Où nous regarder</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PlatformCard
            icon={<Youtube className="w-12 h-12" />}
            name="YouTube"
            description="Profitez de la meilleure qualité vidéo et retrouvez tous nos replays"
            color="bg-red-600"
            href="https://www.youtube.com/@freudix"
          />
          <PlatformCard
            icon={<Twitch className="w-12 h-12" />}
            name="Twitch"
            description="Interagissez en direct avec la communauté et profitez des emotes exclusives"
            color="bg-purple-600"
            href="https://www.twitch.tv/freudixstudio"
          />
          <PlatformCard
            icon={<Twitter className="w-12 h-12" />}
            name="X (Twitter)"
            description="Suivez les actualités et participez aux discussions en temps réel"
            color="bg-blue-600"
            href="https://x.com/freudix_"
          />
        </div>
      </div>
    </section>
  );
};

const PlatformCard = ({ 
  icon, 
  name, 
  description, 
  color, 
  href 
}: { 
  icon: React.ReactNode; 
  name: string; 
  description: string;
  color: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-gray-800 rounded-xl p-6 transition-transform hover:scale-105"
  >
    <div className={`${color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
    <p className="text-gray-400">{description}</p>
    <div className="mt-4 text-white font-medium group-hover:underline">
      Rejoindre →
    </div>
  </a>
);

export default WatchPlatforms;