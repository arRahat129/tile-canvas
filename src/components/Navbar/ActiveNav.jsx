"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";
import 'animate.css';

const ActiveNav = ({ navItems }) => {
    const pathname = usePathname();

    return (
        <ul className="flex items-center justify-center gap-5 text-sm md:w-auto">
            {navItems.map((item) => (
                <li key={item.id} className='hover:animate-pulse'>
                    <Link
                        href={item.path}
                        className={`transition-all duration-100 font-semibold ${pathname === item.path
                                ? "text-green-500 font-semibold border-b-2 border-green-500 pb-1"
                                : "text-gray-600 hover:text-green-700"
                            }`}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ActiveNav;