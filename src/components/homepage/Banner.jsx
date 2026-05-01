import { Button } from "@heroui/react";
import heroImg from "@/assets/hero_bg.png";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="relative w-full rounded-xl overflow-hidden my-10">

            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImg.src})` }}
                />
            </div>

            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 flex items-center min-h-[60vh] md:min-h-[75vh]">
                <div className="w-full max-w-7xl mx-auto px-4 flex justify-center items-center">

                    <div className="max-w-xl text-white flex flex-col gap-4">

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                            <span className="bg-linear-to-tr from-purple-400 via-green-300 to-red-400 bg-clip-text text-transparent">
                                Discover
                            </span>{" "}
                            Your Perfect Aesthetic
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-200">
                            If you are finding a place where you can match your dream and imagination tile design with reality. Find your perfect choice for tiles that will match with your imagination for your house.
                        </p>

                        <Link href="/all-tiles">
                            <Button className="bg-linear-to-tr from-purple-500 via-green-700 to-red-500 px-6 py-2">
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