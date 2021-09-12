import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Login() {
    return (
        <div className="container flex mx-auto max-w-screen-md h-screen items-center">
            <div className="flex w-3/5">
                <img src='/images/iphone-with-profile.jpg' alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center p-4 border mb-4 bg-white">
                    <h1 className="flex justify-center w-full">
                        <img src='/images/logo.png' alt="Instagram" className="mt-2 mb-4 w-6/12" />
                    </h1>

                    <form method="POST">
                        <input
                            aria-label="Enter your email address"
                            className="text-sm w-full mr-3 py-5 px-4 mb-2 h-2 border rounded"
                            type="text"
                            placeholder="Email address"
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm w-full mr-3 py-5 px-4 mb-2 h-2 border rounded"
                            type="password"
                            placeholder="Password"
                        />
                        <button
                            type="submit"
                            className={`bg-blue-500 w-full text-white font-bold rounded h-8`}
                        >
                            Log In
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center p-4 bg-white w-full border">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <Link to={ROUTES.SIGN_UP} className="font-bold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}