import { tilesDataFetch } from '@/lib/dataFetching';
import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = async() => {
    const tiles = await tilesDataFetch();
    const newArrival = tiles.filter(tile => tile.inStock === true);

    return (
        <div className='flex justify-center items-center gap-4 bg-gray-200 py-4 px-2 container mx-auto'>
            <Button className='bg-red-500 rounded-lg text-white'>Product Updates</Button>
            <Marquee speed={100} pauseOnHover>
                {
                    newArrival.map((elem, i) => 
                        <p key={i} className='mr-10'><span className='text-red-600'>New Arrivals:</span> <span className='font-semibold'>{elem.title}</span> | Weekly Feature: Modern Geometric Patterns | Join the Community...</p>
                    )
                }
            </Marquee>
        </div>
    );
};

export default MarqueePage;