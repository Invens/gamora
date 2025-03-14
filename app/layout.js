import { Silkscreen } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

// ✅ Import Silkscreen Font
const silkscreen = Silkscreen({
  weight: ["400"], // Choose available weights
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

export const metadata = {
  title: "Gamora.World - Play Free Online Games | Multiplayer, Racing & More",
  description: "Gamora.World offers the best free online games, including multiplayer, racing, shooting, and board games. Play instantly without downloads!",
  alternates: {
    canonical: "https://www.gamora.world/",
  },
};


export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={`${silkscreen.variable} antialiased`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
