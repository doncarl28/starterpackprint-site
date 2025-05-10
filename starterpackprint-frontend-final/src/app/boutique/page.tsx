import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // For product images

// Placeholder data - replace with data from Strapi/Printful
const products = [
  { id: '1', name: 'Starter Pack Paris', price: '25.00€', imageUrl: '/images/placeholder-product.png', category: 'Villes' },
  { id: '2', name: 'Starter Pack Mon Chien', price: '22.00€', imageUrl: '/images/placeholder-product.png', category: 'Animaux' },
  { id: '3', name: 'Mug New York', price: '18.00€', imageUrl: '/images/placeholder-product.png', category: 'Mugs' },
  { id: '4', name: 'Tote Bag Marseille', price: '20.00€', imageUrl: '/images/placeholder-product.png', category: 'Tote Bags' },
  { id: '5', name: 'Sticker Perfect Couple', price: '5.00€', imageUrl: '/images/placeholder-product.png', category: 'Stickers' },
  { id: '6', name: 'Poster Rio (S)', price: '15.00€', imageUrl: '/images/placeholder-product.png', category: 'Posters' },
  { id: '7', name: 'Magnet Mamie Cool', price: '8.00€', imageUrl: '/images/placeholder-product.png', category: 'Magnets' },
  { id: '8', name: 'Poster Tokyo (L)', price: '30.00€', imageUrl: '/images/placeholder-product.png', category: 'Posters' },
];

const categories = ['Toutes', 'Villes', 'Animaux', 'Mugs', 'Tote Bags', 'Stickers', 'Posters', 'Magnets'];
const priceRanges = ['Tous les prix', 'Moins de 10€', '10€ - 20€', '20€ - 30€', 'Plus de 30€'];

export default function BoutiquePage() {
  // Add state for filters if implementing client-side filtering, or handle via API calls
  return (
    <div className="py-12">
      <Head>
        <title>Boutique - Starter Pack Print</title>
        <meta name="description" content="Découvrez tous nos Starter Packs et produits personnalisables." />
      </Head>

      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Notre Boutique</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Trouvez l'inspiration parmi nos collections de Starter Packs ou personnalisez le vôtre.
        </p>
      </section>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Sidebar pour les filtres */}
        <aside className="w-full md:w-1/4 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl self-start">
          <h2 className="text-2xl font-semibold text-white mb-6">Filtrer par</h2>
          
          <div className="mb-6">
            <label htmlFor="category-filter" className="block text-lg font-medium text-white mb-2">Catégorie</label>
            <select id="category-filter" className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none">
              {categories.map(cat => <option key={cat} value={cat.toLowerCase()}>{cat}</option>)}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="price-filter" className="block text-lg font-medium text-white mb-2">Prix</label>
            <select id="price-filter" className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none">
              {priceRanges.map(range => <option key={range} value={range.toLowerCase().replace(/ /g, '-')}>{range}</option>)}
            </select>
          </div>

          {/* Add more filters like Nouveautés, Promotions, etc. */}
          <button className="w-full bg-brand-purple hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300">
            Appliquer les Filtres
          </button>
        </aside>

        {/* Grille de produits */}
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <Link key={product.id} href={`/produit/${product.id}`} className="block bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden group hover:shadow-brand-purple/50 transition-all duration-300">
                <div className="w-full h-64 bg-gray-700/50 flex items-center justify-center overflow-hidden">
                  {/* Replace with actual Image component once images are available */}
                  <div className="w-full h-full bg-gray-500 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white">
                    {product.imageUrl === '/images/placeholder-product.png' ? product.name : <Image src={product.imageUrl} alt={product.name} width={250} height={250} className="object-cover w-full h-full" />}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2 truncate group-hover:text-brand-purple transition-colors">{product.name}</h3>
                  <p className="text-lg font-bold text-green-400 mb-3">{product.price}</p>
                  <p className="text-sm text-gray-400 mb-3">Catégorie: {product.category}</p>
                  <button className="w-full bg-brand-purple hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                    Voir Détails
                  </button>
                </div>
              </Link>
            ))}
          </div>
          {/* Add pagination if many products */}
        </main>
      </div>
    </div>
  );
}

