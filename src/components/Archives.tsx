import React from 'react';
import { Archive, Play } from 'lucide-react';

const Archives = () => {
  const archives = [
    {
      title: "Les meilleurs moments de 2024",
      date: "28 Mars 2024",
      thumbnail: "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      duration: "2:15:30",
      videoUrl: "https://www.youtube.com/watch?v=lKiydWfM4o8"
    },
    {
      title: "Spécial invités",
      date: "21 Mars 2024",
      thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      duration: "1:45:20",
      videoUrl: "https://www.youtube.com/watch?v=Fub6n_zwzxI"
    },
    {
      title: "Questions & Réponses",
      date: "14 Mars 2024",
      thumbnail: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      duration: "2:30:15",
      videoUrl: "https://www.youtube.com/watch?v=AkInjD76Yl0"
    }
  ];

  return (
    <section id="archives" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Archives</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {archives.map((archive, index) => (
            <ArchiveCard key={index} {...archive} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@freudix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            <Archive className="w-5 h-5" />
            Voir toutes les archives
          </a>
        </div>
      </div>
    </section>
  );
};

const ArchiveCard = ({ 
  title, 
  date, 
  thumbnail, 
  duration,
  videoUrl 
}: { 
  title: string; 
  date: string; 
  thumbnail: string;
  duration: string;
  videoUrl: string;
}) => (
  <a
    href={videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-xl bg-gray-900 block"
  >
    <div className="aspect-video relative">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      <div className="absolute bottom-4 right-4 bg-gray-900/80 px-2 py-1 rounded text-sm">
        {duration}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
          <Play className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
  </a>
);

export default Archives;