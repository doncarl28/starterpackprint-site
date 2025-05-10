import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-brand-purple text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="pulsating-logo-container rounded-full border-2 border-white p-1 mr-4">
            <Image src="/images/logo.png" alt="Starter Pack Print Logo" width={80} height={80} className="rounded-full" />
          </Link>
          <Link href="/">
            <h1 className="text-3xl font-bold tracking-tight hover:text-gray-300 transition-colors">Starter Pack Print</h1>
          </Link>
        </div>
        <div className="space-x-4 text-lg mt-4 md:mt-0">
          <Link href="/" className="hover:text-gray-300 transition-colors">Accueil</Link>
          <Link href="/personnaliser" className="hover:text-gray-300 transition-colors">Personnaliser</Link>
          <Link href="/boutique" className="hover:text-gray-300 transition-colors">Boutique</Link>
          <Link href="/comment-ca-marche" className="hover:text-gray-300 transition-colors">Comment ça marche</Link>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
