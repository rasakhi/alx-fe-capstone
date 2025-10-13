import React from "react";

export default function Footer() {
    return (
       <footer className="bg-white border-t mt-12">
            <div className="container-max py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Michael Achumba — Currency Converter Project
            </div>
        </footer> 
    );
}