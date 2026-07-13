'use client';

import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { products, problems } from '@/app/data/products';

export default function BrowseByProblem() {
  const getProductsByProblem = (problemName: string) => {
    return products.filter(p => p.targetProblems.includes(problemName));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Browse by Problem</h1>
        <p className="text-gray-600 mb-8">Start with the field issue first, then narrow down by crop.</p>

        <div className="space-y-12">
          {problems.map((problem) => {
            const problemProducts = getProductsByProblem(problem.name);
            return (
              <div key={problem.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{problem.name}</h2>
                
                {problemProducts.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {problemProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        className="p-4 bg-gray-50 rounded border border-gray-200 hover:border-green-500 hover:shadow-lg transition"
                      >
                        <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        <div className="flex gap-2 flex-wrap">
                          {product.crops.slice(0, 2).map((crop) => (
                            <span key={crop} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              {crop}
                            </span>
                          ))}
                        </div>
                        <p className="text-green-600 font-semibold text-sm mt-3">View Details →</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No products available for this problem.</p>
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