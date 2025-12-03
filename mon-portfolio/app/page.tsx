'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const expertise = [
    {
      title: 'Stream Design & Assets',
      description: 'Des overlays et écrans d\'attente immersifs pour professionnaliser votre antenne dès la première seconde.',
      image: '/images/stream-design.jpg',
    },
    {
      title: 'Emotes & Badges',
      description: 'Des emotes uniques et lisibles, conçues pour engager votre communauté et maximiser les abonnements.',
      image: '/images/emotes.jpg',
    },
    {
      title: 'Illustration & Art',
      description: 'Illustrations promotionnelles, fanarts et portraits stylisés pour vos réseaux sociaux et miniatures.',
      image: '/images/illustration.jpg',
    },
  ];

  const services = [
    {
      icon: '📦',
      title: 'Pack Streamer',
      subtitle: 'L\'essentiel',
      features: [
        '3 Emotes',
        '3 Badges',
        'L\'Animation offerte sur une emote au choix',
      ],
      price: '69€',
    },
    {
      icon: '🎨',
      title: 'Identité Complète',
      subtitle: 'Branding total',
      features: [
        'Logo & Bannière',
        '6 Emotes + 6 badges',
        'Overlays',
        '5 Panneaux',
      ],
      price: '259€',
      highlight: true,
    },
    {
      icon: '🖌️',
      title: 'Illustration',
      subtitle: 'Sur mesure',
      features: [
        'Sujet 100% Libre : OC (Personnage original), Fanart, Mascotte ou Paysage.',
        'Haute Qualité : Rendu détaillé en haute définition (300 DPI)',
        'Votre vision : Vous décrivez l\'idée, je m\'occupe de la direction artistique',
      ],
      price: '109€',
    },
  ];

  const unitPricing = [
    { item: 'Emote', price: '11€', icon: '😊' },
    { item: 'Emote animée', price: '18€', icon: '✨' },
    { item: 'Badge', price: '15€', icon: '🏅' },
    { item: 'Bannière', price: '79€', icon: '🎯' },
    { item: 'Panneau', price: '19€', icon: '📋' },
    { item: 'Logo', price: '79€', icon: '⭐' },
    { item: 'Illustration', price: '109€', icon: '🎨' },
    { item: 'Overlay', price: '119€', icon: '🖼️' },
  ];

  const process = [
    {
      step: '01',
      title: 'Le Brief',
      description: 'Discussion sur vos envies et références via Discord/DM WhatsApp.',
    },
    {
      step: '02',
      title: 'Le Sketch',
      description: 'Croquis brouillon pour valider la composition.',
    },
    {
      step: '03',
      title: 'La Validation',
      description: 'Modifications jusqu\'à satisfaction complète de votre côté.',
    },
    {
      step: '04',
      title: 'Le Rendu Final',
      description: 'Fichiers HD optimisés pour Twitch, envoyé par e-mail ou SwissTransfer.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight">
              <span className="text-white">AVERELL</span>
              <span className="text-yellow-400">.STUDIO</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {['Expertise', 'Services', 'Process', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-xs lg:text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors uppercase tracking-wider"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-yellow-400"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {['Expertise', 'Services', 'Process', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5 uppercase tracking-wider"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section (MODIFIÉE POUR 2 COLONNES) */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Effets de fond */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Conteneur Grid : Texte à gauche, Image à droite */}
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLONNE GAUCHE : TEXTE */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
              AVERELL<span className="text-yellow-400">.STUDIO</span>
            </h1>
            
            <p className="text-base sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-4 sm:mb-6 leading-relaxed font-light">
              L'identité visuelle qui fait passer votre stream au niveau supérieur.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-12">
              Spécialiste en Branding Twitch, Emotes expressives et Illustrations Digital Painting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center">
              <button
                onClick={() => scrollToSection('expertise')}
                className="bg-yellow-400 text-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold hover:bg-yellow-500 transition-all hover:scale-105 uppercase tracking-wider w-full sm:w-auto rounded-lg shadow-[0_0_20px_rgba(250,204,21,0.3)]"
              >
                Mes Réalisations
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-yellow-400 text-yellow-400 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all uppercase tracking-wider w-full sm:w-auto rounded-lg"
              >
                Commander
              </button>
            </div>
          </div>

          {/* COLONNE DROITE : IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
             {/* Halo jaune derrière l'image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-2xl transform scale-75"></div>
             
             {/* L'image elle-même */}
             <img 
               src="/images/hero-image.png" 
               alt="Mascotte Averell Studio" 
               className="relative w-full max-w-md lg:max-w-full object-contain drop-shadow-2xl animate-float"
             />
          </div>

        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">
              Mon <span className="text-yellow-400">Expertise</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-yellow-400/50 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-400 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">
              <span className="text-yellow-400">Prestations</span>
            </h2>
          </div>
          
          {/* Packs */}
          <div className="mb-16 sm:mb-24">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center uppercase tracking-wide">Packs Complets</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-b from-gray-900 to-black border-2 p-6 sm:p-8 lg:p-10 transition-all duration-300 ${
                    service.highlight
                      ? 'border-yellow-400 md:scale-105 shadow-2xl shadow-yellow-500/20'
                      : 'border-gray-800 hover:border-yellow-400/50'
                  }`}
                >
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8">{service.subtitle}</p>
                  
                  <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-yellow-400 mt-1">▸</span>
                        <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 sm:mb-6">
                    {service.price}
                  </div>
                  
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider transition-all ${
                      service.highlight
                        ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                        : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                    }`}
                  >
                    Commander
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tarifs à l'unité */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center uppercase tracking-wide text-yellow-400">À l'Unité</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {unitPricing.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-4 sm:p-6 hover:border-yellow-400/50 transition-all text-center"
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3 uppercase tracking-wide">{item.item}</h4>
                  <div className="text-xl sm:text-2xl font-bold text-yellow-400">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <p className="text-xs sm:text-sm text-gray-500 italic">
                * Réductions disponibles pour commandes multiples, voir "packs complets"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">
              Comment ça <span className="text-yellow-400">Marche</span> ?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 sm:p-8 lg:p-10 hover:border-yellow-400/50 transition-all"
              >
                <div className="text-5xl sm:text-6xl font-bold text-yellow-400/20 mb-3 sm:mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-400 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">
            Prêt à lancer <span className="text-yellow-400">le Projet</span> ?
          </h2>
          
          <p className="text-base sm:text-xl text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
            Ne laissez pas votre chaîne ressembler à celle des autres.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <a
              href="https://discord.com/users/averell_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-800 p-8 sm:p-10 hover:border-yellow-400 transition-all group"
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">💬</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 uppercase tracking-wide text-yellow-400">Discord</h3>
              <p className="text-sm sm:text-base text-gray-400">averell.studio</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">Cliquez pour me contacter</p>
            </a>
            
            <a
              href="https://wa.me/0769887025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-800 p-8 sm:p-10 hover:border-yellow-400 transition-all group"
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">📱</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 uppercase tracking-wide text-yellow-400">WhatsApp</h3>
              <p className="text-sm sm:text-base text-gray-400">Discussion instantanée</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">Cliquez pour me contacter</p>
            </a>
          </div>
          
          <div className="space-y-3 sm:space-y-4 text-base sm:text-lg px-4">
            <p className="text-gray-400">
              <span className="text-yellow-400 font-bold">instagram:</span> @gl33b
            </p>
            <p className="text-gray-400">
              <span className="text-yellow-400 font-bold">Email:</span> compte2gleb@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">
            © 2025 Averell.studio - Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}