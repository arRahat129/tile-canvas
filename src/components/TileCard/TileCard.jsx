import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TileCard = ({ tile }) => {
    return (
        <Card className="border rounded-xl h-full flex flex-col overflow-hidden">

            <div className="relative w-full aspect-square">
                <Image
                    src={tile.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={tile.title}
                    className="object-cover"
                />

                <Chip
                    size="sm"
                    className={`absolute right-2 top-2 rounded-full font-medium text-[10px] sm:text-xs md:text-sm ${tile.inStock
                            ? "bg-green-100 text-green-900"
                            : "bg-red-100 text-red-900"
                        }`}
                >
                    {tile.inStock ? "Available" : "Not Available"}
                </Chip>
            </div>

            <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 flex flex-col flex-1">

                <h2 className="font-semibold text-sm sm:text-base md:text-lg line-clamp-1">
                    {tile.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-600">
                    Dimension: {tile.dimensions}
                </p>

                <div className="mt-auto">
                    <Link href={`/all-tiles/${tile.id}`}>
                        <Button variant="outline" className="w-full text-xs sm:text-sm">
                            View Details
                        </Button>
                    </Link>
                </div>

            </div>

        </Card>
    );
};

export default TileCard;