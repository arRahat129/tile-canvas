import AllTiles from '@/components/AllTiles/AllTiles';
import { tilesDataFetch } from '@/lib/dataFetching';
import React from 'react';

export const metadata = {
  title: "All Tiles | Tile Canvas",
  description: "All tiles are placed here",
};

const AllTilesPage = async () => {
    const tiles = await tilesDataFetch();

    return (
        <AllTiles tiles={tiles} />
    );
};

export default AllTilesPage;