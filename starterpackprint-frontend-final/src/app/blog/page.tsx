"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // For blog post images

// Placeholder data - replace with data from Strapi
const blogPosts = [
  {
    id: '1',
    title: 'Les Tendances Starter Packs pour 2025',
    excerpt: 'Découvrez les thèmes et designs qui cartonnent cette année pour des créations uniques et percutantes.',
    date: '1 Mai 2025',
    imageUrl: '/images/placeholder-blog.png', // Replace with actual image path
    category: 'Tendances'
  },
  {
    id: '2',
    title: 'Comment Utiliser Notre Outil de Personnalisation Comme un Pro',
    excerpt: 'Un guide pas à pas pour maîtriser toutes les fonctionnalités de notre interface et créer le Starter Pack parfait.',
    date: '15 Avril 2025',
    imageUrl: '/images/placeholder-blog.png',
    category: 'Tutoriels'
  },
  {
    id: '3',
    title: 'L\'Inspiration derrière nos Collections Prêtes à Porter',
    excerpt: 'Plongez dans les univers qui ont inspiré nos designers pour les Starter Packs disponibles en boutique.',
    date: '5 Avril 2025',
    imageUrl: '/images/placeholder-blog.png',
    category: 'Inspiration'
  },
  {
    id: '4',
    title: 'Printful x StarterPackPrint : Les Coulisses de Notre Partenariat',
    excerpt: 'Comment nous assurons une qualité d\'impression irréprochable pour tous vos produits personnalisés.',
    date: '28 Mars 2025',
    imageUrl: '/images/placeholder-blog.png',
    category: 'Partenariats'
  },
];

const categories = ['Toutes', 'Tendances', 'Tutoriels', 'Inspiration', 'Nouveautés', 'Partenariats'];

export default function BlogPage() {
  // Basic newsletter signup state and handler
  const [email, setEmail] = React.useState('');
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add actual newsletter signup logic here (e.g., API call to Strapi or CRM)
    alert(`Merci pour votre inscription : ${email}`);
    setEmail('');
  };

  return (
    <div className="py-12">
      <Head>
        <title>Blog - Starter Pack Print</title>
        <meta name="description" content="Nos derniers articles, astuces et inspirations pour vos Starter Packs." />
      </Head>

      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Notre Blog</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Restez à jour avec les dernières tendances, tutoriels et inspirations du monde des Starter Packs.
        </p>
      </section>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Liste des articles de blog */}
        <main className="w-full md:w-3/4 space-y-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl flex flex-col md:flex-row gap-6 group hover:shadow-brand-purple/50 transition-all duration-300">
              <div className="md:w-1/3 h-48 md:h-auto bg-gray-700/50 rounded-lg overflow-hidden">
                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-gray-500 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white">
                  {post.imageUrl === '/images/placeholder-blog.png' ? 'Image Article' : <Image src={post.imageUrl} alt={post.title} width={300} height={200} className="object-cover w-full h-full" />}
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm text-gray-400 mb-1">{post.date} - <span className="text-brand-purple font-semibold">{post.category}</span></p>
                <Link href={`/blog/${post.id}`} legacyBehavior={false}>
                  <h2 className="text-2xl font-semibold text-white mb-3 cursor-pointer group-hover:text-brand-purple transition-colors">{post.title}</h2>
                </Link>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} legacyBehavior={false}>
                  <span className="text-brand-purple hover:text-purple-300 font-semibold transition-colors cursor-pointer">Lire la suite &rarr;</span>
                </Link>
              </div>
            </article>
          ))}
          {/* Add pagination if many blog posts */}
        </main>

        {/* Sidebar pour les filtres et newsletter */}
        <aside className="w-full md:w-1/4 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl self-start space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Catégories</h2>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat}>
                  <Link href={`/blog/categorie/${cat.toLowerCase().replace(/ /g, '-')}`} legacyBehavior={false}>
                    <span className="text-gray-300 hover:text-brand-purple transition-colors cursor-pointer">{cat}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Newsletter</h2>
            <p className="text-gray-300 mb-3 text-sm">Recevez nos meilleurs articles directement dans votre boîte mail.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none placeholder-gray-500"
              />
              <button type="submit" className="w-full bg-brand-purple hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300">
                S'inscrire
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}

