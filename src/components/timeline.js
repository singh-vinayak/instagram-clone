import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useFollowedUsersPhotos from '../hooks/use-followed-users-photos';

export default function Timeline() {
    const { photos } = useFollowedUsersPhotos();

    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={4} width={640} height={500} className="mb-5" />
            ) : (
                <p className="text-center text-2xl">Follow people to see photos!</p>
            )}
        </div>
    );
}