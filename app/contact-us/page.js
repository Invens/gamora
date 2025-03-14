"use client";
import Link from "next/link";
import Header from "@/components/Header"; // Assuming you have this
import Footer from "@/components/Footer"; // Assuming you have this
import Head from "next/head";

export default function ContactUs() {
    return (
        <><Head>
        <title>Contact Gamora.World | Support, Business & Game Developers</title>
        <meta
            name="description"
            content="Contact Gamora.World for support, business inquiries, game developer opportunities, or technical assistance. Get in touch with our team today!"
        />
        <meta
            name="keywords"
            content="Contact Gamora World, gaming support, game developers, business partnerships, report bugs, game advertising"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Gamora.World | Support, Business & Game Developers" />
        <meta
            property="og:description"
            content="Contact Gamora.World for support, business inquiries, game developer opportunities, or technical assistance. Get in touch with our team today!"
        />
        <meta property="og:url" content="https://www.gamora.world/contact-us" />
        <meta property="og:image" content="https://www.gamora.world/gamora-world.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Gamora.World | Support, Business & Game Developers" />
        <meta
            name="twitter:description"
            content="Need help? Contact Gamora.World for gaming support, partnerships, and technical inquiries."
        />
        <meta name="twitter:image" content="https://www.gamora.world/gamora-world.png" />
        <link rel="canonical" href="https://www.gamora.world/contact-us" />
    
        {/* ✅ JSON-LD Structured Data for Google Rich Results */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact Gamora World",
                    "url": "https://www.gamora.world/contact-us",
                    "description": "Contact Gamora.World for support, business inquiries, game developer opportunities, or technical assistance. Get in touch with our team today!",
                    "contactPoint": [
                        {
                            "@type": "ContactPoint",
                            "telephone": "+31 123 456 789",
                            "contactType": "Customer Support",
                            "email": "support@gamora.world",
                            "availableLanguage": ["English"]
                        },
                        {
                            "@type": "ContactPoint",
                            "contactType": "Business Inquiries",
                            "email": "business@gamora.world"
                        },
                        {
                            "@type": "ContactPoint",
                            "contactType": "Technical Support",
                            "email": "techsupport@gamora.world"
                        }
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "123 Gaming Avenue, Tower 5",
                        "addressLocality": "Amsterdam",
                        "addressCountry": "Netherlands"
                    },
                    "sameAs": [
                        "https://twitter.com/GamoraWorld",
                        "https://facebook.com/GamoraWorld",
                        "https://instagram.com/GamoraWorld",
                        "https://youtube.com/GamoraWorld"
                    ]
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
                        Contact Us – Get in Touch with Gamora World
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        At Gamora World, we value our players, developers, and partners. Whether you have a question, feedback, business inquiry, or technical issue, we’re here to help! Our team is always ready to hear from you and ensure that your experience on our platform remains smooth, exciting, and fun.
                    </p>
                    <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
                        You can reach out to us using the details below or by filling out our contact form.
                    </p>
                </section>

                {/* How to Contact Us */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-6">📩 How to Contact Us</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800 space-y-6">
                        {/* General Inquiries & Support */}
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">General Inquiries & Support</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                If you have any questions, suggestions, or need assistance with anything related to Gamora World, feel free to contact our support team. We’re happy to help!
                            </p>
                            <p className="mt-2 text-gray-300 text-sm">
                                📧 Email: <a href="mailto:support@gamora.world" className="text-cyan-300 hover:underline">support@gamora.world</a>
                            </p>
                            <p className="text-gray-300 text-sm">
                                🕒 Support Hours: Monday – Friday, 9:00 AM – 6:00 PM (UTC)
                            </p>
                            <p className="mt-2 text-gray-300 text-sm italic">
                                💬 Live Chat Support: <span className="text-gray-400">(Coming Soon)</span>
                            </p>
                        </div>

                        {/* Business & Partnership Inquiries */}
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">💼 Business & Partnership Inquiries</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Are you a game developer, advertiser, or brand looking to collaborate with Gamora World? We’re always open to exciting partnerships.
                            </p>
                            <ul className="mt-2 space-y-2 text-sm text-gray-300">
                                <li>
                                    🎮 <span className="font-semibold">Game Developers:</span> Reach out for integration and monetization opportunities.
                                </li>
                                <li>
                                    📢 <span className="font-semibold">Advertisers & Sponsors:</span> Promote your brand to a global gaming audience.
                                </li>
                                <li>
                                    🤝 <span className="font-semibold">Business Partnerships:</span> Let’s discuss strategic collaborations!
                                </li>
                            </ul>
                            <p className="mt-2 text-gray-300 text-sm">
                                📧 Business Email: <a href="mailto:business@gamora.world" className="text-cyan-300 hover:underline">business@gamora.world</a>
                            </p>
                        </div>

                        {/* Technical Support & Bug Reports */}
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">⚙️ Technical Support & Bug Reports</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Encountered a bug or technical issue? Our team is here to fix it. Please provide:
                            </p>
                            <ul className="mt-2 space-y-1 text-sm text-gray-300">
                                <li>- The game name or URL where you found the issue.</li>
                                <li>- A screenshot or video of the bug.</li>
                                <li>- Your device and browser version.</li>
                            </ul>
                            <p className="mt-2 text-gray-300 text-sm">
                                📧 Technical Support: <a href="mailto:techsupport@gamora.world" className="text-cyan-300 hover:underline">techsupport@gamora.world</a>
                            </p>
                        </div>
                    </div>
                </section>

                {/* For Game Developers */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-6">🎮 For Game Developers</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Gamora World is committed to helping indie and professional game developers succeed by giving their games a massive audience and monetization opportunities.
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                            📧 Developer Support: <a href="mailto:developers@gamora.world" className="text-cyan-300 hover:underline">developers@gamora.world</a>
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                            🌍 Join{" "}
                            <Link href="/developers" className="text-cyan-300 hover:underline">
                                Gamora for Developers
                            </Link>{" "}
                            – <a href="https://gamora.world/developers" className="text-cyan-300 hover:underline">gamora.world/developers</a>
                        </p>
                    </div>
                </section>

                {/* Report Inappropriate Content */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-6">📢 Report Inappropriate Content</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We strive to keep Gamora World safe and fun for all users. If you come across inappropriate content, misleading ads, or violations of our community guidelines, please report it immediately.
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                            📧 Report Abuse: <a href="mailto:report@gamora.world" className="text-cyan-300 hover:underline">report@gamora.world</a>
                        </p>
                    </div>
                </section>

                {/* Our Office */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-6">📍 Our Office</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <h3 className="text-lg font-semibold text-cyan-200 mb-2">Gamora World Headquarters</h3>
                        <p className="text-gray-300 text-sm">
                            123 Gaming Avenue, Tower 5<br />
                            Amsterdam, Netherlands
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                            📞 Phone: <a href="tel:+31123456789" className="text-cyan-300 hover:underline">+31 123 456 789</a>
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                            🌐 Website: <a href="https://gamora.world" className="text-cyan-300 hover:underline">www.gamora.world</a>
                        </p>
                        <p className="mt-2 text-gray-300 text-sm italic">
                            (Note: Our office is not open to the public, but we’re available via email and online support.)
                        </p>
                    </div>
                </section>

                {/* Stay Connected */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-6">🔔 Stay Connected with Gamora World</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Follow us on social media to get the latest updates, new game releases, and exclusive offers:
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-300">
                            <li>
                                🌐 Website: <a href="https://gamora.world" className="text-cyan-300 hover:underline">www.gamora.world</a>
                            </li>
                            <li>
                                📢 Twitter/X: <a href="https://twitter.com/GamoraWorld" className="text-cyan-300 hover:underline">@GamoraWorld</a>
                            </li>
                            <li>
                                📷 Instagram: <a href="https://instagram.com/GamoraWorld" className="text-cyan-300 hover:underline">@GamoraWorld</a>
                            </li>
                            <li>
                                🎥 YouTube: <a href="https://youtube.com/GamoraWorld" className="text-cyan-300 hover:underline">GamoraWorld</a>
                            </li>
                            <li>
                                📌 Pinterest: <a href="https://pinterest.com/GamoraWorld" className="text-cyan-300 hover:underline">@GamoraWorld</a>
                            </li>
                            <li>
                                📖 Facebook: <a href="https://facebook.com/GamoraWorld" className="text-cyan-300 hover:underline">GamoraWorld</a>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="text-center">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-6">💬 Contact Form</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            For your convenience, you can also reach us using the contact form below. Simply fill out your details and message, and our team will get back to you as soon as possible.
                        </p>
                        <p className="mt-4 text-gray-400 text-sm italic">
                            📝 Contact Form (Coming Soon)
                        </p>
                        {/* Placeholder for future form */}
                        <div className="mt-4 text-gray-600 text-sm">
                            [Form will be available here soon!]
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
        </div>
        </>
    );
}