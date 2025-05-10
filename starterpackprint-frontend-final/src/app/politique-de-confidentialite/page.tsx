import Head from "next/head";

export default function PolitiqueDeConfidentialitePage() {
  return (
    <div className="py-12 text-gray-200">
      <Head>
        <title>Politique de Confidentialité - Starter Pack Print</title>
        <meta name="description" content="Politique de confidentialité du site Starter Pack Print." />
      </Head>

      <section className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Politique de Confidentialité</h1>
        
        <div className="space-y-6 prose prose-invert lg:prose-xl max-w-none text-gray-300">
          <p className="text-sm italic">Date de dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

          <p>
            Bienvenue sur la politique de confidentialité de Starter Pack Print (ci-après "nous", "notre" ou "nos"). Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informera sur la manière dont nous traitons vos données personnelles lorsque vous visitez notre site web (quel que soit l_endroit d_où vous le visitez) et vous informera de vos droits en matière de protection de la vie privée et de la manière dont la loi vous protège.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">1. Informations que nous collectons</h2>
          <p>
            Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant, que nous avons regroupées comme suit :
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li><strong>Données d_identité :</strong> prénom, nom, nom d_utilisateur ou identifiant similaire.</li>
            <li><strong>Données de contact :</strong> adresse de facturation, adresse de livraison, adresse électronique et numéros de téléphone.</li>
            <li><strong>Données financières :</strong> détails du compte bancaire et de la carte de paiement (traitées de manière sécurisée par nos prestataires de paiement Stripe et PayPal, nous ne stockons pas ces informations directement).</li>
            <li><strong>Données de transaction :</strong> détails sur les paiements vers et depuis vous et autres détails des produits et services que vous avez achetés chez nous.</li>
            <li><strong>Données techniques :</strong> adresse de protocole internet (IP), vos données de connexion, type et version du navigateur, réglage du fuseau horaire et emplacement, types et versions des plug-ins du navigateur, système d_exploitation et plateforme, et autres technologies sur les appareils que vous utilisez pour accéder à ce site web.</li>
            <li><strong>Données de profil :</strong> votre nom d_utilisateur et mot de passe, achats ou commandes effectués par vous, vos intérêts, préférences, commentaires et réponses aux enquêtes.</li>
            <li><strong>Données d_utilisation :</strong> informations sur la manière dont vous utilisez notre site web, nos produits et nos services.</li>
            <li><strong>Données marketing et de communication :</strong> vos préférences en matière de réception de marketing de notre part et de nos tiers et vos préférences en matière de communication.</li>
            <li><strong>Données de personnalisation :</strong> fichiers images, textes et autres contenus que vous téléchargez pour personnaliser des produits.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">2. Comment nous utilisons vos données personnelles</h2>
          <p>
            Nous n_utiliserons vos données personnelles que lorsque la loi nous le permettra. Le plus souvent, nous utiliserons vos données personnelles dans les circonstances suivantes :
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Lorsque nous devons exécuter le contrat que nous sommes sur le point de conclure ou que nous avons conclu avec vous (par exemple, pour traiter et livrer votre commande).</li>
            <li>Lorsque cela est nécessaire pour nos intérêts légitimes (ou ceux d_un tiers) et que vos intérêts et droits fondamentaux ne l_emportent pas sur ces intérêts.</li>
            <li>Lorsque nous devons nous conformer à une obligation légale ou réglementaire.</li>
          </ul>
          <p>
            Plus précisément, nous utilisons vos données pour :
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Traiter et gérer vos commandes, y compris la gestion des paiements et la livraison.</li>
            <li>Gérer notre relation avec vous, ce qui inclura la notification des modifications apportées à nos conditions ou à notre politique de confidentialité.</li>
            <li>Vous permettre de participer à un tirage au sort, un concours ou de répondre à un sondage.</li>
            <li>Administrer et protéger notre entreprise et ce site web (y compris le dépannage, l_analyse des données, les tests, la maintenance du système, l_assistance, la communication des données et l_hébergement des données).</li>
            <li>Vous fournir du contenu et des publicités pertinents sur le site web et mesurer ou comprendre l_efficacité de la publicité que nous vous diffusons.</li>
            <li>Utiliser l_analyse des données pour améliorer notre site web, nos produits/services, notre marketing, nos relations avec la clientèle et nos expériences.</li>
            <li>Vous faire des suggestions et des recommandations sur des biens ou services susceptibles de vous intéresser.</li>
            <li>Gérer les personnalisations de produits que vous demandez.</li>
          </ul>

          <h2 id="cookies" className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">3. Cookies</h2>
          <p>
            Notre site web utilise des cookies pour distinguer les utilisateurs de notre site web. Cela nous aide à vous fournir une bonne expérience lorsque vous naviguez sur notre site web et nous permet également d_améliorer notre site. Un cookie est un petit fichier de lettres et de chiffres que nous stockons sur votre navigateur ou le disque dur de votre ordinateur si vous êtes d_accord. Les cookies contiennent des informations qui sont transférées sur le disque dur de votre ordinateur.
          </p>
          <p>
            Nous utilisons les cookies suivants :
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li><strong>Cookies strictement nécessaires.</strong> Ce sont des cookies qui sont nécessaires au fonctionnement de notre site web. Ils comprennent, par exemple, les cookies qui vous permettent de vous connecter à des zones sécurisées de notre site web, d_utiliser un panier d_achat ou d_utiliser des services de facturation électronique.</li>
            <li><strong>Cookies analytiques/de performance.</strong> Ils nous permettent de reconnaître et de compter le nombre de visiteurs et de voir comment les visiteurs se déplacent sur notre site web lorsqu_ils l_utilisent. Cela nous aide à améliorer le fonctionnement de notre site web, par exemple, en veillant à ce que les utilisateurs trouvent facilement ce qu_ils cherchent.</li>
            <li><strong>Cookies de fonctionnalité.</strong> Ceux-ci sont utilisés pour vous reconnaître lorsque vous revenez sur notre site web. Cela nous permet de personnaliser notre contenu pour vous, de vous saluer par votre nom et de mémoriser vos préférences (par exemple, votre choix de langue ou de région).</li>
            <li><strong>Cookies de ciblage.</strong> Ces cookies enregistrent votre visite sur notre site web, les pages que vous avez visitées et les liens que vous avez suivis. Nous utiliserons ces informations pour rendre notre site web et la publicité qui y est affichée plus pertinents par rapport à vos intérêts. Nous pouvons également partager ces informations avec des tiers à cette fin.</li>
          </ul>
          <p>
            Vous pouvez bloquer les cookies en activant le paramètre de votre navigateur qui vous permet de refuser l_installation de tout ou partie des cookies. Toutefois, si vous utilisez les paramètres de votre navigateur pour bloquer tous les cookies (y compris les cookies essentiels), vous ne pourrez peut-être pas accéder à tout ou partie de notre site.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">4. Partage de vos données personnelles</h2>
          <p>
            Nous pouvons être amenés à partager vos données personnelles avec les parties indiquées ci-dessous aux fins énoncées dans le tableau du paragraphe 2 ci-dessus :
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Prestataires de services tiers qui fournissent des services informatiques et d_administration système.</li>
            <li>Conseillers professionnels, y compris les avocats, banquiers, auditeurs et assureurs qui fournissent des services de conseil, bancaires, juridiques, d_assurance et de comptabilité.</li>
            <li>Les autorités fiscales, les régulateurs et autres autorités qui exigent la déclaration des activités de traitement dans certaines circonstances.</li>
            <li>Nos partenaires d_impression et de livraison (par exemple, Printful) pour exécuter vos commandes.</li>
            <li>Nos prestataires de services de paiement (par exemple, Stripe, PayPal) pour traiter vos paiements de manière sécurisée.</li>
          </ul>
          <p>
            Nous exigeons de tous les tiers qu_ils respectent la sécurité de vos données personnelles et qu_ils les traitent conformément à la loi. Nous n_autorisons pas nos prestataires de services tiers à utiliser vos données personnelles à leurs propres fins et ne leur permettons de traiter vos données personnelles qu_à des fins spécifiées et conformément à nos instructions.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">5. Sécurité des données</h2>
          <p>
            Nous avons mis en place des mesures de sécurité appropriées pour éviter que vos données personnelles ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée, modifiées ou divulguées. De plus, nous limitons l_accès à vos données personnelles aux employés, agents, sous-traitants et autres tiers qui ont un besoin professionnel de les connaître. Ils ne traiteront vos données personnelles que sur nos instructions et sont soumis à une obligation de confidentialité.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">6. Conservation des données</h2>
          <p>
            Nous ne conserverons vos données personnelles qu_aussi longtemps que nécessaire pour atteindre les objectifs pour lesquels nous les avons collectées, y compris pour satisfaire à toute exigence légale, comptable ou de déclaration.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">7. Vos droits légaux</h2>
          <p>
            Dans certaines circonstances, vous disposez de droits en vertu des lois sur la protection des données concernant vos données personnelles. Vous avez le droit de :
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Demander l_accès à vos données personnelles.</li>
            <li>Demander la correction de vos données personnelles.</li>
            <li>Demander l_effacement de vos données personnelles.</li>
            <li>Vous opposer au traitement de vos données personnelles.</li>
            <li>Demander la restriction du traitement de vos données personnelles.</li>
            <li>Demander le transfert de vos données personnelles.</li>
            <li>Droit de retirer votre consentement.</li>
          </ul>
          <p>
            Si vous souhaitez exercer l_un des droits énoncés ci-dessus, veuillez nous contacter à contact@starterpackprint.example.com.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">8. Modifications de la politique de confidentialité</h2>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page. Nous vous conseillons de consulter régulièrement cette politique de confidentialité pour prendre connaissance de toute modification.
          </p>

          <h2 className="text-2xl font-semibold text-white border-b border-brand-purple pb-2">9. Nous contacter</h2>
          <p>
            Si vous avez des questions concernant cette politique de confidentialité, y compris toute demande d_exercice de vos droits légaux, veuillez nous contacter en utilisant les coordonnées indiquées dans nos <a href="/mentions-legales" className="text-brand-purple hover:underline">Mentions Légales</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

