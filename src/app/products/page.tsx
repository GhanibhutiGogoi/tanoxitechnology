'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useTranslations } from '@/context/useTranslations';
import { useLanguage } from '@/context/LanguageContext';
import { toast, Toaster } from 'react-hot-toast';

// Mock product data with translations
const products = [
  {
    id: 1,
    translations: {
      en: {
        name: 'Product 1',
        description: 'Description for Product 1',
        category: 'Electronics'
      },
      zh: {
        name: '产品 1',
        description: '产品 1 的描述',
        category: '电子产品'
      }
    },
    price: 99.99,
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    translations: {
      en: {
        name: 'Product 2',
        description: 'Description for Product 2',
        category: 'Accessories'
      },
      zh: {
        name: '产品 2',
        description: '产品 2 的描述',
        category: '配件'
      }
    },
    price: 149.99,
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    translations: {
      en: {
        name: 'Product 3',
        description: 'Description for Product 3',
        category: 'Electronics'
      },
      zh: {
        name: '产品 3',
        description: '产品 3 的描述',
        category: '电子产品'
      }
    },
    price: 199.99,
    image: '/placeholder.jpg',
  },
];

export default function Products() {
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart, isLoading: isCartLoading } = useCart();
  const { t } = useTranslations();
  const { language, isLoading: isLanguageLoading } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isCartLoading || isLanguageLoading) {
    return null; // Or a loading spinner
  }

  const getTranslatedProducts = () => {
    return products.map(product => ({
      ...product,
      name: product.translations[language].name,
      description: product.translations[language].description,
      category: product.translations[language].category,
    }));
  };

  const translatedProducts = getTranslatedProducts();
  
  const filteredProducts = selectedCategory === 'all'
    ? translatedProducts
    : translatedProducts.filter(product => product.category === selectedCategory);

  const uniqueCategories = Array.from(
    new Set(translatedProducts.map(product => product.category))
  );
  const categories = ['all', ...uniqueCategories];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Toaster />
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('products.categories')}</h2>
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? t('products.all') : category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={`/products/${product.id}`}>
              <div className="aspect-w-3 aspect-h-2">
                <div className="w-full h-48 bg-gray-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-primary font-semibold">${product.price}</p>
              </div>
            </Link>
            <div className="px-4 pb-4">
              <button
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                  });
                  toast.success(t('products.addedToCart').replace('%s', product.name));
                }}
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                {t('common.addToCart')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
