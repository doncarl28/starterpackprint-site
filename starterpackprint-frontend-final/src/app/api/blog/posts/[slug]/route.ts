import { NextRequest, NextResponse } from "next/server";

// Placeholder pour les données du blog. Dans une vraie application, cela viendrait d'une base de données.
const blogPosts = [
  {
    id: "1",
    title: "Les Tendances Starter Packs pour 2025",
    slug: "tendances-starter-packs-2025",
    excerpt: "Découvrez les thèmes et designs qui cartonnent cette année pour des créations uniques et percutantes.",
    content: "Contenu complet de l'article sur les tendances...",
    date: "2025-05-01T10:00:00Z",
    imageUrl: "/images/placeholder-blog-1.jpg",
    category: "Tendances",
  },
  {
    id: "2",
    title: "Comment Utiliser Notre Outil de Personnalisation Comme un Pro",
    slug: "utiliser-outil-personnalisation-pro",
    excerpt: "Un guide pas à pas pour maîtriser toutes les fonctionnalités de notre interface et créer le Starter Pack parfait.",
    content: "Contenu complet du guide pas à pas...",
    date: "2025-04-15T14:30:00Z",
    imageUrl: "/images/placeholder-blog-2.jpg",
    category: "Tutoriels",
  },
];

export async function GET(
  _request: NextRequest, // request prefixed with _ to avoid unused var warning
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const post = blogPosts.find(p => p.slug === slug || p.id === slug);

    if (post) {
      return NextResponse.json({ success: true, data: post });
    } else {
      return NextResponse.json({ success: false, message: "Article non trouvé." }, { status: 404 });
    }
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'article de blog (${params.slug}):`, error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { success: false, message: "Erreur serveur lors de la récupération de l'article de blog.", details: errorMessage },
      { status: 500 }
    );
  }
}

// TODO: Ajouter des routes pour créer, mettre à jour, supprimer des articles (nécessiterait une authentification et une base de données)

