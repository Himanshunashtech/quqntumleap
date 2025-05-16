import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NeonAuthPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden relative">
            {/* Neon Wormhole */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-purple-900 blur-3xl opacity-60 animate-spin-slow"
                initial={{ scale: 0.8, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ zIndex: 1 }}
            ></motion.div>
            
            {/* Auth Form Container */}
            <div className="relative z-10 bg-gradient-to-tr from-blue-800 to-blue-600 shadow-2xl rounded-3xl p-10 w-[90%] max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-300 drop-shadow-lg mb-6">Welcome Back</h2>
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 bg-blue-900 text-blue-200 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 bg-blue-900 text-blue-200 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-700 text-white rounded-xl shadow-lg hover:bg-purple-800 transition-all duration-300"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center text-blue-300 mt-4">
                   go back to home page <Link to="/" className="text-purple-400 hover:text-purple-500 underline">Home</Link>
                </p>
            </div>
        </div>
    );
};

export default NeonAuthPage;
