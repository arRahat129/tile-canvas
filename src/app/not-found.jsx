import Link from 'next/link';
import React from 'react';

const NotFoundGlobal = () => {
    return (
        <div
            className="min-h-screen min-w-[75vw] flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/App-Error.png')",
            }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-7xl md:text-8xl font-bold mb-4">Error!!</h1>
                <p className="text-xl md:text-2xl mb-6">
                    Oops! can not find the person.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Go Home */}
                    <Link
                        href="/"
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition duration-300"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundGlobal;