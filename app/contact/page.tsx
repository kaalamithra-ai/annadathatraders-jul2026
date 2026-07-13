'use client';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Contact(){
    return (
        <>
            <Header />
            <main className="z-0 bg-gray-100 dark:bg-gray-700">
                <h1 className="w-[100%] m-auto p-6  font-semibold text-black dark:text-gray-300 text-3xl">Contact Us</h1>
                <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
                        <h1 className="p-4 text-xl text-pink-700 font-semibold">
                            Phone Number
                        </h1>
                        <p className="text-lg text-black dark:text-gray-400 p-4">
                            +91 7349656529
                        </p>
                    </div>
                    <div className="mb-4 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
                        <h1 className="p-4 text-xl text-pink-700 font-semibold">
                            Email
                        </h1>
                        <p className="text-lg dark:text-gray-400 p-4">
                            Annadaatatraders251@gmail.com
                        </p>
                    </div>
                    <div className="mb-4 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
                        <h1 className="p-4 text-xl text-pink-700 font-semibold">
                            Working Hours
                        </h1>
                        <p className="text-lg dark:text-gray-400 p-4">
                            Open daily from 9:30 AM, please call before visiting
                        </p>
                    </div>
                    <div className="mb-4 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
                        <h1 className="p-4 text-xl text-pink-700 font-semibold">
                            Address
                        </h1>
                        <p className="text-lg dark:text-gray-400 p-4">
                            Trimurthy S Suvarna Nilaya, 4th Main Vinayaka Nagara, Tumakuru-572101
                        </p>
                    </div>
                    <div className="mb-4 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
                        <h1 className="p-4 text-xl text-pink-700 font-semibold">
                            Service Area
                        </h1>
                        <p className="text-lg dark:text-gray-400 p-4">
                            Serving farmers, retailers, and bulk buyers across Tumkur, Chitradurga, Davanagere, Shivamogga in Karnataka.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}