'use client';

import React, { useState } from 'react';

interface NavItem {
    label: string;
    links: string[];
}

interface NavigationBarProps {
    items: NavItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ items }) => {
    const [largeFont, setLargeFont] = useState(false);

    const toggleFontSize = () => {
        setLargeFont(!largeFont);
    };

    return (
        <nav className={`bg-gray-800 text-white p-4`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Left-side Navigation Items */}
                <div className="flex space-x-4">
                    { items.map((item, index) => (
                        <div key={index} className="relative group">
                            <button className="hover:text-gray-300">
                                {item.label} &#9662;
                            </button>
                            <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block">
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
                        className={`${largeFont ? 'text-sm' : 'text-m'} text-gray-300`}
                        onClick={toggleFontSize}
                    >
                        {largeFont ? 'Increase Font Size' : 'Decrease Font Size'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
