import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TileCard = () => {
    return (
        <Card className='border rounded-xl'>
            <div className='w-full aspect-square'>
                <Image src={photo.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={photo.title}
                    className='object-cover rounded-xl'
                />
            </div>

            <div>
                <h2 className='font-medium'>{photo.title}</h2>
            </div>

            
        </Card>
    );
};

export default TileCard;