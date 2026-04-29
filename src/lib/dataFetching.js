export const tilesDataFetch = async () => {
    const res = await fetch('https://tile-canvas-server.onrender.com/products');
    const tiles = await res.json();
    // console.log(tiles);

    return tiles;
}