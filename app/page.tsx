'use client'
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { crops, problems, categories, banners } from './data/products';
import Banner from './components/Banner';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="dark:bg-gray-700 flex-1">
        {/* Hero Section */}
        <section className="mt-5 md:mt-8 md:bg-linear-to-r from-green-300 to-green-200 dark:bg-gray-900 md:dark:bg-none w-[95%] md:h-[400px] grid grid-cols-1 md:grid-cols-2 rounded-xl m-auto">
          <div className="hidden h-[100%] md:flex flex-col items-center justify-center">
          <div >
            <h1 className="text-4xl font-bold text-green-800 dark:text-green-600">Welcome to Annadaata Traders</h1>
            <h1 className="text-2xl font-bold text-green-700 dark:text-green-700 text-center">Get the right product for the crop</h1>
          </div>
          </div>
          
          <div className="md:m-8 rounded-xl shadow-md md:shadow-none">
            <Banner items={banners} autoPlaySpeed={2000} />
          </div>
          
        </section>

        {/* Key Features */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-500 mb-2">Crop fit first</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Start with the field problem, then narrow the product.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-500 mb-2">Dose and timing</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Use practical guidance instead of guessing from packaging.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-500 mb-2">Availability check</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Confirm stock through WhatsApp or request a callback.
              </p>
            </div>
          </div>
        </section>

        {/* Browse Sections */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl text-center font-bold text-gray-800 dark:text-gray-300 mb-8">Find Products</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-3">
            {/* Browse by Problem */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-orange-700 mb-4">Browse by Problem</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Start with the field issue first, then narrow down by crop.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {problems.slice(0, 4).map((problem) => (
                  <span key={problem.id} className="bg-green-100 text-green-800 dark:bg-zinc-400 dark:text-black px-2 py-1 rounded text-sm">
                    {problem.name}
                  </span>
                ))}
              </div>
              <Link href="/browse/problem" className="text-green-600 dark:text-green-500 font-semibold hover:text-green-700">
                Explore All →
              </Link>
            </div>

            {/* Browse by Crop */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-orange-700 mb-4">Browse by Crop</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Move from crop to common problems and suitable products.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {crops.slice(0, 7).map((crop) => (
                  <span key={crop} className="bg-green-100 text-green-800 dark:bg-zinc-400 dark:text-black dark:font-semibold px-2 py-1 rounded text-sm">
                    {crop}
                  </span>
                ))}
              </div>
              <Link href="/browse/crop" className="text-green-600 dark:text-green-500 font-semibold hover:text-green-700">
                Explore All →
              </Link>
            </div>

            {/* Browse by Category */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-orange-700 mb-4">Browse by Category</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Useful when buyers know the product type they need.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.slice(0, 4).map((cat) => (
                  <span key={cat} className="bg-purple-100 dark:bg-zinc-400 dark:text-black dark:font-semibold text-purple-800 px-2 py-1 rounded text-sm">
                    {cat}
                  </span>
                ))}
              </div>
              <Link href="/browse/category" className="text-green-600 dark:text-green-500 font-semibold hover:text-green-700">
                Explore All →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        {/* <section className="bg-white py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Advisory Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/advisory" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🌾 Rice Blast Control Guide</h3>
                <p className="text-gray-600 mb-4">Identify pressure early and ask for the right support.</p>
                <span className="text-green-600 font-semibold">Read Guide →</span>
              </Link>

              <Link href="/advisory" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-800 mb-2">🌶️ Chilli Thrips Solutions</h3>
                <p className="text-gray-600 mb-4">Problem-led guidance before choosing a product.</p>
                <span className="text-green-600 font-semibold">Read Guide →</span>
              </Link>

              <Link href="/advisory" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-800 mb-2">✅ Authenticity Check</h3>
                <p className="text-gray-600 mb-4">How to identify genuine pesticides and avoid counterfeits.</p>
                <span className="text-green-600 font-semibold">Read Guide →</span>
              </Link>
            </div>
          </div>
        </section> */}

        {/* Trust Section */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-8 text-center">Why Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-700 mb-2">✓ Original Products</h3>
              <p className="text-gray-700 dark:text-gray-400">Every product is invoice-backed and authentic. No compromises.</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-700 mb-2">✓ Expert Guidance</h3>
              <p className="text-gray-700 dark:text-gray-400">Crop and problem guidance for faster, smarter decisions.</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-700 mb-2">✓ Local Support</h3>
              <p className="text-gray-700 dark:text-gray-400">Not a distant helpline—direct contact for stock and guidance.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-100 dark:bg-gray-700 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-8 text-center">Simple Process</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-500 mb-2">1</div>
                <p className="font-semibold text-gray-800 dark:text-gray-400">Choose the crop, problem, or product</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-500 mb-2">2</div>
                <p className="font-semibold text-gray-800 dark:text-gray-400">Send a WhatsApp inquiry</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-500 mb-2">3</div>
                <p className="font-semibold text-gray-800 dark:text-gray-400">Confirm product & dosage</p>
              </div>
              <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-500 mb-2">4</div>
                <p className="font-semibold text-gray-800 dark:text-gray-400">Arrange supply</p>
              </div>
            </div>
          </div>
        </section>

        {/* Franchise Section */}
        <section className="w-[90%] m-auto mb-7">
          <div className="text-3xl font-bold p-7 text-black dark:text-gray-300 text-center">Our Franchises</div>
          <div className="rounded-2xl grid grid-cols-1 md:grid-cols-3">
            <div className="rounded-2xl m-5 bg-orange-100 dark:bg-gray-900">
              <h1 className="text-xl text-black m-5 dark:text-purple-600">Address</h1>
              <div className="text-md m-5 flex items-center"> 
                <span className="p-4 text-black dark:text-gray-400">Available at</span>
                <span className="p-3 bg-blue-800 dark:bg-blue-900 text-white dark:text-gray-300 rounded-full">Tumakuru</span>
                <a href="https://maps.app.goo.gl/C3gt9qyAPojFeFTp9" target="_blank">
                    <img src="/gps.png" className="w-12 h-12 object-cover" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl m-5 bg-orange-100 dark:bg-gray-900">
              <h1 className="text-xl m-5 text-black dark:text-purple-600">Address</h1>
              <div className="text-md m-5 flex items-center">
                <span className="p-3 text-black dark:text-gray-400">Available at</span>
                <span className="p-3 bg-blue-800 dark:bg-blue-900 text-white dark:text-gray-300 rounded-full">Chitradurga</span>
                <a href="https://maps.app.goo.gl/C3gt9qyAPojFeFTp9" target="_blank">
                    <img src="/gps.png" className="w-12 h-12 object-cover" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl m-5 bg-orange-100 dark:bg-gray-900">
              <h1 className="text-xl m-5 text-black dark:text-purple-600">Address</h1>
              <div className="text-md m-5 flex items-center">
                <span className="p-3 text-black dark:text-gray-400">Available at</span>
                <span className="p-3 bg-blue-800 dark:bg-blue-900 text-white dark:text-gray-300 rounded-full">Shivamogga</span>
                <a href="https://maps.app.goo.gl/C3gt9qyAPojFeFTp9" target="_blank">
                    <img src="/gps.png" className="w-12 h-12 object-cover" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl m-5 bg-orange-100 dark:bg-gray-900">
              <h1 className="text-xl m-5 text-black dark:text-purple-600">Address</h1>
              <div className="text-md m-5 flex items-center">
                <span className="p-3 text-black dark:text-gray-400">Available at</span>
                <span className="p-3 bg-blue-800 dark:bg-blue-900 text-white dark:text-gray-300 rounded-full">Davanagere</span>
                <a href="https://maps.app.goo.gl/C3gt9qyAPojFeFTp9" target="_blank">
                    <img src="/gps.png" className="w-12 h-12 object-cover" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
