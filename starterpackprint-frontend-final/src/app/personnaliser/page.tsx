"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Define a type for the product options for better type safety
type ProductType = 'poster' | 'sticker' | 'magnet' | 'mug' | 'totebag';

interface ProductOption {
  id: ProductType;
  name: string;
  sizes?: string[]; // Optional sizes for products like posters
  // Add other relevant properties like Printful product ID, variants, etc.
}

const productOptions: ProductOption[] = [
  { id: 'poster', name: 'Poster', sizes: ['S (30x40cm)', 'M (50x70cm)', 'L (70x100cm)'] },
  { id: 'sticker', name: 'Sticker' },
  { id: 'magnet', name: 'Magnet' },
  { id: 'mug', name: 'Mug' },
  { id: 'totebag', name: 'Tote Bag' },
];

export default function PersonnaliserPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(productOptions[0].id);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    productOptions[0].sizes ? productOptions[0].sizes[0] : undefined
  );
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const productId = event.target.value as ProductType;
    setSelectedProduct(productId);
    const product = productOptions.find(p => p.id === productId);
    if (product && product.sizes) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize(undefined);
    }
    // Reset image on product change for now, or adapt preview
    setUploadedImage(null);
    setPreviewImage(null);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setPreviewImage(reader.result as string); // Show uploaded image as preview
      };
      reader.readAsDataURL(file);
    }
  };

  const currentProduct = productOptions.find(p => p.id === selectedProduct);

  return (
    <div className="py-12">
      <Head>
        <title>Personnaliser votre Produit - Starter Pack Print</title>
        <meta name="description" content="Importez votre Starter Pack et personnalisez votre produit unique." />
      </Head>

      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Personnalisez Votre Création</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Choisissez un produit, importez votre image Starter Pack, et visualisez le résultat avant de commander.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl">
        {/* Section de Prévisualisation */}
        <div className="bg-gray-700/50 p-6 rounded-lg shadow-inner flex flex-col items-center justify-center min-h-[400px]">
          <h2 className="text-2xl font-semibold text-white mb-4">Prévisualisation</h2>
          {previewImage ? (
            <Image src={previewImage} alt="Prévisualisation du produit" width={300} height={300} className="object-contain rounded-md shadow-lg" />
          ) : (
            <div className="w-full h-64 bg-gray-600/70 rounded-md flex items-center justify-center text-gray-400">
              <p>Votre image apparaîtra ici</p>
            </div>
          )}
          {/* Placeholder for Printful product mockups later */}
        </div>

        {/* Section de Personnalisation */}
        <div className="space-y-6">
          <div>
            <label htmlFor="product-select" className="block text-lg font-medium text-white mb-2">1. Choisissez votre produit :</label>
            <select 
              id="product-select" 
              value={selectedProduct}
              onChange={handleProductChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none"
            >
              {productOptions.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>

          {currentProduct && currentProduct.sizes && (
            <div>
              <label htmlFor="size-select" className="block text-lg font-medium text-white mb-2">2. Choisissez la taille :</label>
              <select 
                id="size-select" 
                value={selectedSize}
                onChange={handleSizeChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none"
              >
                {currentProduct.sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label htmlFor="image-upload" className="block text-lg font-medium text-white mb-2">
              {currentProduct && currentProduct.sizes ? '3.' : '2.'} Importez votre image Starter Pack :
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md bg-gray-700/50 hover:border-brand-purple transition-colors">
              <div className="space-y-1 text-center">
                {/* SVG Icon Placeholder */}
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-400">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-brand-purple rounded-md font-medium text-white hover:text-purple-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 focus-within:ring-brand-purple px-2 py-1">
                    <span>Télécharger un fichier</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageUpload} accept="image/*" />
                  </label>
                  <p className="pl-1">ou glissez-déposez</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu\'à 10MB</p>
              </div>
            </div>
          </div>
          
          {/* Placeholder for Printful Product Customizer Widget */}
          <div id="printful-customizer-widget" className="mt-6 min-h-[300px] bg-gray-700/50 rounded-lg p-4 text-center text-gray-400">
            <p>L\'outil de personnalisation Printful apparaîtra ici.</p>
            <p className="text-sm mt-2"> (Nécessite la configuration de l\'API Printful et du widget)</p>
          </div>

          <button 
            type="button" 
            disabled={!uploadedImage} 
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            Ajouter au Panier
          </button>
        </div>
      </div>
    </div>
  );
}

