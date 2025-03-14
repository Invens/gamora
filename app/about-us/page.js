"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header"; // Assuming you have this
import Head from "next/head";

export default function AboutUs() {
    return (
        <><Head>
        <title>About Gamora.World | Play Free Online Games Anytime, Anywhere</title>
        <meta
            name="description"
            content="Gamora.World is your ultimate destination for free online games. Play action, arcade, racing, puzzle, and multiplayer games instantly without downloads!"
        />
        <meta
            name="keywords"
            content="About Gamora.World, free online games, play games online, arcade games, multiplayer gaming, racing games, shooting games, gaming platform"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Gamora.World | Play Free Online Games Anytime, Anywhere" />
        <meta
            property="og:description"
            content="Gamora.World is your ultimate gaming hub with a massive collection of free online games. Play action, puzzle, racing, and adventure games instantly!"
        />
        <meta property="og:url" content="https://www.gamora.world/about-us" />
        <meta property="og:image" content="https://www.gamora.world/gamora-world.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Gamora.World | Play Free Online Games Anytime, Anywhere" />
        <meta
            name="twitter:description"
            content="Discover Gamora.World – the best place to play free online games. Enjoy action, puzzle, racing, and adventure games instantly without downloads!"
        />
        <meta name="twitter:image" content="https://www.gamora.world/gamora-world.png" />
        <link rel="canonical" href="https://www.gamora.world/about-us" />
    
        {/* ✅ JSON-LD Structured Data for Google Rich Results */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Gamora World",
                    "url": "https://www.gamora.world/",
                    "logo": "https://www.gamora.world/gamora.png",
                    "description": "Gamora.World is your ultimate destination for free online games. Play action, arcade, racing, puzzle, and multiplayer games instantly without downloads!",
                    "sameAs": [
                        "https://twitter.com/GamoraWorld",
                        "https://facebook.com/GamoraWorld",
                        "https://instagram.com/GamoraWorld",
                        "https://youtube.com/GamoraWorld"
                    ],
                    "foundingDate": "2024",
                    "founders": [
                        {
                            "@type": "Person",
                            "name": "Gamora World Team"
                        }
                    ],
                    "service": {
                        "@type": "Service",
                        "name": "Free Online Gaming Platform",
                        "areaServed": "Worldwide",
                        "availableChannel": {
                            "@type": "Website",
                            "url": "https://www.gamora.world/"
                        }
                    }
                }),
            }}
        />
    </Head>

        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <Header onCategoryClick={() => {}} categories={[]} /> {/* Pass empty categories or fetch them */}

            {/* Main Content */}
            <main className="px-4 sm:px-6 lg:px-8 py-10 max-w-5xl mx-auto">
                {/* Welcome Section */}
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4">
                        About Us – Gamora World
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-cyan-200">
                        Your Ultimate Free Online Gaming Hub
                    </h2>
                    <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                        At Gamora World, we are passionate about gaming. Our platform is dedicated to providing the best free online games with a seamless and enjoyable experience for players of all ages. Whether you love action-packed adventures, challenging puzzles, or thrilling racing games, you’ll find them all in one place—with no downloads, sign-ups, or interruptions.
                    </p>
                    <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
                        We believe in instant fun—which is why our games are playable directly in your browser, on any device, anytime, anywhere. Our goal is to make gaming accessible, engaging, and entertaining for everyone, whether you're a casual player looking for a quick game or a hardcore gamer seeking exciting challenges.
                    </p>
                </section>

                {/* What We Offer */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-6">What We Offer</h3>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <h4 className="text-lg font-semibold text-cyan-200 mb-4 flex items-center">
                            <span className="mr-2">🎮</span> A Massive Library of Games
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Gamora World hosts an ever-growing collection of over 1000 games, carefully selected to bring maximum fun and excitement. Our collection includes:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Arcade & Classic Games – Relive the nostalgia of legendary arcade games.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Action & Shooting Games – Test your skills with intense battles.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Racing & Car Games – Experience high-speed thrills.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Puzzle & Strategy Games – Sharpen your mind with logic challenges.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Adventure & Exploration Games – Embark on thrilling quests.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Multiplayer & .IO Games – Play with friends or compete globally.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Sports & Skill Games – Test your reflexes and athletic abilities.
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-300 text-sm">
                            Whether you’re looking for fast-paced excitement, creative challenges, or brain-teasing puzzles, we have something for everyone.
                        </p>
                    </div>
                </section>

                {/* Why Choose Gamora World */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-6">Why Choose Gamora World?</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <span className="text-cyan-300 text-2xl mr-3">🚀</span>
                            <div>
                                <h4 className="text-lg font-semibold text-cyan-200">Instant Play – No Downloads Needed</h4>
                                <p className="text-gray-300 text-sm">Forget long downloads and installations! Just click and play—no waiting, no hassle.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-cyan-300 text-2xl mr-3">🔥</span>
                            <div>
                                <h4 className="text-lg font-semibold text-cyan-200">New Games Added Regularly</h4>
                                <p className="text-gray-300 text-sm">We update our collection frequently with the latest and most exciting titles.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-cyan-300 text-2xl mr-3">🖥️</span>
                            <div>
                                <h4 className="text-lg font-semibold text-cyan-200">Cross-Platform Accessibility</h4>
                                <p className="text-gray-300 text-sm">Enjoy gaming on desktop, tablet, or smartphone—anywhere, anytime.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-cyan-300 text-2xl mr-3">🌍</span>
                            <div>
                                <h4 className="text-lg font-semibold text-cyan-200">A Global Community of Gamers</h4>
                                <p className="text-gray-300 text-sm">Join millions of players worldwide who visit Gamora World every month.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-cyan-300 text-2xl mr-3">🎭</span>
                            <div>
                                <h4 className="text-lg font-semibold text-cyan-200">Diverse Categories for Every Gamer</h4>
                                <p className="text-gray-300 text-sm">Explore fast-paced action, strategic challenges, or casual fun with categories like:</p>
                                <ul className="mt-2 space-y-1 text-sm text-gray-300">
                                    <li className="flex items-center"><span className="text-cyan-300 mr-2">🎯</span> Shooting Games</li>
                                    <li className="flex items-center"><span className="text-cyan-300 mr-2">🕹️</span> Arcade Games</li>
                                    <li className="flex items-center"><span className="text-cyan-300 mr-2">🏎️</span> Racing Games</li>
                                    <li className="flex items-center"><span className="text-cyan-300 mr-2">🧩</span> Puzzle Games</li>
                                    <li className="flex items-center"><span className="text-cyan-300 mr-2">🤝</span> Multiplayer Games</li>
                                    <li className="flex items-center"><span className="text-cyan-300 mr-2">🎉</span> Party & Casual Games</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-6">Our Mission & Vision</h3>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            At Gamora World, our mission is simple: <span className="text-cyan-200 font-semibold">To create the ultimate online gaming destination, where players can explore, compete, and have fun without limits.</span>
                        </p>
                        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                            We envision a world where gaming is accessible to everyone, regardless of their device, location, or skill level. We strive to offer a stress-free, immersive gaming experience, allowing players to escape into the world of games whenever they want.
                        </p>
                    </div>
                </section>

                {/* For Game Developers */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-6">For Game Developers</h3>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Are you a game developer looking to showcase your game to a wider audience? Gamora World provides an open platform for developers to share their creations with millions of players worldwide.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-300">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Instant exposure – Reach a massive audience without restrictions.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Seamless integration – Your games, played directly in browsers.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> Revenue opportunities – Monetize your games and grow your brand.
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-300 text-sm">
                            Join{" "}
                            <Link href="/developers" className="text-cyan-300 hover:underline">
                                Gamora for Developers
                            </Link>{" "}
                            and get your game featured on our platform!
                        </p>
                    </div>
                </section>

                {/* Join Community */}
                <section className="text-center">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-6">Join the Gamora World Community</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                        Gamora World is more than just a gaming site—it’s a global community of players, developers, and gaming enthusiasts. Whether you're here to play, create, or connect, we welcome you to be a part of our journey.
                    </p>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Stay updated with the latest games, news, and community events by following us on our social channels. Your next gaming adventure starts now!
                    </p>
                    <p className="mt-6 text-lg font-bold text-cyan-300">
                        🎮 Welcome to Gamora World – The Home of Free Online Gaming! 🚀
                    </p>
                </section>
            </main>

            {/* Footer */}
        </div>
        </>
    );
}