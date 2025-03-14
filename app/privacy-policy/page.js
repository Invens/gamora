"use client";
import Link from "next/link";
import Header from "@/components/Header"; // Assuming you have this
import Head from "next/head";

export default function PrivacyPolicy() {
    const effectiveDate = "March 14, 2025"; // Placeholder, replace with actual date
    const lastUpdated = "March 14, 2025"; // Placeholder, replace with actual date

    return (
        <><Head>
        <title>Privacy Policy | Gamora.World - Your Privacy Matters</title>
        <meta 
            name="description" 
            content="Read the privacy policy of Gamora.World to learn how we collect, use, and protect your personal data. We prioritize user security and transparency." 
        />
        <meta 
            name="keywords" 
            content="Privacy Policy, Gamora World Privacy, data protection, online gaming privacy, cookies policy, GDPR, CCPA compliance" 
        />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Privacy Policy | Gamora.World - Your Privacy Matters" />
        <meta 
            property="og:description" 
            content="Gamora.World is committed to protecting your privacy. Learn about our data collection, usage, and security policies to ensure a safe gaming experience." 
        />
        <meta property="og:url" content="https://www.gamora.world/privacy-policy" />
        <meta property="og:image" content="https://www.gamora.world/gamora-world.png" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Gamora.World - Your Privacy Matters" />
        <meta 
            name="twitter:description" 
            content="Gamora.World values your privacy. Read our privacy policy to understand how we collect, store, and protect your personal data while you play free online games." 
        />
        <meta name="twitter:image" content="https://www.gamora.world/gamora-world.png" />
        
        <link rel="canonical" href="https://www.gamora.world/privacy-policy" />
    
        {/* ✅ JSON-LD Structured Data for Google Rich Results */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Privacy Policy - Gamora World",
                    "url": "https://www.gamora.world/privacy-policy",
                    "description": "Read the privacy policy of Gamora.World to learn how we collect, use, and protect your personal data. We prioritize user security and transparency.",
                    "inLanguage": "en",
                    "datePublished": "2025-03-14",
                    "dateModified": "2025-03-14",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Gamora World",
                        "url": "https://www.gamora.world",
                        "logo": "https://www.gamora.world/gamora.png"
                    },
                    "mainEntity": {
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What personal data does Gamora World collect?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Gamora.World collects basic user data such as email, IP address, and device information to improve the gaming experience."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does Gamora World protect my privacy?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We use encryption, secure servers, and comply with GDPR and CCPA to ensure user data protection."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I opt out of data collection?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, users can adjust cookie preferences and opt-out of certain data collection features."
                                }
                            }
                        ]
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
                {/* Title & Intro */}
                <section className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4 text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base text-center">
                        Effective Date: {effectiveDate}<br />
                        Last Updated: {lastUpdated}
                    </p>
                    <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                        Welcome to Gamora World! Your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website, games, and services. By using Gamora World, you agree to the terms of this Privacy Policy.
                    </p>
                </section>

                {/* 1. Information We Collect */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">1. Information We Collect</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800 space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            When you interact with Gamora World, we may collect the following types of data:
                        </p>
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">1.1 Information You Provide</h3>
                            <ul className="text-gray-300 text-sm space-y-2">
                                <li>
                                    <span className="font-semibold">Contact Information:</span> If you sign up for newsletters, subscribe, or contact us, we may collect your name, email address, and any messages you send.
                                </li>
                                <li>
                                    <span className="font-semibold">Account Information (if applicable):</span> If you create an account, we may collect your username, password, and profile details.
                                </li>
                                <li>
                                    <span className="font-semibold">Feedback & Surveys:</span> Any reviews, ratings, or feedback you provide about our games.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">1.2 Automatically Collected Information</h3>
                            <ul className="text-gray-300 text-sm space-y-2">
                                <li>
                                    <span className="font-semibold">Device Information:</span> We collect details about your device type, operating system, browser, and screen resolution.
                                </li>
                                <li>
                                    <span className="font-semibold">Usage Data:</span> We track how you interact with our website, such as pages visited, games played, session duration, and referring URLs.
                                </li>
                                <li>
                                    <span className="font-semibold">IP Address & Location Data:</span> We may collect your IP address to determine general geographic location for security and optimization purposes.
                                </li>
                                <li>
                                    <span className="font-semibold">Cookies & Tracking Technologies:</span> We use cookies, pixels, and similar technologies to store preferences and analyze website traffic.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 2. How We Use Your Information */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">2. How We Use Your Information</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We use the information we collect to:
                        </p>
                        <ul className="mt-2 text-gray-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> <span className="font-semibold">Provide & Improve Services</span> – Ensure smooth gameplay, improve website performance, and personalize user experience.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> <span className="font-semibold">Enhance User Experience</span> – Store preferences, remember login details, and suggest relevant games.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> <span className="font-semibold">Analyze & Monitor Performance</span> – Understand trends, optimize loading times, and fix bugs.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> <span className="font-semibold">Communicate with You</span> – Send updates, promotions, or respond to inquiries.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✅</span> <span className="font-semibold">Protect Users & Enforce Policies</span> – Prevent fraud, abuse, and unauthorized access.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 3. How We Share Your Information */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">3. How We Share Your Information</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We do NOT sell, trade, or rent your personal data. However, we may share your information in the following cases:
                        </p>
                        <ul className="mt-2 text-gray-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> <span className="font-semibold">Service Providers:</span> We work with third-party vendors (e.g., analytics providers, hosting services) who assist in running our platform.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> <span className="font-semibold">Legal Requirements:</span> If required by law or legal process, we may disclose information to comply with regulations.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> <span className="font-semibold">Business Transfers:</span> If Gamora World undergoes a merger, acquisition, or sale, user data may be transferred to the new entity.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 4. Cookies & Tracking Technologies */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">4. Cookies & Tracking Technologies</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800 space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            <span className="font-semibold">What are cookies?</span> Cookies are small text files stored on your device that help us improve your experience.
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We use cookies to:
                        </p>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>- Remember your preferences & settings.</li>
                            <li>- Track game performance & analytics.</li>
                            <li>- Provide relevant ads via third-party advertising partners.</li>
                        </ul>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            <span className="font-semibold">How to Manage Cookies?</span> You can adjust your browser settings to disable cookies. However, some features of Gamora World may not function properly without them.
                        </p>
                    </div>
                </section>

                {/* 5. Third-Party Services & Ads */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">5. Third-Party Services & Ads</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800 space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Our website may contain third-party ads, links, or embedded content from external sources. These services have their own privacy policies, and we encourage you to review them.
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Examples of Third-Party Services:
                        </p>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>- Google Analytics & AdSense (for website performance & advertising)</li>
                            <li>- Facebook, Instagram, Twitter/X Pixels (for social media integration)</li>
                            <li>- Game Developer APIs (to provide new games)</li>
                        </ul>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Gamora World does not control third-party tracking technologies, and we are not responsible for their privacy practices.
                        </p>
                    </div>
                </section>

                {/* 6. Data Security & Protection */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">6. Data Security & Protection</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800 space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We take strong security measures to protect your information, including:
                        </p>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">🔒</span> <span className="font-semibold">Encryption:</span> Secure transmission of data using SSL/TLS encryption.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">🔒</span> <span className="font-semibold">Restricted Access:</span> Only authorized personnel can access user data.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">🔒</span> <span className="font-semibold">Regular Security Audits:</span> We continuously monitor and update our security systems.
                            </li>
                        </ul>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            <span className="text-cyan-300">⚠️</span> However, no online service is 100% secure. Always use a strong password and avoid sharing personal details in public chat areas.
                        </p>
                    </div>
                </section>

                {/* 7. Your Privacy Rights & Choices */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">7. Your Privacy Rights & Choices</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800 space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            You have full control over your data. Depending on your location, you may have rights under GDPR (EU), CCPA (California), and other privacy laws, such as:
                        </p>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> <span className="font-semibold">Access & Review</span> – Request a copy of the data we store about you.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> <span className="font-semibold">Correction & Updates</span> – Modify incorrect or outdated personal details.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> <span className="font-semibold">Deletion Request</span> – Ask us to delete your account or data.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> <span className="font-semibold">Opt-Out of Marketing Emails</span> – Click the "unsubscribe" link in our emails.
                            </li>
                        </ul>
                        <p className="text-gray-300 text-sm">
                            📩 To make any data-related requests, contact us at: <a href="mailto:privacy@gamora.world" className="text-cyan-300 hover:underline">privacy@gamora.world</a>
                        </p>
                    </div>
                </section>

                {/* 8. Children's Privacy */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">8. Children's Privacy</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Gamora World is NOT intended for children under 13 years of age. If you believe a child has provided us with personal data, please contact us immediately, and we will remove the data.
                        </p>
                    </div>
                </section>

                {/* 9. Changes to This Privacy Policy */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">9. Changes to This Privacy Policy</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We may update this Privacy Policy from time to time to reflect new features, legal requirements, or security improvements.
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                            📅 Last Updated: {lastUpdated}
                        </p>
                        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                            If major changes occur, we will notify users via email or a notice on our website.
                        </p>
                    </div>
                </section>

                {/* 10. Contact Us */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">10. Contact Us</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            If you have any questions or concerns about this Privacy Policy, feel free to contact us:
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                            📧 Email: <a href="mailto:privacy@gamora.world" className="text-cyan-300 hover:underline">privacy@gamora.world</a>
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                            📍 Address: 123 Gaming Avenue, Amsterdam, Netherlands
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
        </div>
        </>
    );
}