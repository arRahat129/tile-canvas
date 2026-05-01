import AllTiles from '@/components/AllTiles/AllTiles';
import { tilesDataFetch } from '@/lib/dataFetching';
import React from 'react';

const AllTilesPage = async () => {
    const tiles = await tilesDataFetch();

    return (
        <AllTiles tiles={tiles} />
    );
};

export default AllTilesPage;