"use client";
import Link from "next/link";

export default function AboutCard() {
    return (
        <div className="bg-black text-white p-6 rounded-xl shadow-lg mt-2 border border-gray-800">
            {/* Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4 text-center">
                About Gamora World
            </h2>

            {/* Section 1: Play Free Online Games */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-200">
                    Play Free Online Games Instantly
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                    Gamora World brings you the best free online games, offering a fun and seamless experience whether you’re playing alone or with friends. Enjoy instant play without downloads, logins, or annoying pop-ups. Our games are accessible on desktop, tablet, and mobile, so you can play anytime, anywhere. Every month, millions of players from around the world visit Gamora World to dive into their favorite games.
                </p>
            </div>

            {/* Section 2: Game Collection */}
            <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-200">
                    Our Game Collection
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                    We bring you a wide selection of games, with new titles added regularly. From popular hits like <span className="font-bold">Subway Surfers</span>, <span className="font-bold">Temple Run 2</span>, and <span className="font-bold">Stickman Hook</span> to classic favorites such as <span className="font-bold">Moto X3M</span>, <span className="font-bold">Smash Karts</span>, and <span className="font-bold">2048</span>, there’s something for everyone. Our growing collection includes over 1000 games, spanning a variety of categories.
                </p>
            </div>

            {/* Section 3: Start Playing */}
            <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-200">
                    Start Playing Now!
                </h3>
                <p className="text-gray-300 text-sm">
                    Not sure what to play? Explore our homepage or choose from some of our most popular categories:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                    <li className="flex items-center">
                        <span className="text-cyan-300 mr-2">✅</span> Puzzle Games
                    </li>
                    <li className="flex items-center">
                        <span className="text-cyan-300 mr-2">✅</span> .io Games
                    </li>
                    <li className="flex items-center">
                        <span className="text-cyan-300 mr-2">✅</span> 2 Player Games
                    </li>
                    <li className="flex items-center">
                        <span className="text-cyan-300 mr-2">✅</span> Car Games
                    </li>
                    <li className="flex items-center">
                        <span className="text-cyan-300 mr-2">✅</span> Shooting Games
                    </li>
                </ul>
            </div>

            {/* Section 4: What is Gamora World */}
            <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-200">
                    What is Gamora World?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                    Gamora World is dedicated to creating the ultimate online gaming hub—free and open for all. Our mission is to provide an immersive and engaging gaming experience for players of all ages. If you’re a game developer looking to bring your game to a wider audience, we welcome you to collaborate with us. Discover more on our{" "}
                    <Link href="/developers" className="text-cyan-300 hover:underline">
                        Gamora for Developers
                    </Link>{" "}
                    page.
                </p>
            </div>

            {/* Call to Action */}
            <div className="mt-6 text-center">
                <p className="text-lg font-bold text-cyan-300">
                    🎮 Join Gamora World today and start playing! 🚀
                </p>
            </div>
        </div>
    );
}