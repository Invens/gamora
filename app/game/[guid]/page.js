"use client";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header"; // Adjust path as needed

export default function GamePage() {
    const { guid } = useParams();
    const [game, setGame] = useState(null);
    const [relatedGames, setRelatedGames] = useState([]);
    const iframeRef = useRef(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await fetch(`/api/games?guid=${guid}`);
                setGame(await response.json());
            } catch (error) {
                console.error("Error fetching game:", error);
            }
        };
        const fetchRelatedGames = async () => {
            try {
                const response = await fetch(`/api/games?related=${guid}`);
                setRelatedGames(await response.json());
            } catch (error) {
                console.error("Error fetching related games:", error);
            }
        };
        fetchGame();
        fetchRelatedGames();
    }, [guid]);

    const toggleFullscreen = () => {
        const iframe = iframeRef.current;
        if (iframe) {
            if (!document.fullscreenElement) {
                iframe.requestFullscreen().catch((err) => {
                    console.error("Error attempting to enable fullscreen:", err);
                });
            } else {
                document.exitFullscreen();
            }
        }
    };

    if (!game) return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-xl">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* ✅ Dynamic SEO Meta Tags */}
            <Head>
                <title>{`${game.title} - Play Online for Free | Gamora.World`}</title>
                <meta name="description" content={game.description || `Play ${game.title} for free online at Gamora.World! Enjoy ${game.title} directly in your browser with no downloads required.`} />
                <meta name="keywords" content={`${game.tags}, play online games, free online games, best games`} />

                {/* ✅ Open Graph Meta Tags (Facebook & LinkedIn) */}
                <meta property="og:title" content={`${game.title} - Play Free Online`} />
                <meta property="og:description" content={game.description} />
                <meta property="og:image" content={game.thumb} />
                <meta property="og:url" content={`https://gamora.world/game/${guid}`} />
                <meta property="og:type" content="game" />

                {/* ✅ Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${game.title} - Play Free Online`} />
                <meta name="twitter:description" content={game.description} />
                <meta name="twitter:image" content={game.thumb} />

                {/* ✅ JSON-LD Schema Markup for Google SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoGame",
                        "name": game.title,
                        "description": game.description,
                        "image": game.thumb,
                        "genre": game.category,
                        "playMode": "SinglePlayer",
                        "applicationCategory": "Game",
                        "operatingSystem": "Web",
                        "url": `https://gamora.world/game/${guid}`,
                        "offers": {
                            "@type": "Offer",
                            "price": "0.00",
                            "priceCurrency": "USD"
                        }
                    })}
                </script>
            </Head>

            {/* ✅ Header */}
            <Header />

            {/* ✅ Breadcrumbs for SEO */}
            <nav className="text-sm text-gray-400 py-4 px-6">
                <Link href="/" className="hover:text-cyan-300">Home</Link> &gt;
                <Link href="/games" className="hover:text-cyan-300 ml-2">Games</Link> &gt;
                <span className="text-cyan-300 ml-2">{game.title}</span>
            </nav>

            {/* ✅ Main Content */}
            <main className="p-6 max-w-7xl mx-auto">
                {/* ✅ Game Iframe with Fullscreen Button */}
                <section className="mb-8 relative">
                    <div className="bg-black rounded-lg overflow-hidden shadow-lg relative">
                        <iframe
                            ref={iframeRef}
                            src={game.link}
                            className="w-full h-[400px] md:h-[600px] lg:h-[700px]"
                            allowFullScreen
                            title={game.title}
                        ></iframe>
                        <button
                            onClick={toggleFullscreen}
                            className="absolute top-4 right-4 bg-cyan-300 text-black p-2 rounded-full hover:bg-cyan-400 transition-colors duration-200"
                            title="Toggle Fullscreen"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"
                                />
                            </svg>
                        </button>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-cyan-300 mt-4 text-center">
                        {game.title}
                    </h1>
                </section>

                {/* ✅ Related Games Section */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">Related Games</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {relatedGames.map((g) => (
                            <Link
                                key={g.guid}
                                href={`/game/${g.guid}`}
                                className="group relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
                            >
                                <Image
                                    src={g.thumb}
                                    width={200}
                                    height={200}
                                    className="w-full h-40 object-cover rounded-md"
                                    alt={g.title || "Related Game"}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center text-sm py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    {g.title || "Untitled"}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
