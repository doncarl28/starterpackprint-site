import Head from "next/head";

export default function MentionsLegalesPage() {
  return (
    <div className="py-12 text-gray-200">
      <Head>
        <title>Mentions Légales - Starter Pack Print</title>
        <meta name="description" content="Mentions légales du site Starter Pack Print." />
      </Head>

      <section className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Mentions Légales</h1>
        
        <div className="space-y-6 prose prose-invert lg:prose-xl max-w-none text-gray-300">
          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">1. Éditeur du Site</h2>
          <p>
            <strong>Nom de l_entreprise :</strong> Starter Pack Print (Exemple)
            <br />
            <strong>Forme juridique :</strong> SAS (Exemple)
            <br />
            <strong>Capital social :</strong> 10 000 € (Exemple)
            <br />
            <strong>Siège social :</strong> 123 Rue de l_Exemple, 75000 Paris, France (Exemple)
            <br />
            <strong>Numéro SIRET :</strong> 123 456 789 00010 (Exemple)
            <br />
            <strong>Numéro de TVA intracommunautaire :</strong> FR 00 123456789 (Exemple)
            <br />
            <strong>Responsable de la publication :</strong> Jean Dupont (Exemple)
            <br />
            <strong>Adresse e-mail :</strong> contact@starterpackprint.example.com
            <br />
            <strong>Numéro de téléphone :</strong> +33 1 23 45 67 89 (Exemple)
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">2. Hébergement du Site</h2>
          <p>
            <strong>Hébergeur :</strong> Netlify (ou Vercel, selon le déploiement final)
            <br />
            <strong>Adresse :</strong> San Francisco, USA (Exemple)
            <br />
            <strong>Site web :</strong> www.netlify.com (ou www.vercel.com)
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">3. Propriété Intellectuelle</h2>
          <p>
            L_ensemble de ce site relève de la législation française et internationale sur le droit d_auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu_il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">4. Données Personnelles</h2>
          <p>
            Les informations recueillies font l_objet d_un traitement informatique destiné à la gestion des commandes et des relations commerciales. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous bénéficiez d_un droit d_accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant à contact@starterpackprint.example.com.
          </p>
          <p>
            Pour plus d_informations, veuillez consulter notre <a href="/politique-de-confidentialite" className="text-brand-purple hover:underline">Politique de Confidentialité</a>.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">5. Cookies</h2>
          <p>
            Ce site utilise des cookies pour améliorer l_expérience utilisateur. En naviguant sur ce site, vous acceptez l_utilisation de cookies. Pour en savoir plus et gérer vos préférences, consultez notre <a href="/politique-de-confidentialite#cookies" className="text-brand-purple hover:underline">Politique de Confidentialité</a>.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">6. Limitation de Responsabilité</h2>
          <p>
            Starter Pack Print s_efforce d_assurer au mieux de ses possibilités, l_exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, Starter Pack Print ne peut garantir l_exactitude, la précision ou l_exhaustivité des informations mises à la disposition sur ce site.
          </p>
        </div>
      </section>
    </div>
  );
}

