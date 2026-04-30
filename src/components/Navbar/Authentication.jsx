'use client'

import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Skeleton } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

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
            <div className="flex gap-4 justify-end items-center">
                
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
                !user && <ul className="flex items-center gap-5 text-sm">
                    <Link href={"/signin"}>
                        <Button>SignIn</Button>
                    </Link>

                    <Link href={"/signup"}>
                        <Button>SignUp</Button>
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

                    <Button onClick={handleSignOut} size="sm" variant="danger">Sign Out</Button>
                </div>
            }
        </div>
    );
};

export default Authentication;