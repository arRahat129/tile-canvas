import TileCard from '@/components/TileCard/TileCard';
import { tilesDataFetch } from '@/lib/dataFetching';
import React from 'react';

const AllTilesPage = async () => {
    const tiles = await tilesDataFetch();

    return (
        <div className="w-full my-5 space-y-5 px-3 sm:px-4 md:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                All Tiles
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {tiles.map(tile => (
                    <TileCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    );
};

export default AllTilesPage;