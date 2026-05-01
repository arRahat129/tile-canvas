import { tilesDataFetch } from '@/lib/dataFetching';
import React from 'react';
import TileCard from '../TileCard/TileCard';

const FeaturedTiles = async () => {
    const tiles = await tilesDataFetch();
    // console.log("tiles", tiles);

    const topTiles = tiles.slice(0, 4);


    return (
        <div className="space-y-5">
            <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                    Featured Tiles
                </h1>

                <p className="text-sm text-gray-500">
                    Handpicked designs for your dream space
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {topTiles.map(tile => (
                    <TileCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedTiles;