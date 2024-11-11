import React from 'react';
import { Users, MessageCircle, Share2 } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Communauté</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <StatCard
            icon={<Users className="w-8 h-8" />}
            value="50K+"
            label="Membres actifs"
          />
          <StatCard
            icon={<MessageCircle className="w-8 h-8" />}
            value="100K+"
            label="Messages échangés"
          />
          <StatCard
            icon={<Share2 className="w-8 h-8" />}
            value="25K+"
            label="Partages"
          />
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Rejoignez la communauté
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Participez aux discussions, partagez vos idées et connectez-vous avec d'autres passionnés.
            Notre communauté est ouverte à tous et nous sommes impatients de vous accueillir !
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Discord
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Twitch Chat
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Forum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon, 
  value, 
  label 
}: { 
  icon: React.ReactNode; 
  value: string; 
  label: string;
}) => (
  <div className="bg-gray-800 rounded-xl p-6 text-center">
    <div className="bg-blue-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
      {icon}
    </div>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

export default Community;