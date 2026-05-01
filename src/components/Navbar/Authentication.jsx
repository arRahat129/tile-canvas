'use client'

import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Skeleton } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import 'animate.css';

const Authentication = () => {
    const userData = authClient.useSession();
    // console.log(userData);

    const user = userData.data?.user;
    // console.log(user);

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    const isPending = userData?.isPending;
    if (isPending) {
        return (
            <div className="flex justify-center md:justify-end w-full md:w-auto scale-95 gap-3 animate__animated animate__pulse animate__infinite">
                
                <Skeleton className="w-8 h-8 rounded-full" />


                <div className="flex flex-col gap-2">
                    <Skeleton className="w-24 h-3 rounded-md" />
                    <Skeleton className="w-32 h-3 rounded-md" />
                </div>

                <Skeleton className="w-20 h-8 rounded-md" />
            </div>
        );
    }


    return (
        <div className="flex gap-4 justify-end">
            {
                !user && <ul className="flex items-center gap-3 text-sm">
                    <Link href={"/signin"}>
                        <Button className={'bg-green-100 text-green-800 hover:bg-green-700 hover:text-green-300 animate__animated hover:animate-pulse active:animate-ping'}>SignIn</Button>
                    </Link>

                    <Link href={"/signup"}>
                        <Button className={'bg-green-800 text-green-100 hover:bg-green-500 hover:text-green-800 animate__animated hover:animate-pulse active:animate-ping'}>SignUp</Button>
                    </Link>
                </ul>
            }

            {
                user && <div className="flex items-center gap-3">
                    <Avatar size="sm">
                        <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                        <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <h1 className="font-semibold">{user?.name}</h1>
                        <p className="font-medium text-xs">{user?.email}</p>
                    </div>

                    <Button onClick={handleSignOut} size="sm" variant="danger" className={'animate__animated hover:animate-pulse active:animate-ping'}>Sign Out</Button>
                </div>
            }
        </div>
    );
};

export default Authentication;