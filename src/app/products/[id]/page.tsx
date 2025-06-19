'use client';

import { useState, useEffect } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/context/CartContext';
import { useTranslations } from '@/context/useTranslations';
import { useLanguage } from '@/context/LanguageContext';
import { toast, Toaster } from 'react-hot-toast';
import Link from 'next/link';

// Mock product data with translations
const product = {
  id: 1,
  translations: {
    en: {
      name: 'Sample Product',
      description: 'This is a detailed description of the product. It includes all the important features and specifications that a customer might want to know about.',
      features: [
        'High-quality materials',
        'Durable construction',
        'Modern design',
        'Multiple color options',
      ],
      specifications: {
        'Dimensions': '10 x 5 x 2 inches',
        'Weight': '2 lbs',
        'Material': 'Premium quality',
        'Warranty': '1 year',
      }
    },
    zh: {
      name: '示例产品',
      description: '这是产品的详细说明。包含客户可能想要了解的所有重要功能和规格。',
      features: [
        '优质材料',
        '耐用构造',
        '现代设计',
        '多种颜色选择',
      ],
      specifications: {
        '尺寸': '10 x 5 x 2 英寸',
        '重量': '2 磅',
        '材质': '优质材料',
        '保修': '1 年',
      }
    }
  },
  price: 99.99,
};

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart, isLoading: isCartLoading } = useCart();
  const { t } = useTranslations();
  const { language, isLoading: isLanguageLoading } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isCartLoading || isLanguageLoading) {
    return null; // Or a loading spinner
  }

  // Get translated content
  const {
    name,
    description,
    features,
    specifications
  } = product.translations[language];

  // Mock images array - replace with actual product images
  const images = ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Toaster />
      <Link
        href="/products"
        className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        {t('common.backToProducts')}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <div className="w-full h-96 bg-gray-300" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="w-full h-24 bg-gray-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-2xl text-primary font-semibold mb-6">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-8">{description}</p>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('products.keyFeatures')}</h2>
            <ul className="list-disc list-inside space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{t('products.specifications')}</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-medium text-gray-900">{key}</dt>
                  <dd className="text-gray-600">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: name,
                  price: product.price,
                  quantity: 1
                });
                toast.success(t('products.addedToCart').replace('%s', name));
              }}
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              {t('common.addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
