"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import AboutCard from "@/components/footerAbout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [customGames, setCustomGames] = useState([]);
    const [games, setGames] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredGames, setFilteredGames] = useState([]);
    const [isLoadingGames, setIsLoadingGames] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    // Fetch Categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("/api/games?categories=true");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    // Fetch Games
    useEffect(() => {
        const fetchGames = async () => {
            setIsLoadingGames(true);
            try {
                let url = `/api/games?page=${currentPage}`;
                if (selectedCategory) url += `&category=${selectedCategory}`;
                const response = await fetch(url);
                const data = await response.json();
                setGames(data.games || []);
                setTotalPages(data.totalPages);
                setCurrentPage(data.currentPage);
            } catch (error) {
                console.error("Error fetching games:", error);
            } finally {
                setIsLoadingGames(false);
            }
        };
        fetchGames();
    }, [currentPage, selectedCategory]);

    // Fetch Custom Games
    useEffect(() => {
        const fetchCustomGames = async () => {
            try {
                const response = await fetch("/api/games?custom=true");
                const data = await response.json();
                setCustomGames(data.games || []);
            } catch (error) {
                console.error("Error fetching custom games:", error);
            }
        };
        fetchCustomGames();
    }, []);

    // Search Function (Debounced)
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const fetchSearchResults = useCallback(
        debounce(async (term) => {
            if (!term) {
                setFilteredGames(games);
                setIsSearching(false);
                return;
            }
            setIsSearching(true);
            try {
                const response = await fetch(`/api/games?search=${encodeURIComponent(term)}`);
                const data = await response.json();
                setFilteredGames(data.games || []);
            } catch (error) {
                console.error("Error searching games:", error);
                setFilteredGames([]);
            } finally {
                setIsSearching(false);
            }
        }, 300),
        [games]
    );

    useEffect(() => {
        fetchSearchResults(searchTerm);
    }, [searchTerm, fetchSearchResults]);

    // Pagination & Navigation
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setSearchTerm("");
    };

    const goToPage = (pageNumber) => setCurrentPage(pageNumber);
    const handleSearch = (term) => setSearchTerm(term);

    return (
        <>
            <Head>
                <title>Gamora.World - Play Free Online Games | Multiplayer, Racing & More</title>
                <meta
                    name="description"
                    content="Gamora.World offers a massive selection of free online games, including multiplayer, racing, shooting, and board games. Play instantly without downloads!"
                />
                <meta
                    name="keywords"
                    content="free online games, play games online, multiplayer games, racing games, shooting games, board games, no download games"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Gamora.World - Play Free Online Games | Multiplayer, Racing & More" />
                <meta
                    property="og:description"
                    content="Gamora.World offers a massive selection of free online games, including multiplayer, racing, shooting, and board games. Play instantly without downloads!"
                />
                <meta property="og:url" content="https://www.gamora.world/" />
                <meta property="og:image" content="https://www.gamora.world/gamora-world.png" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gamora.World - Play Free Online Games" />
                <meta
                    name="twitter:description"
                    content="Gamora.World offers the best free online games, including multiplayer, racing, shooting, and board games. Play instantly without downloads!"
                />
                <meta name="twitter:image" content="https://www.gamora.world/gamora-world.png" />
                <link rel="canonical" href="https://www.gamora.world/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Gamora World",
                            "url": "https://www.gamora.world/",
                            "description": "Gamora.World offers a massive selection of free online games, including multiplayer, racing, shooting, and board games. Play instantly without downloads!",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://www.gamora.world/search?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Gamora World",
                                "logo": "https://www.gamora.world/gamora.png"
                            },
                            "hasPart": games.slice(0, 5).map((game) => ({
                                "@type": "Game",
                                "name": game.title,
                                "url": `https://www.gamora.world/game/${game.guid}`,
                                "image": game.thumb,
                                "author": {
                                    "@type": "Organization",
                                    "name": "Gamora World"
                                },
                                "applicationCategory": "Game",
                                "genre": "Online Game",
                                "operatingSystem": "Web",
                                "playMode": "SinglePlayer, MultiPlayer",
                            })),
                        }),
                    }}
                />
            </Head>

            <main className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-6">
                <Header
                    onSearch={handleSearch}
                    categories={categories}
                    onCategoryClick={handleCategoryClick}
                />

                <div className="flex flex-col lg:flex-row mt-6 gap-6">
                    {/* Sidebar - Categories (Desktop/Tablet only) */}
                    <div className="hidden lg:block lg:w-1/5 bg-black p-6 rounded-xl shadow-lg">
                        <h2 className="text-3xl text-center font-bold bg-cyan-300 text-black py-3 px-4 rounded-md mb-6">
                            Categories
                        </h2>
                        <ul className="space-y-4">
                            {categories.map((cat, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer py-2 px-4 text-xl text-center rounded-md transition-colors duration-200 ${
                                        selectedCategory === cat
                                            ? "text-cyan-300 font-bold bg-gray-800"
                                            : "text-white hover:bg-gray-800 hover:text-cyan-200"
                                    }`}
                                    onClick={() => handleCategoryClick(cat)}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-4/5">
                        {/* Featured Games Slider with Swiper */}
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">Featured Games</h2>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 40,
                                },
                            }}
                            className="mySwiper"
                        >
                            {customGames.map((game) => (
                                <SwiperSlide key={game.guid}>
                                    <Link href={`/game/${game.guid}`}>
                                        <div className="relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform h-64">
                                            <Image
                                                src={game.thumb}
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-cover rounded-md"
                                                alt={game.title}
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center text-sm py-1">
                                                {game.title}
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* More Games with Live Search */}
                        <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-4">More Games</h2>
                        {isLoadingGames || isSearching ? (
                            <div className="flex justify-center items-center h-40">
                                <div className="w-12 h-12 border-4 border-cyan-300 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {filteredGames.map((game) => (
                                    <Link key={game.guid} href={`/game/${game.guid}`}>
                                        <div className="relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
                                            <Image
                                                src={game.thumb}
                                                width={400}
                                                height={300}
                                                className="w-full h-40 object-cover rounded-md"
                                                alt={game.title}
                                            />
                                            <div className="bg-black bg-opacity-70 text-white text-center text-sm py-2">
                                                {game.title}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && !isLoadingGames && !isSearching && (
                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                {currentPage > 1 && (
                                    <button
                                        onClick={() => goToPage(currentPage - 1)}
                                        className="px-4 py-2 bg-gray-300 rounded-lg text-black"
                                    >
                                        Previous
                                    </button>
                                )}
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToPage(index + 1)}
                                        className={`px-4 py-2 rounded-lg ${
                                            currentPage === index + 1
                                                ? "bg-cyan-300 text-black"
                                                : "bg-gray-300 text-black"
                                        }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                {currentPage < totalPages && (
                                    <button
                                        onClick={() => goToPage(currentPage + 1)}
                                        className="px-4 py-2 bg-gray-300 rounded-lg text-black"
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <AboutCard/>
            </main>
        </>
    );
}