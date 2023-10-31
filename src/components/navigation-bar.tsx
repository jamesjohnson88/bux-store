"use client"
import React, { useState } from 'react';
import useTokenStore from "@/stores/usage-token-store";

interface NavItem {
    label: string;
    links: string[];
}

interface NavigationBarProps {
    items: NavItem[];
}

const fontSizes = ['text-base', 'text-lg', 'really-big', 'really-really-big', 'fucking-massive', 'yer-ma'];

const NavigationBar: React.FC<NavigationBarProps> = ({ items }) => {
    
    const tokenState = useTokenStore();
    const [fontSizeIndex, setFontSizeIndex] = useState(0);

    const increaseFontSize = () => {
        if (fontSizeIndex < fontSizes.length - 1) {
            setFontSizeIndex(fontSizeIndex + 1);
        } else {
            setFontSizeIndex(0);
        }
        tokenState.removeTokens(1);
    };

    return (
        <nav className={`bg-blue-900 text-white p-4`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Left-side Navigation Items */}
                <div className="flex space-x-4">
                    {items.map((item, index) => (
                        <div key={index} className="relative group">
                            <button className="hover:text-gray-300">
                                {item.label} &#9662;
                            </button>
                            <ul className="hidden absolute left-0 mt-2 space-y-2 bg-blue-900 text-white group-hover:block">
                                {item.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link}>{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Right-side Font Size Toggle */}
                <div className="flex items-center">
                    <button
                        className={`text-gray-300 ${fontSizes[fontSizeIndex]}`}
                        onClick={increaseFontSize}
                    >
                        Increase Font Size
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
