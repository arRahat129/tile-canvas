import { tilesDataFetch } from '@/lib/dataFetching';
import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = async () => {
    const tiles = await tilesDataFetch();
    const newArrival = tiles.filter(tile => tile.inStock === true);

    return (
        <section className="w-full bg-gray-200 rounded-xl py-3 px-4 sm:py-4 overflow-hidden">

            <div className="flex items-center gap-3 sm:gap-4">

                <Button className="bg-red-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 shrink-0">
                    Product Updates
                </Button>

                <div className="flex-1 overflow-hidden">
                    <Marquee speed={65} pauseOnHover gradient={false}>
                        {newArrival.map((tile) => (
                            <span
                                key={tile.id}
                                className="mx-6 sm:mx-10 text-xs sm:text-sm md:text-base whitespace-nowrap"
                            >
                                <span className="text-red-600 font-medium">New Arrivals:</span> <span className="font-semibold">{tile.title}</span> | Weekly Feature: Modern Geometric Patterns | Join the Community...
                            </span>
                        ))}
                    </Marquee>
                </div>

            </div>
        </section>
    );
};

export default MarqueePage;