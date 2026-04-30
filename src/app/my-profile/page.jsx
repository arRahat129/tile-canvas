'use client'

import { UpdateUser } from '@/components/UpdateUser/UpdateUser';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();

    const user = userData.data?.user;

    return (
        <div className='min-h-[50vh]'>
            <Card className='max-w-2xl mx-auto flex flex-col items-center border my-5 p-10'>
                <div className='grid grid-cols-3'>
                    <div className='flex justify-center items-center col-span-1'>
                        <Avatar className='h-20 w-20'>
                            <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                            <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
                        </Avatar>
                    </div>

                    <div className='flex flex-col gap-1 justify-start col-span-2'>
                        <h2 className='text-xl font-bold'>{user?.name}</h2>
                        <p>Email: <span className='text-muted'>{user?.email}</span></p>
                        <p className=''>Created Time: {new Date(user?.createdAt).toLocaleString()}</p>
                    </div>
                </div>

                <UpdateUser />
            </Card>
        </div>
    );
};

export default ProfilePage;