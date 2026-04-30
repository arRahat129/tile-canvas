import { tilesDataFetch } from '@/lib/dataFetching';
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TileDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const tiles = await tilesDataFetch();
    // console.log(tiles);

    const singleTile = tiles.find(tile => tile.id == id);
    // console.log(singleTile);

    // Title, Creator, Style Description, and Tags (e.g., "Minimalist", "Blue")
    const { image, title, creator, styleDescription, tags, dimensions, price, description, category, material, inStock, currency } = singleTile;

    return (
        <div className='max-w-7xl mx-auto border rounded-2xl my-10 p-10'>
            <h1 className='text-4xl font-semibold text-center'>Details of: <span className='font-bold'>{title} Tile</span></h1>

            <Card className='grid grid-cols-2 gap-5 max-w-7xl'>
                <div className='relative w-full aspect-square'>
                    <Image src={image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={title}
                        className='object-cover rounded-xl'
                    />
                    <Chip className={`absolute left-2 top-2 rounded-full font-medium ${inStock === true ? "bg-green-100 px-2 py-1  text-green-900" : "bg-red-100 text-red-900"}`}  size='lg'>
                        {
                            inStock === true ? "Available" : "Not Available"}
                    </Chip>
                </div>

                <div className='space-y-5 font-medium'>
                    <div className='space-y-1'>
                        <p className=''>{description}</p>
                        <p className='text-lg'>Created By: {creator}</p>
                    </div>

                    <div className='space-y-1'>
                        <p>Category: {category}</p>
                        <p>Dimensions: {dimensions}</p>
                        <p>Material: {material}</p>
                        <p>{styleDescription}</p>
                    </div>

                    <div className={`grid grid-cols-${tags.length} gap-2`}>
                        {
                            tags.map((tag, i) => <Button key={i} className={'bg-green-50 text-green-800 font-medium'}>{tag}</Button>)
                        }
                    </div>

                    <div>
                        <p className='font-bold text-xl'>Price: <span className='text-2xl'>{price} {currency}</span></p>
                    </div>
                </div>
            </Card>

            <div className='grid grid-cols-2 gap-5 my-5'>
                <Link href={'/all-tiles'} className='w-full'>
                     <Button className={'bg-green-50 text-green-900 font-bold w-full'}>All Times</Button>   
                </Link>

                <Link href={'/'} className='w-full'>
                     <Button className={'bg-blue-50 text-blue-900 font-bold w-full'}>Home</Button>   
                </Link>
            </div>
        </div>
    );
};

export default TileDetailsPage;