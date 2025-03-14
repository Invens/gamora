'use client';
import Head from "next/head";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import GameCard from '@/components/GameCard';

export default function CategoryPage() {
    const { category } = useParams();
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchCategoryGames = async () => {
            try {
                const response = await fetch(`/api/games?category=${category}`);
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching category games:', error);
            }
        };
        fetchCategoryGames();
    }, [category]);

    // Format category name for SEO-friendly title
    const categoryTitle = category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

    return (
        <>
            {/* ✅ SEO Metadata for Category Pages */}
            <Head>
                <title>{categoryTitle} Games | Play Free Online {categoryTitle} Games - Gamora.World</title>
                <meta 
                    name="description" 
                    content={`Explore the best free ${categoryTitle.toLowerCase()} games online at Gamora.World. Play exciting ${categoryTitle.toLowerCase()} games with no downloads required!`} 
                />
                <meta 
                    name="keywords" 
                    content={`${categoryTitle.toLowerCase()} games, free ${categoryTitle.toLowerCase()} games, online ${categoryTitle.toLowerCase()} games, play ${categoryTitle.toLowerCase()} games`} 
                />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content={`${categoryTitle} Games | Play Free Online ${categoryTitle} Games`} />
                <meta 
                    property="og:description" 
                    content={`Play free ${categoryTitle.toLowerCase()} games online at Gamora.World. Enjoy a huge collection of the best ${categoryTitle.toLowerCase()} games with no downloads required.`} 
                />
                <meta property="og:url" content={`https://www.gamora.world/category/${category}`} />
                <meta property="og:image" content={`https://www.gamora.world/images/${category}.png`} />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${categoryTitle} Games | Play Free Online ${categoryTitle} Games`} />
                <meta 
                    name="twitter:description" 
                    content={`Discover and play top-rated ${categoryTitle.toLowerCase()} games online for free at Gamora.World.`} 
                />
                <meta name="twitter:image" content={`https://www.gamora.world/images/${category}.png`} />

                <link rel="canonical" href={`https://www.gamora.world/category/${category}`} />

                {/* ✅ JSON-LD Structured Data for Google Rich Results */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": `${categoryTitle} Games - Gamora.World`,
                            "url": `https://www.gamora.world/category/${category}`,
                            "description": `Explore a massive collection of ${categoryTitle.toLowerCase()} games online at Gamora.World. Play exciting ${categoryTitle.toLowerCase()} games with no downloads.`,
                            "publisher": {
                                "@type": "Organization",
                                "name": "Gamora World",
                                "url": "https://www.gamora.world",
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
                                "genre": categoryTitle,
                                "operatingSystem": "Web",
                                "playMode": "SinglePlayer, MultiPlayer",
                            })),
                        }),
                    }}
                />
            </Head>

            {/* ✅ Page Content */}
            <main className="p-6">
                <h1 className="text-2xl font-bold mb-4">{categoryTitle} Games</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {games.map((game) => (
                        <GameCard key={game.guid} game={game} />
                    ))}
                </div>
            </main>
        </>
    );
}
