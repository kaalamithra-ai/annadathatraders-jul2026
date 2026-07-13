'use client';

import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { products, categories } from '@/app/data/products';

const categoryConfig: Record<string, { icon: string; color: string; bgColor: string; borderColor: string; badgeColor: string; description: string }> = {
  "Agriculture": {
    icon: "🌾",
    color: "text-green-800",
    bgColor: "bg-green-50",
    borderColor: "border-green-300",
    badgeColor: "bg-green-100 text-green-700",
    description: "Fertilizers, pesticides, and growth enhancers for crops and soil management."
  },
  "Healthcare": {
    icon: "💊",
    color: "text-blue-800",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "Ayurvedic supplements, vitamins, and wellness products for personal health."
  },
  "Personal Care": {
    icon: "🧴",
    color: "text-purple-800",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
    badgeColor: "bg-purple-100 text-purple-700",
    description: "Skincare, haircare, bath & body and oral care products for daily use."
  },
  "Animal Care": {
    icon: "🐄",
    color: "text-amber-800",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    badgeColor: "bg-amber-100 text-amber-700",
    description: "Cattle feed, poultry supplements, pet food and aqua feed for healthy livestock."
  },
  "Ready to Eat": {
    icon: "🍵",
    color: "text-rose-800",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-300",
    badgeColor: "bg-rose-100 text-rose-700",
    description: "Tea, spices, oils, ready meals, and traditional snacks for everyday enjoyment."
  }
};

export default function BrowseByCategory() {
  const getProductsByCategory = (category: string) => {
    return products.filter(p => p.category === category);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Browse by Category</h1>
        <p className="text-gray-600 mb-8">Select a product category to explore all available options.</p>

        <div className="space-y-12">
          {categories.map((category) => {
            const categoryProducts = getProductsByCategory(category);
            const config = categoryConfig[category] || { icon: "📦", color: "text-gray-800", bgColor: "bg-gray-50", borderColor: "border-gray-300", badgeColor: "bg-gray-100 text-gray-700", description: "" };
            return (
              <div key={category} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{config.icon}</span>
                  <h2 className={`text-2xl font-bold ${config.color}`}>{category}</h2>
                  <span className={`text-xs px-2 py-1 rounded-full ${config.badgeColor}`}>
                    {categoryProducts.length} products
                  </span>
                </div>
                {config.description && (
                  <p className="text-gray-500 text-sm mb-4 ml-12">{config.description}</p>
                )}
                
                {categoryProducts.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {categoryProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        className="p-4 bg-gray-50 rounded border border-gray-200 hover:border-green-500 hover:shadow-lg transition"
                      >
                        <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <div className="flex gap-2 flex-wrap mb-2">
                          {product.crops.slice(0, 2).map((crop) => (
                            <span key={crop} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              {crop}
                            </span>
                          ))}
                        </div>
                        <p className="text-green-600 font-semibold text-sm">View Details →</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No products available in this category.</p>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}