import { Button } from "@heroui/react";
import heroImg from "@/assets/hero_bg.png"
import Link from "next/link";

const Banner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${heroImg.src})` }}
            className="min-w-100 min-h-[60vh] md:min-h-[70vh] object-cover bg-center bg-no-repeat rounded-lg shadow-2xl my-10">


            <div className="rounded-lg bg-black/50 flex items-center min-w-7xl min-h-[60vh] md:min-h-[70vh]">
                <div className="max-w-7xl mx-auto text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                        <span className="bg-linear-to-tr from-purple-700 via-green-400 to-red-700 bg-clip-text text-transparent font-extrabold">Discover</span> Your Perfect Aesthetic
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-xl text-justify text-gray-200">
                        If you are finding a place where you can match your dream and imagination tile design with reality. Find your perfect choice for tiles that will match with your imagination for your house.
                    </p>

                    <div className="flex justify-end">
                        <Link href="/all-tiles" className="w-full">
                            <Button className="bg-linear-to-tr from-purple-500 via-green-900 to-red-500 w-full">
                                Browse Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;