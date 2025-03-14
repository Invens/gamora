"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ onCategoryClick, categories }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!searchTerm.trim()) {
            setSearchResults([]);
            return;
        }

        const fetchSearchResults = async () => {
            setIsSearching(true);
            try {
                const response = await fetch(`/api/games?search=${encodeURIComponent(searchTerm.trim())}`);
                const data = await response.json();
                setSearchResults(data.games || []);
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setIsSearching(false);
            }
        };

        const delayDebounce = setTimeout(fetchSearchResults, 300);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <header className="bg-black p-4 rounded-lg relative">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="w-1/5 md:w-1/5 flex justify-start">
                    <Link href="/">
                        <Image
                            src="/gamora.png"
                            alt="Logo"
                            width={250} // Increased base width for mobile
                            height={50} // Increased base height for mobile
                            priority
                            className="max-w-full h-auto md:w-[300px] md:h-[60px]" // Larger on desktop
                        />
                    </Link>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex flex-grow items-center gap-6">
                    {/* Search Bar */}
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Search Games..."
                            className="w-full px-6 py-4 rounded-lg bg-cyan-300 text-black placeholder:text-xl placeholder:font-bold"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        {isSearching && (
                            <div className="absolute top-14 right-4 text-white">🔍 Searching...</div>
                        )}
                        {searchResults.length > 0 && (
                            <div className="absolute top-16 left-0 w-full bg-gray-800 rounded-lg shadow-lg max-h-72 overflow-y-auto z-50">
                                {searchResults.map((game) => (
                                    <Link
                                        key={game.guid}
                                        href={`/game/${game.guid}`}
                                        onClick={() => setSearchTerm("")}
                                    >
                                        <div className="flex items-center p-3 hover:bg-gray-700 cursor-pointer">
                                            <Image
                                                src={game.thumb}
                                                width={50}
                                                height={50}
                                                className="rounded-md mr-3"
                                                alt={game.title}
                                            />
                                            <div>
                                                <p className="text-white font-bold">{game.title}</p>
                                                <p className="text-gray-400 text-sm">
                                                    {game.description.length > 50
                                                        ? game.description.slice(0, 50) + "..."
                                                        : game.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Subscribe Button */}
                    <button className="bg-cyan-300 px-6 py-2 rounded-lg text-black text-xl font-bold hover:bg-cyan-400 transition">
                        SUBSCRIBE
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    {/* Search Bar in Hamburger */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Games..."
                            className="w-full px-4 py-2 rounded-lg bg-cyan-300 text-black placeholder:text-lg placeholder:font-bold"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        {isSearching && (
                            <div className="absolute top-12 right-4 text-white">🔍 Searching...</div>
                        )}
                        {searchResults.length > 0 && (
                            <div className="mt-2 bg-gray-800 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                {searchResults.map((game) => (
                                    <Link
                                        key={game.guid}
                                        href={`/game/${game.guid}`}
                                        onClick={() => {
                                            setSearchTerm("");
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        <div className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
                                            <Image
                                                src={game.thumb}
                                                width={40}
                                                height={40}
                                                className="rounded-md mr-2"
                                                alt={game.title}
                                            />
                                            <div>
                                                <p className="text-white font-bold text-sm">{game.title}</p>
                                                <p className="text-gray-400 text-xs">
                                                    {game.description.length > 30
                                                        ? game.description.slice(0, 30) + "..."
                                                        : game.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Categories in Hamburger */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2 text-cyan-300">Categories</h3>
                        <ul className="space-y-2">
                            {categories.map((cat, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer text-white hover:text-cyan-300 text-sm"
                                    onClick={() => {
                                        onCategoryClick(cat);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe Button in Hamburger */}
                    <button className="w-full bg-cyan-300 px-6 py-2 rounded-lg text-black text-lg font-bold hover:bg-cyan-400 transition">
                        SUBSCRIBE
                    </button>
                </div>
            )}
        </header>
    );
}