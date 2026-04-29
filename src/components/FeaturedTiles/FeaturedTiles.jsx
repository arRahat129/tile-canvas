import { tilesDataFetch } from '@/lib/dataFetching';
import React from 'react';
import TileCard from '../TileCard/TileCard';

const FeaturedTiles = async() => {
    const tiles = await tilesDataFetch();
    // console.log("tiles", tiles);
    
    const topTiles = tiles.slice(0, 4);


    return (
        <div>
            <h1 className='text-4xl font-bold my-5'>Featured Tiles</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    topTiles.map(tile => 
                        <TileCard key={tile.id} tile={tile} />
                    )
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;