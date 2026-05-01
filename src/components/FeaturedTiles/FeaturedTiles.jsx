import { tilesDataFetch } from '@/lib/dataFetching';
import React from 'react';
import TileCard from '../TileCard/TileCard';
import 'animate.css';

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
                {
                    topTiles.map((tile, i) => (
                        <div
                            key={tile.id}
                            className="animate__animated animate__fadeInUp"
                            style={{
                                animationDelay: `${Math.min(i * 0.5)}s`,
                            }}
                        >
                            <TileCard tile={tile} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;