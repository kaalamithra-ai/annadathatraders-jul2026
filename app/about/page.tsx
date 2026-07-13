'use client';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Annadaata Traders</h1>

        <div className="space-y-8">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We provide farmers, retailers, and bulk buyers with trusted, authentic agricultural pesticides backed by expert guidance. Our goal is to help you make informed decisions about crop protection with accurate product information, proper dosage guidance, and transparent supply practices.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Annadatha Traders</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">✓ Authentic Products</h3>
                <p className="text-gray-700">
                  Every product comes with complete invoice documentation and batch traceability. No counterfeits, guaranteed.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">✓ Expert Guidance</h3>
                <p className="text-gray-700">
                  Our team provides practical crop and problem-specific guidance to help you choose the right product.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">✓ Local Support</h3>
                <p className="text-gray-700">
                  Direct contact channels via WhatsApp and phone. No distant helplines&mdash;we're here to help.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">✓ Reliable Supply</h3>
                <p className="text-gray-700">Licensed distributor with consistent stock availability and timely delivery options.</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">✓ Problem-First Approach</h3>
                <p className="text-gray-700">Start with your crop problem, not the product. We help you find the right solution.</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">✓ Dosage Support</h3>
                <p className="text-gray-700">Clear guidance on application rates, timing, and methods&mdash;no guessing from packaging.</p>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to You</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Accuracy First</h3>
                  <p className="text-gray-600">All product information is verified and updated regularly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🔒</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Transparency</h3>
                  <p className="text-gray-600">Complete invoice documentation and batch traceability for every purchase.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Accessible Support</h3>
                  <p className="text-gray-600">Easy contact through WhatsApp, calls, or inquiry forms&mdash;whenever you need us.</p>
                </div>
              </div>
            </div>
          </div>

          {/* How We Work */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Work</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Browse & Explore</h3>
                  <p className="text-gray-600">Find products by crop, problem, or category. Read detailed descriptions and features.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Send Inquiry</h3>
                  <p className="text-gray-600">Use WhatsApp, phone, or our inquiry form to request more information or check stock.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Get Guidance</h3>
                  <p className="text-gray-600">Our team confirms product fit, dosage, and application timing based on your needs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Arrange Supply</h3>
                  <p className="text-gray-600">We arrange delivery with complete invoice documentation for your records.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">Have questions? Want to place an order? We're just a message or call away!</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img src="/whatsapp.png" className="h-10 w-10" alt="WhatsApp" />
                <p className="font-semibold mb-1">WhatsApp</p>
                <p className="text-green-100">+91 7349656529</p>
              </div>

              <div>
                <p className="font-semibold mb-1">
                  <span className="w-13 h-13">
                    <img src="/gmail.png" className="w-10 h-10" alt="Email" />
                  </span>{' '}
                  Email
                </p>
                <p className="text-green-100">Annadaatatraders251@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}