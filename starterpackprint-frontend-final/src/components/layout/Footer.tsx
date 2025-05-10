import Link from "next/link";
import Image from "next/image"; // Assuming you might want to add social media icons or other images

const Footer = () => {
  return (
    <footer className="bg-brand-purple text-white py-8 px-4 shadow-inner mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold mb-3">Starter Pack Print</h3>
          <p className="text-sm text-gray-300">
            Créez et commandez vos Starter Packs personnalisés uniques !
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Liens Utiles</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions Légales</Link></li>
            <li><Link href="/cgv" className="hover:text-gray-300 transition-colors">Conditions Générales de Vente</Link></li>
            <li><Link href="/politique-de-confidentialite" className="hover:text-gray-300 transition-colors">Politique de Confidentialité</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Nous Contacter</Link></li>
            <li><Link href="/commande/suivi" className="hover:text-gray-300 transition-colors">Suivi de Commande</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Paiement Sécurisé</h3>
          {/* Placeholder for payment logos - to be implemented with actual logos or a Stripe element */}
          <div className="flex justify-center md:justify-start space-x-2 mt-2">
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-700">VISA</div>
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-700">MC</div>
            <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-700">AMEX</div>
            {/* Add PayPal logo if needed */}
          </div>
          <h3 className="text-xl font-semibold mb-3 mt-6">Suivez-nous</h3>
          <div className="flex justify-center md:justify-start space-x-3">
            {/* Replace with actual social media icons and links */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">FB</Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">IG</Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">TW</Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-8 pt-8 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Starter Pack Print. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
