'use client'

import React, { useState } from 'react';
import TileCard from '../TileCard/TileCard';
import "animate.css"
import { Card, Input, Label } from '@heroui/react';

const AllTiles = ({ tiles }) => {
    const [search, setSearch] = useState("");

    const filteredTiles = tiles.filter(tile => tile.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="w-full my-5 space-y-5 px-3 sm:px-4 md:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                All Tiles
            </h1>

            {/* <Label>Search Tiles:</Label> */}
            <Input
                placeholder="Search tiles by name/title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-2xl px-5"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {
                    filteredTiles.length > 0
                        ? (
                            filteredTiles.map((tile, i) => (
                                <div
                                    key={tile.id}
                                    className="animate__animated animate__fadeInUp"
                                    style={{
                                        animationDelay: `${Math.min(i * 0.1, 0.5)}s`,
                                    }}
                                >
                                    <TileCard tile={tile} />
                                </div>
                            ))
                        )
                        : (
                            <div className='flex justify-center items-center w-screen'>
                                <Card className="text-gray-500 flex flex-col gap-5 justify-center items-center w-[50vw] h-[50vh] border mt-10">
                                    <p className='text-5xl'>No tiles found 👀!!</p>
                                    <p className='text-2xl'>Are you searching with the right title??</p>
                                </Card>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default AllTiles;