import React,{ useEffect} from 'react';
import Header from '../components/header'

export default function NotFound() {
    useEffect(() => {
        document.title = '404 - Not Found';
    });

    return (
        <div className="bg-gray-200">
            <Header />
            <div className="flex mx-auto max-w-screen-lg h-screen justify-center">
                <p className="flex text-center items-center text-2xl">Not Found!</p>
            </div>
        </div>
    )
}