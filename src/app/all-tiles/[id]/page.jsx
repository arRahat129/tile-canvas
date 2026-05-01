import { tilesDataFetch } from '@/lib/dataFetching';
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'animate.css';

export async function generateMetadata({ params }) {
    const { id } = await params;

    const tiles = await tilesDataFetch();
    // console.log("tiles", tiles);
    
    const singleTile = tiles.find(tile => tile.id == id);
    // console.log("singleTile", singleTile);

    if (!singleTile) {
        return {
            title: "Tile Not Found | Tile Canvas",
        };
    }

    return {
        title: `${singleTile.title} | Tile Canvas`,
        description: singleTile.description,
    };
}

const TileDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const tiles = await tilesDataFetch();
    // console.log(tiles);

    const singleTile = tiles.find(tile => tile.id == id);
    // console.log(singleTile);

    if (!singleTile) {
        return <div className="text-center py-20">Tile not found</div>;
    }

    // Title, Creator, Style Description, and Tags (e.g., "Minimalist", "Blue")
    const { image, title, creator, styleDescription, tags, dimensions, price, description, category, material, inStock, currency } = singleTile;

    return (
        <div className='w-full max-w-7xl mx-auto border rounded-2xl my-6 sm:my-8 md:my-10 p-4 sm:p-6 md:p-10 space-y-6'>
            <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold text-center'>Details of: <span className='font-bold'>{title} Tile</span></h1>

            <Card className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                <div className='relative w-full aspect-square'>
                    <Image src={image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={title}
                        className='object-cover rounded-xl'
                    />
                    <Chip className={`absolute left-2 top-2 rounded-full font-medium text-xs sm:text-sm ${inStock === true
                        ? "bg-green-100 text-green-900 animate__animated animate__pulse animate__infinite"
                        : "bg-red-100 text-red-900"}`} size='lg'>
                        {
                            inStock === true ? "Available" : "Not Available"}
                    </Chip>
                </div>

                <div className='space-y-4 sm:space-y-5 text-sm sm:text-base font-medium flex flex-col justify-center'>
                    <div className='space-y-1'>
                        <p className='text-gray-700'>{description}</p>
                        <p className='text-base sm:text-lg'>Created By: <span className='font-semibold'>{creator}</span></p>
                    </div>

                    <div className='space-y-1'>
                        <p>Category: {category}</p>
                        <p>Dimensions: {dimensions}</p>
                        <p>Material: {material}</p>
                        <p className='text-gray-600'>{styleDescription}</p>
                    </div>

                    <div className={'flex flex-wrap gap-2'}>
                        {
                            tags.map((tag, i) => <Button key={i} size='sm' className={'bg-green-50 text-green-800 font-medium self-center'}>{tag}</Button>)
                        }
                    </div>

                    <div>
                        <p className='font-bold text-lg sm:text-xl'>Price: <span className='text-xl sm:text-2xl'>{price} {currency}</span></p>
                    </div>
                </div>
            </Card>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5'>
                <Link href={'/all-tiles'} className='w-full'>
                    <Button className={'bg-green-50 text-green-900 font-bold w-full hover:border hover:border-green-800 animate__animated hover:animate-pulse active:animate-bounce'}>All Tiles</Button>
                </Link>

                <Link href={'/'} className='w-full'>
                    <Button className={'bg-blue-50 text-blue-900 font-bold w-full hover:border hover:border-blue-800 animate__animated hover:animate-pulse active:animate-bounce'}>Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default TileDetailsPage;