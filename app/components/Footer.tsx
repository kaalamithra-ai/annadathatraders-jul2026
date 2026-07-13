import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="bg-gray-700 dark:bg-gray-900 dark:text-gray-400 w-[90%] md:w-[33%] h-[53px] z-1 rounded-full flex items-center justify-between gap-2 fixed bottom-1 left-0 right-0 m-auto">
        <a href="https://wa.me/917349656529?text=Hi there, we are coming through Annadatha Traders Website" target="_blank" className=" w-[55%] md:w-[48%] p-2 flex items-center justify-start  cursor-pointer active:bg-green-700 active:text-white rounded-full">
          <img src="/whatsapp3.png" className="h-[100%] w-[25%]" />
          <span className="w-[70%] pl-1 text-[97%] sm:text-md md:w-[65%]">WhatsApp Now</span>
        </a>
        <div className="w-[1px] h-[60%] bg-white"></div>
        <a href="tel:+917349656529" target="_blank" className="w-[45%] md:w-[48%] p-2 flex items-center justify-end cursor-pointer active:bg-green-700 active:text-white rounded-full">
          <span className="w-[65%] md:w-[50%]">Call Now</span>
          <img src="/caller2.png" className="h-[100%] w-[30%] md:w-[25%]" />
          
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold dark:text-gray-300 mb-4">Annadaata Traders</h3>
            <p className="text-gray-400">
              Licensed distributor of authentic agricultural products with invoice-backed supply.
            </p>
            <div className="text-gray-400 flex flex-col mt-2">
              <span className="mb-2">Licensed Distributor</span>
              <span className="mb-2">Invoice-based Supply</span>
              <span className="mb-2">Authentic Products</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold dark:text-gray-300 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/product" className="hover:text-white">Products</Link></li>
              <li><Link href="/browse/crop" className="hover:text-white">By Crops</Link></li>
              <li><Link href="/browse/problem" className="hover:text-white">By Problem</Link></li>
              <li><Link href="/browse/category" className="hover:text-white">By Category</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold dark:text-gray-300 mb-4">Contact</h3>
            <p className="text-gray-400 mb-2 flex gap-2">
              <img src="/whatsapp.png" className="w-5 h-5" />
              <span>WhatsApp: +91 7349656529</span>
            </p>
            <p className="text-gray-400 mb-2 flex gap-2">
              <img src="/gmail.png" className="w-5 h-5" />
              <span>Email: Annadaatatraders251@gmail.com</span>
            </p>
            <p className="text-gray-400 mb-2 flex gap-2">
              <a href="https://www.youtube.com/@AnnadaataTraders" target="_blank" className="flex">
                <img src="/youtube.png" className="w-5 h-5" />
                <span className="pl-2">Youtube</span>
              </a>
            </p>
            <p className="text-gray-400 mb-2 flex gap-2">
              <a href="https://www.instagram.com/annadaata_traders?igsh=MTl0Nmd5MjVrNWRoZQ==" target="_blank" className="flex">
                <img src="/instagram.png" className="w-5 h-5" />
                <span className="pl-2">Instagram</span>
              </a>
            </p>
            <p className="text-gray-400 mb-2 flex gap-2">
              <a href="https://www.facebook.com/share/14nNqotZK8i/" target="_blank" className="flex">
                <img src="/facebook.png" className="w-5 h-5" />
                <span className="pl-2">Facebook</span>
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Annadatha Traders. All rights reserved.</p>
          <p>Powered by Kaalamithra AI Tech Solutions Private Limited</p>
        </div>
      </div><br/><br/>
    </footer>
  );
}