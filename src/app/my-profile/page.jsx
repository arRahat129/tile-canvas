'use client'

import { UpdateUser } from '@/components/UpdateUser/UpdateUser';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React, { useEffect } from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();
    
    useEffect(() => {
        document.title = "My Profile | Tile Canvas";
    }, []);

    const user = userData.data?.user;

    return (
        <div className='min-h-[50vh] px-3 sm:px-4 md:px-6'>
            <Card className='w-full max-w-2xl mx-auto flex flex-col items-center border my-5 p-4 sm:p-6 md:p-10 gap-5'>
                <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center'>
                    <div className='flex justify-center items-center col-span-1'>
                        <Avatar className='h-16 w-16 sm:h-20 sm:w-20'>
                            <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                            <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
                        </Avatar>
                    </div>

                    <div className='flex flex-col gap-1 text-center sm:text-start sm:col-span-2 text-sm sm:text-base'>
                        <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>{user?.name}</h2>
                        <p>Email: <span className='text-gray-500'>{user?.email}</span></p>
                        <p className='text-xs sm:text-sm text-gray-600'>Created Time: {new Date(user?.createdAt).toLocaleString()}</p>
                    </div>
                </div>

                <UpdateUser />
            </Card>
        </div>
    );
};

export default ProfilePage;