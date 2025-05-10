import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-hero-pattern bg-cover bg-center bg-no-repeat relative">
      {/* Overlay to ensure text readability over the background */}
      <div className="absolute inset-0 bg-brand-purple opacity-50"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center p-8">
        <div className="pulsating-logo-container rounded-full border-4 border-white p-2 shadow-xl mb-8">
          <Image 
            src="/images/logo.png" 
            alt="Starter Pack Print Logo" 
            width={180} 
            height={180} 
            className="rounded-full" 
            priority 
          />
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
          Créez Votre Starter Pack Unique !
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
          Exprimez votre style avec des posters, stickers, mugs et bien plus encore. Personnalisez vos produits avec vos propres designs ou choisissez parmi nos collections inspirées par la culture pop et les mèmes.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Link href="/personnaliser" className="bg-white text-brand-purple font-bold py-4 px-10 rounded-lg text-xl hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Personnaliser Maintenant
          </Link>
          <Link href="/boutique" className="border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-white hover:text-brand-purple transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Voir la Boutique
          </Link>
        </div>

        {/* Section d'exemples de Starter Packs */}
        <div className="mt-12 w-full max-w-5xl">
          <h3 className="text-3xl font-bold mb-8 text-white" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>Quelques Exemples</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Replace with actual product images and links from Strapi later */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/20 backdrop-blur-md p-3 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-300 h-40 w-full rounded-md mb-2 flex items-center justify-center text-gray-500">
                  Exemple {i}
                </div>
                <p className="text-center text-sm font-semibold text-white">Starter Pack Ville {i}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

