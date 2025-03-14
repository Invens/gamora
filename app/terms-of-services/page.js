"use client";
import Link from "next/link";
import Header from "@/components/Header"; // Assuming you have this
import Head from "next/head";

export default function TermsAndConditions() {
    const effectiveDate = "March 14, 2025"; // Placeholder, replace with actual date
    const lastUpdated = "March 14, 2025"; // Placeholder, replace with actual date

    return (
        <><Head>
        <title>Terms and Conditions | Gamora.World - Play Games with Confidence</title>
        <meta 
            name="description" 
            content="Read the Terms and Conditions of Gamora.World to understand your rights and responsibilities while using our free online gaming platform. Stay informed and play safely." 
        />
        <meta 
            name="keywords" 
            content="Terms and Conditions, Gamora World terms, gaming rules, online gaming policies, user agreement, acceptable use policy" 
        />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Terms and Conditions | Gamora.World - Play Games with Confidence" />
        <meta 
            property="og:description" 
            content="Understand the Terms and Conditions of Gamora.World, including user rights, responsibilities, and policies to ensure a fair and enjoyable gaming experience." 
        />
        <meta property="og:url" content="https://www.gamora.world/terms-and-conditions" />
        <meta property="og:image" content="https://www.gamora.world/gamora-world.png" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions | Gamora.World - Play Games with Confidence" />
        <meta 
            name="twitter:description" 
            content="Review the Terms and Conditions of Gamora.World to understand your rights and obligations while enjoying free online games on our platform." 
        />
        <meta name="twitter:image" content="https://www.gamora.world/gamora-world.png" />
        
        <link rel="canonical" href="https://www.gamora.world/terms-and-conditions" />
    
        {/* ✅ JSON-LD Structured Data for Google Rich Results */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Terms and Conditions - Gamora World",
                    "url": "https://www.gamora.world/terms-and-conditions",
                    "description": "Read the Terms and Conditions of Gamora.World to understand your rights and responsibilities while using our free online gaming platform. Stay informed and play safely.",
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
                                "name": "What are the Terms and Conditions of Gamora World?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Gamora World's Terms and Conditions outline the rules and policies that govern the use of our free online gaming platform, including user responsibilities, prohibited activities, and dispute resolution."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Who can use Gamora World?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Gamora World is open to users who are at least 13 years old or have parental consent where required by law."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are there any restrictions on using Gamora World?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, users must not engage in hacking, cheating, sharing offensive content, or violating intellectual property rights. Violation of these rules may lead to account suspension or banning."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How can I contact Gamora World for legal matters?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For legal inquiries, you can contact us at legal@gamora.world."
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
                        Terms and Conditions
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base text-center">
                        Effective Date: {effectiveDate}<br />
                        Last Updated: {lastUpdated}
                    </p>
                    <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                        Welcome to Gamora World! These Terms and Conditions ("Terms") govern your access to and use of our website, games, and services. By accessing or using Gamora World, you agree to comply with these Terms. If you do not agree, please do not use our services.
                    </p>
                </section>

                {/* 1. Acceptance of Terms */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">1. Acceptance of Terms</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            By using Gamora World, you confirm that you:
                        </p>
                        <ul className="mt-2 text-gray-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> Are at least 13 years old (or have parental consent if required by law).
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> Will follow all applicable laws and not misuse our services.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">✔️</span> Agree to these Terms & Conditions and our{" "}
                                <Link href="/privacy-policy" className="text-cyan-300 hover:underline">Privacy Policy</Link>.
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                            If you do not agree with any part of these Terms, you must stop using Gamora World immediately.
                        </p>
                    </div>
                </section>

                {/* 2. Use of Our Services */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">2. Use of Our Services</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">2.1 Access & Availability</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Gamora World provides free online games for entertainment purposes.
                            </p>
                            <ul className="mt-2 text-gray-300 text-sm space-y-2">
                                <li>We do not guarantee uninterrupted service and may modify, suspend, or discontinue any part of our platform without prior notice.</li>
                                <li>Some games may be provided by third-party developers, and we are not responsible for their performance or content.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">2.2 Prohibited Activities</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                When using Gamora World, you must NOT:
                            </p>
                            <ul className="mt-2 text-gray-300 text-sm space-y-2">
                                <li className="flex items-start">
                                    <span className="text-cyan-300 mr-2">❌</span> Use cheats, bots, or hacks to manipulate games.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-300 mr-2">❌</span> Share inappropriate, offensive, or illegal content.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-300 mr-2">❌</span> Engage in harassment, threats, or abusive behavior.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-300 mr-2">❌</span> Attempt to access our system illegally (hacking, phishing, etc.).
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-300 mr-2">❌</span> Violate any copyright, trademark, or other intellectual property rights.
                                </li>
                            </ul>
                            <p className="mt-2 text-gray-300 text-sm">
                                We reserve the right to suspend or ban users who violate these rules.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. User Accounts & Subscriptions */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">3. User Accounts & Subscriptions</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">3.1 Account Creation (If Applicable)</h3>
                            <ul className="text-gray-300 text-sm space-y-2">
                                <li>Some features may require an account. You are responsible for keeping your login details secure.</li>
                                <li>We may terminate or suspend accounts that violate our Terms.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-200 mb-2">3.2 Subscription Services</h3>
                            <ul className="text-gray-300 text-sm space-y-2">
                                <li>If we offer a subscription-based service, it will be clearly stated.</li>
                                <li>You can cancel subscriptions anytime, but fees may not be refundable.</li>
                                <li>We reserve the right to change subscription pricing, but you will be notified of any changes in advance.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. Intellectual Property Rights */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">4. Intellectual Property Rights</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>All games, logos, images, and website content are owned by Gamora World or licensed by third parties.</li>
                            <li>You may NOT copy, modify, distribute, or resell any content from our platform without permission.</li>
                            <li>Game developers retain full rights over their games and content.</li>
                            <li>
                                If you believe any content on Gamora World violates your copyright, please contact us at{" "}
                                <a href="mailto:legal@gamora.world" className="text-cyan-300 hover:underline">legal@gamora.world</a>.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 5. Third-Party Links & Services */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">5. Third-Party Links & Services</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>Gamora World may contain ads, links, or embedded content from third-party websites.</li>
                            <li>We do not control or endorse third-party services and are not responsible for their content or security.</li>
                            <li>Any interactions with third-party websites are at your own risk.</li>
                        </ul>
                    </div>
                </section>

                {/* 6. Limitation of Liability */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">6. Limitation of Liability</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800 space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            <span className="text-cyan-300 mr-2">🚫</span> Gamora World is provided "AS IS" without warranties.
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We do not guarantee that:
                        </p>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>- Our services will always be error-free or uninterrupted.</li>
                            <li>- Games will work perfectly on all devices or browsers.</li>
                            <li>- Data stored (scores, preferences, etc.) will always be available.</li>
                        </ul>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We are NOT liable for:
                        </p>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">❌</span> Loss of data, account issues, or game progress resets.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">❌</span> Any viruses, bugs, or errors that may occur.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">❌</span> Any direct or indirect damages resulting from using our platform.
                            </li>
                        </ul>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Your use of Gamora World is at your own risk.
                        </p>
                    </div>
                </section>

                {/* 7. Indemnification */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">7. Indemnification</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            By using Gamora World, you agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, or legal fees arising from your use of our services or violation of these Terms.
                        </p>
                    </div>
                </section>

                {/* 8. Termination of Use */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">8. Termination of Use</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We reserve the right to terminate or restrict access to any user if we suspect violations of:
                        </p>
                        <ul className="mt-2 text-gray-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">❌</span> These Terms & Conditions.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">❌</span> Any applicable laws.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">❌</span> Unfair gameplay, abuse, or hacking.
                            </li>
                        </ul>
                        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                            You may stop using Gamora World at any time.
                        </p>
                    </div>
                </section>

                {/* 9. Changes to These Terms */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">9. Changes to These Terms</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We may update or modify these Terms at any time. If we make major changes, we will notify users via:
                        </p>
                        <ul className="mt-2 text-gray-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">📢</span> A notice on our homepage.
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-300 mr-2">📩</span> Email notifications (if applicable).
                            </li>
                        </ul>
                        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                            Your continued use of Gamora World after changes means you accept the revised Terms.
                        </p>
                    </div>
                </section>

                {/* 10. Governing Law & Dispute Resolution */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">10. Governing Law & Dispute Resolution</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            These Terms are governed by [Insert Country’s Law]. If any disputes arise:
                        </p>
                        <ul className="mt-2 text-gray-300 text-sm space-y-2">
                            <li>
                                We encourage you to contact us first at{" "}
                                <a href="mailto:legal@gamora.world" className="text-cyan-300 hover:underline">legal@gamora.world</a>.
                            </li>
                            <li>If needed, disputes may be resolved through arbitration or legal proceedings in [Insert Jurisdiction].</li>
                        </ul>
                    </div>
                </section>

                {/* 11. Contact Information */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">11. Contact Information</h2>
                    <div className="bg-black p-6 rounded-xl shadow-lg border border-gray-800">
                        <p className="text-gray-300 text-sm">
                            📧 Email: <a href="mailto:support@gamora.world" className="text-cyan-300 hover:underline">support@gamora.world</a>
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                            📍 Address: 123 Gaming Avenue, Amsterdam, Netherlands
                        </p>
                    </div>
                </section>

                {/* Closing Note */}
                <section className="text-center">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        By using Gamora World, you agree to these Terms and Conditions. If you do not agree, please stop using our services.{" "}
                        <span className="text-cyan-300">🚀🎮</span>
                    </p>
                </section>
            </main>

            {/* Footer */}
        </div>
        </>
    );
}