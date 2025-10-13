import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-white border-b">
            <div className="container-max flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">CC</div>
                    <span className="text-lg font-semibold">Currency Converter</span>
                </div>
                <div className="hidden sm:flex gap-4">
                    <a href="#" className="text-sm hover:text-primary-500">Home</a>
                    <a href="#" className="text-sm hover:text-primary-500">About</a>
                    <a href="#" className="text-sm hover:text-primary-500">Contact</a>
                </div>
            </div>
        </nav>
    );
}