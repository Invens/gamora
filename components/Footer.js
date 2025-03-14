"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8 mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div className="space-y-4">
                    <Link href="/">
                        <Image
                            src="/gamora.png"
                            alt="Logo"
                            width={200}
                            height={40}
                            className="max-w-full h-auto"
                        />
                    </Link>
                    <p className="text-gray-400 text-sm">
                        Your ultimate gaming destination. Explore a vast collection of games, from classics to the latest releases, all in one place.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold text-cyan-300 mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                About Us
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/games" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                All Games
                            </Link>
                        </li> */}
                        <li>
                            <Link href="/contact-us" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-bold text-cyan-300 mb-4">Terms</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/terms-of-services" className="text-gray-400 hover:text-cyan-300 transition-colors">
                                Terms & Condition
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-cyan-300 transition-colors">
                               Privacy Policy
                            </Link>
                        </li>
                        
                    </ul>
                </div>

                {/* Contact & Social */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-cyan-300 mb-4">Get in Touch</h3>
                    <p className="text-gray-400 text-sm">Email: support@gamora.world</p>
                    <p className="text-gray-400 text-sm">Phone: +1 (555) 123-4567</p>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-1.301.975-1.24 2.242-1.301 3.608-.058 1.266-.07 1.646-.07 4.85 0 3.204.012 3.584.07 4.85.062 1.366.326 2.633 1.301 3.608 1.301.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-1.301.975-1.24 2.242-1.301 3.608-.058 1.266-.07 1.646-.07 4.85 0 3.204z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Gamora. All rights reserved.</p>
            </div>
        </footer>
    );
}