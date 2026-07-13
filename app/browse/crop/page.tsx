'use client';

import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { products, crops, cropImages } from '@/app/data/products';

export default function BrowseByCrop() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Browse by Crop</h1>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            cropImages.map((cropImage)=>{
              return (
                <div key={cropImage.id} className="rounded-2xl shadow-md">
                  <img src={cropImage.image} alt="no" className="rounded-2xl m-3 h-[300px] w-[90%] object-cover border border-gray-300" />
                  <h1 className="p-2 m-3 text-md">{cropImage.name}</h1>
                </div>
              );
            })
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}