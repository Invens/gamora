import Link from 'next/link';
import Image from 'next/image';

export default function GameCard({ game }) {
    return (
        <Link href={`/game/${game.guid}`}>
            <div className="border rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition">
                <Image width={400} height={300} src={game.thumb} alt={game.title} className="w-full h-40 object-cover" />
                <div className="p-4 bg-gray-900 text-white">
                    <h2 className="text-lg font-semibold">{game.title}</h2>
                    <p className="text-sm text-gray-400">{game.category}</p>
                </div>
            </div>
        </Link>
    );
}
