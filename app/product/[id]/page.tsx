'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState, use } from 'react';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import InquiryForm from '@/app/components/InquiryForm';
import { products } from '@/app/data/products';

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  const [activeTab, setActiveTab] = useState<'overview' | 'dosage'>('overview');

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (p) =>
      p.id !== product.id &&
      (p.category === product.category ||
        p.crops.some((c) => product.crops.includes(c)))
  );

  const handleImageZoom = () => {
    if (!product?.image) return;
    window.open(String(product.image));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="z-0 flex-1">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-green-600">
                Home
              </Link>
              <span>/</span>
              <Link href="/product" className="hover:text-green-600">
                Products
              </Link>
              <span>/</span>
              <span className="text-gray-800 font-semibold">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-[100%] mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-4 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <div
                className="bg-green-100 text-black rounded-lg p-3 mb-6"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1574263867573-992eee7f6ba0?w=1200&h=400&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                }}
              >
                <div className="bg-transparent relative z-7 flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-green-800 uppercase mb-2">
                      {product.category}
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 drop-shadow-lg">
                      {product.name}
                    </h1>
                  </div>
                </div>
              </div>

              {product.image && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 overflow-auto">
                  <div className="flex justify-center items-center bg-gray-100 rounded-lg p-8 min-h-40 md:min-h-96">
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={handleImageZoom}
                      className="max-h-full md:max-h-80 max-w-full object-contain rounded-lg shadow-lg cursor-zoom-in"
                    />
                  </div>
                </div>
              )}

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  About This Product
                </h2>
                <p className="text-gray-700 text-md md:text-lg">
                  {product.description}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                    >
                      <div className="text-2xl flex-shrink-0">✓</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {product.benefits && product.benefits.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    Benefits
                  </h2>
                  <div className="space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                      >
                        <div className="text-xl flex-shrink-0">💡</div>
                        <p className="text-gray-700 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 px-6 py-4 font-semibold text-center transition-colors ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-green-600 text-green-700 bg-green-50'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('dosage')}
                    className={`flex-1 px-6 py-4 font-semibold text-center transition-colors ${
                      activeTab === 'dosage'
                        ? 'border-b-2 border-green-600 text-green-700 bg-green-50'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Application Guide
                  </button>
                </div>

                <div className="p-8">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                          <span className="text-2xl mr-2">🌾</span> Target Crops
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {product.crops.map((crop) => (
                            <Link
                              key={crop}
                              href={`/product?crop=${crop}`}
                              className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium transition-colors"
                            >
                              {crop}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'dosage' && (
                    <div className="space-y-6">
                      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-green-900 mb-2">
                          💊 Recommended Dosage
                        </h4>
                        <p className="text-xl font-semibold text-green-800">
                          {product.dosage}
                        </p>
                      </div>

                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-blue-900 mb-2">
                          ⏰ Application Timing
                        </h4>
                        <p className="text-lg text-blue-800">{product.timing}</p>
                      </div>

                      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-yellow-900 mb-2">
                          ⚠️ Important Notes
                        </h4>
                        <ul className="space-y-2 text-yellow-800">
                          <li>• Always wear protective equipment when applying</li>
                          <li>• Follow dosage recommendations strictly</li>
                          <li>• Apply during suitable weather conditions</li>
                          <li>• Do not mix with incompatible products without testing</li>
                          <li>• Contact for specific guidance on your crop condition</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-xs text-green-700 uppercase font-bold mb-1">
                      Supplier
                    </p>
                    <p className="text-lg font-bold text-green-800">{product.supplier}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-xs text-blue-700 uppercase font-bold mb-1">
                      Category
                    </p>
                    <p className="text-lg font-bold text-blue-800">{product.category}</p>
                  </div>
                  <hr className="my-4" />
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Stock Availability</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="font-semibold text-green-700">In Stock</span>
                    </div>
                  </div>
                </div>

                <InquiryForm productName={product.name} />

                <div className="bg-gradient-to-br from-green-600 to-green-700 text-gray-100 rounded-lg p-4">
                  <h4 className="font-bold mb-3">Need Help?</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="opacity-80">WhatsApp Support</p>
                      <p className="font-semibold">+91 7349656549</p>
                    </div>
                    <div>
                      <p className="opacity-80">Email</p>
                      <p className="font-semibold">Annadaatatraders251@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.slice(0, 3).map((related) => (
                  <Link
                    key={related.id}
                    href={`/product/${related.id}`}
                    className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="p-6">
                      <p className="text-xs font-semibold text-green-700 uppercase mb-2">
                        {related.category}
                      </p>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors mb-2">
                        {related.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {related.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-xs text-gray-500">
                          {related.crops.length} crops
                        </span>
                        <span className="text-green-600 font-semibold text-sm">
                          View →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

