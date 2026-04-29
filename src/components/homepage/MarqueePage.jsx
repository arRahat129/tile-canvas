import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = () => {
    return (
        <div className='flex justify-center items-center gap-4 bg-gray-200 py-4 px-2 container mx-auto'>
            <Button className='bg-red-500 rounded-lg text-white'>Product Updates</Button>
            <Marquee speed={100} pauseOnHover>
                New Arrivals: [Tile Name] | Weekly Feature: Modern Geometric Patterns | Join the Community...
            </Marquee>
        </div>
    );
};

export default MarqueePage;