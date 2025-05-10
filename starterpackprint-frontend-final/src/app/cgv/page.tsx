import Head from "next/head";

export default function CGVPage() {
  return (
    <div className="py-12 text-gray-200">
      <Head>
        <title>Conditions Générales de Vente - Starter Pack Print</title>
        <meta name="description" content="Conditions Générales de Vente du site Starter Pack Print." />
      </Head>

      <section className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Conditions Générales de Vente</h1>
        
        <div className="space-y-6 prose prose-invert lg:prose-xl max-w-none text-gray-300">
          <p className="text-sm italic">Date de dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 1 : Objet</h2>
          <p>
            Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre la société Starter Pack Print (ci-après dénommée "le Vendeur") et toute personne physique ou morale (ci-après dénommée "le Client") souhaitant procéder à un achat via le site internet www.starterpackprint.example.com (ci-après dénommé "le Site").
            L_acquisition d_un produit à travers le présent site implique une acceptation sans réserve par le Client des présentes conditions de vente dont le Client reconnaît avoir pris connaissance préalablement à sa commande.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 2 : Produits</h2>
          <p>
            Les produits proposés à la vente sont ceux qui figurent sur le Site, dans la limite des stocks disponibles. Le Vendeur se réserve le droit de modifier à tout moment l_assortiment de produits. Chaque produit est présenté sur le site internet sous forme d_un descriptif reprenant ses principales caractéristiques techniques. Les photographies sont les plus fidèles possibles mais n_engagent en rien le Vendeur.
          </p>
          <p>
            Pour les produits personnalisés, le Client est seul responsable du contenu (textes, images, logos) qu_il fournit. Le Vendeur se réserve le droit de refuser toute commande dont le contenu serait jugé illicite, diffamatoire, ou contraire aux bonnes mœurs.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 3 : Tarifs</h2>
          <p>
            Les prix figurant sur les fiches produits du catalogue internet sont des prix en Euros (€) toutes taxes comprises (TTC) tenant compte de la TVA applicable au jour de la commande. Tout changement du taux de la TVA pourra être répercuté sur le prix des produits. Le Vendeur se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant au catalogue le jour de la commande sera le seul applicable au Client.
            Les prix indiqués ne comprennent pas les frais de livraison, facturés en supplément du prix des produits achetés suivant le montant total de la commande.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 4 : Commande et modalités de paiement</h2>
          <p>
            Avant toute commande, le Client doit créer un compte sur le Site ou se connecter à son compte existant. La rubrique de création de compte est accessible directement depuis la barre de menu.
            Le paiement est exigible immédiatement à la commande, y compris pour les produits en précommande. Le Client peut effectuer le règlement par carte de paiement (Visa, MasterCard, American Express) via la plateforme sécurisée Stripe, ou par PayPal. Les paiements par carte bancaire sont réalisés par le biais du système sécurisé Stripe qui utilise le protocole SSL (Secure Socket Layer) de telle sorte que les informations transmises sont cryptées par un logiciel et qu_aucun tiers ne peut en prendre connaissance au cours du transport sur le réseau.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 5 : Réserve de propriété</h2>
          <p>
            La société Starter Pack Print conserve la propriété pleine et entière des produits vendus jusqu_au parfait encaissement du prix, en principal, frais et taxes compris.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 6 : Rétractation</h2>
          <p>
            Conformément à l_article L.221-18 du Code de la consommation, le Client dispose d_un délai de quatorze jours ouvrables à compter de la livraison de leur commande pour exercer son droit de rétractation et ainsi faire retour du produit au vendeur pour échange ou remboursement sans pénalité, à l_exception des frais de retour.
          </p>
          <p>
            <strong>Exception pour les produits personnalisés :</strong> Conformément à l_article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de biens confectionnés selon les spécifications du consommateur ou nettement personnalisés.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 7 : Livraison</h2>
          <p>
            Les livraisons sont faites à l_adresse indiquée sur le bon de commande qui ne peut être que dans la zone géographique convenue. Les commandes sont effectuées par Printful (ou service similaire), service de livraison avec suivi, remise sans signature. Les délais de livraison ne sont donnés qu_à titre indicatif ; si ceux-ci dépassent trente jours à compter de la commande, le contrat de vente pourra être résilié et le Client remboursé.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 8 : Garantie</h2>
          <p>
            Tous les produits fournis par la société Starter Pack Print bénéficient de la garantie légale de conformité prévue aux articles L. 217-4 et suivants du Code de la consommation et de la garantie des vices cachés prévue aux articles 1641 et suivants du Code civil. En cas de non-conformité d_un produit vendu, il pourra être retourné à la société Starter Pack Print qui le reprendra, l_échangera ou le remboursera.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 9 : Responsabilité</h2>
          <p>
            La société Starter Pack Print, dans le processus de vente à distance, n_est tenue que par une obligation de moyens. Sa responsabilité ne pourra être engagée pour un dommage résultant de l_utilisation du réseau Internet tel que perte de données, intrusion, virus, rupture du service, ou autres problèmes involontaires.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 10 : Propriété intellectuelle</h2>
          <p>
            Tous les éléments du site www.starterpackprint.example.com sont et restent la propriété intellectuelle et exclusive de la société Starter Pack Print. Personne n_est autorisé à reproduire, exploiter, ou utiliser à quelque titre que ce soit, même partiellement, des éléments du site qu_ils soient sous forme de photo, logo, visuel ou texte.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 11 : Données à caractère personnel</h2>
          <p>
            La société Starter Pack Print s_engage à préserver la confidentialité des informations fournies par l_acheteur, qu_il serait amené à transmettre pour l_utilisation de certains services. Toute information le concernant est soumise aux dispositions de la loi n° 78-17 du 6 janvier 1978. À ce titre, l_internaute dispose d_un droit d_accès, de modification et de suppression des informations le concernant. Il peut en faire la demande à tout moment par courrier à l_adresse suivante : contact@starterpackprint.example.com. Pour plus d_informations, veuillez consulter notre <a href="/politique-de-confidentialite" className="text-brand-purple hover:underline">Politique de Confidentialité</a>.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">Article 12 : Règlement des litiges</h2>
          <p>
            Les présentes conditions de vente à distance sont soumises à la loi française. Pour tous litiges ou contentieux, le Tribunal compétent sera celui du lieu de domicile du défendeur ou, au choix du demandeur, du lieu de livraison effective du Produit.
          </p>
        </div>
      </section>
    </div>
  );
}

