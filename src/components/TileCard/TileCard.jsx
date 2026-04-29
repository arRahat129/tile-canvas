import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TileCard = ({ tile }) => {
    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={tile.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={tile.title}
                    className='object-cover rounded-xl'
                />
                <Chip className='absolute right-2 top-2' size='sm'>
                    {
                        tile.inStock === true ? <span className='bg-green-100 py-1 px-2  rounded-full text-green-900 font-medium'>Available</span> : <span className='bg-red-100 py-1 px-2  rounded-full text-red-900 font-medium'>Not Available</span>}
                </Chip>
            </div>

            <div className='space-y-3'>
                <h2 className='font-medium'>{tile.title}</h2>
                <p>Dimention: {tile.dimensions}</p>

                <div>
                    <Button variant='outline' className={'w-full'}>
                        View Details
                    </Button>
                </div>
            </div>


        </Card>
    );
};

export default TileCard;