import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">À propos</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Une expérience de streaming unique
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Freudix.tv est votre destination hebdomadaire pour des lives dynamiques et engageants.
              Chaque mardi, nous vous proposons du contenu exclusif diffusé simultanément sur YouTube,
              Twitch et Twitter, créant une expérience interactive unique pour notre communauté.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Notre mission est de créer un espace où la passion du streaming rencontre une communauté
              active et bienveillante. Rejoignez-nous pour participer à des discussions animées,
              des moments de partage et des événements exclusifs.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                alt="Streaming setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;