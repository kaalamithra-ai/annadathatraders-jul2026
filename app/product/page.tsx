'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { products, mainCategories } from '@/app/data/products';

export default function ProductsPage() {
  const [activeMainCategory, setActiveMainCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return products.filter((product) => {
      const matchCategory = !activeMainCategory || product.category === activeMainCategory;
      const matchSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [activeMainCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/product" className="text-gray-800 font-semibold">
              Products
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1 z-0 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                {/* Search */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Search</h3>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
                  />

                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-2 text-sm text-gray-500 hover:text-green-600 transition-colors"
                    >
                      Clear search
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Category</h3>

                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        checked={activeMainCategory === null}
                        onChange={() => setActiveMainCategory(null)}
                        className="w-4 h-4 text-green-600 rounded focus:ring-2 focus:ring-green-600"
                      />
                      <span className="ml-3 text-gray-700 font-medium group-hover:text-green-600 transition-colors">
                        All Products
                        <span className="text-gray-500 ml-1">({products.length})</span>
                      </span>
                    </label>

                    {mainCategories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="radio"
                          checked={activeMainCategory === category}
                          onChange={() => setActiveMainCategory(category)}
                          className="w-4 h-4 text-green-600 rounded focus:ring-2 focus:ring-green-600"
                        />
                        <span className="ml-3 text-gray-700 group-hover:text-green-600 transition-colors">
                          {category}
                          <span className="text-gray-500 ml-1">
                            ({products.filter((p) => p.category === category).length})
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>

                  {activeMainCategory && (
                    <button
                      onClick={() => setActiveMainCategory(null)}
                      className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg transition-colors text-sm"
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </div>
            </aside>

            {/* Right Content */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
                </h2>

                {activeMainCategory && (
                  <p className="text-gray-600 text-sm mt-1">
                    <span>
                      Category:{' '}
                      <span className="font-semibold">{activeMainCategory}</span>
                    </span>
                  </p>
                )}

                {searchQuery && (
                  <p className="text-gray-600 text-sm mt-1">
                    <span>
                      Search:{' '}
                      <span className="font-semibold">{searchQuery}</span>
                    </span>
                  </p>
                )}
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <div className="h-[300px] md:h-[200px]">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-[100%] h-[100%] object-fit md:object-cover bg-white rounded-lg"
                            />
                          </div>

                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg mt-2 overflow-x-auto font-bold dark:text-green-600 text-gray-800 group-hover:text-green-600 transition-colors flex-1">
                              {product.name}
                            </h3>
                          </div>

                          <div className="flex gap-2">
                            <p className="text-xs font-semibold text-green-700 bg-green-50 w-fit px-2 py-1 rounded">
                              {product.category}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        <button className="w-full bg-green-600 dark:text-gray-300 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors">
                          View Details →
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-6">
                    No products match your selected filter
                  </p>
                  <button
                    onClick={() => {
                      setActiveMainCategory(null);
                      setSearchQuery('');
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

