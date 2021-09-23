import React from 'react';
import Skeleton from 'react-loading-skeleton';

// future task 1): add onhover with the comments length & add the likes
// future task 2): add a lightbox where you can add comments!

export default function Photos({ photos }) {
    return (
        <div className="h-16 border-t border-gray mt-12 pt-4">
            <div className="grid grid-cols-3 gap-4 mt-4 mb-12">
                {!photos ? (
                    <>
                        {[...new Array(9)].map((_, index) => (
                            <Skeleton key={index} count={1} width={320} height={400} />
                        ))}
                    </>
                ) : photos && photos.length > 0 ? (
                    photos && photos.map((photo) => (
                        <div key={photo.docId} className="relative group bg-black cursor-pointer">
                                <img src={photo.imageSrc} alt={photo.caption} />
                                <div className="absolute top-0 opacity-0 hover:opacity-80 flex justify-center items-center w-full h-full text-gray-400 text-2xl font-bold">
                                <svg
                                    className={`w-16 fill-current text-gray-400 '
                                        `}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="gray"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    tabIndex={0}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                                : {photo.likes.length}
                                <svg
                                    className="w-16 fill-current text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    tabIndex={0}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                                : {photo.comments.length}
                                </div>
                            </div>
                    ))
                ) : null}
            </div>
            
            {!photos || (photos && photos.length === 0 && <p className="text-center text-2xl">No Photos Yet</p>)}
        </div>
    );
}