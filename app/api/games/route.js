import { NextResponse } from 'next/server';

const API_SOURCES = [
    'https://h5games.online/freegames.json',
    'https://www.htmlgames.com/rss/games.php?json',
    'https://www.onlinegames.io/media/plugins/genGames/embed.json'
];

// ✅ Custom Games (Manually Added)
const customGames = [
    {
        title: "Valley Of Wolves",
        thumb: "/valley-of-wolves.webp",
        link: "https://g.igroutka.ru/games/23/OWBYrKzs4ojfxbJV/rvvASMiM/f921f37779634c868acf3979a48eb7a6/",
        description: "Exciting online game with engaging mechanics and challenges. Play directly in your browser.",
        category: "shooters",
        tags: "Action,Adventure,Multiplayer",
        width: "800",
        height: "600",
        guid: "valley_of_wolves",
    },
    {
        title: "Game Combat Online 2",
        thumb: "/combat.webp",
        link: "https://g.igroutka.ru/games/1148/wJzTUA1cup69FxCv/91625605-8e78-47b1-829c-a0497a0c6763/index.html",
        description: "Do you love explosive multiplayer shooters in the style of Counter-Strike? Then hurry to fight with other gamers in a cool shooter. You will find a lot of maps for endless battles, races and parkour. Fight with other players or create your own room and call friends for private battles. Show off your battle tactics and shooting accuracy to become a champion in killed frags",
        category: "shooters",
        tags: "FPS,Multiplayer,Shooting,Action",
        width: "100%",
        height: "100%",
        guid: "kour_io",
    },
    {
        title: "Hazmob FPS Online Shooter",
        thumb: "/hazmob-fps-online-shooter.avif",
        link: "https://www.crazygames.com/embed/hazmob-fps-online-shooter",
        description: "Battle in intense FPS action with Hazmob FPS Online Shooter!",
        category: "shooters",
        tags: "Multiplayer,Action,FPS,Online",
        width: "100%",
        height: "100%",
        guid: "hazmob_fps",
    },
    {
        title: "Bullet Force Multiplayer",
        thumb: "/bullet-force-multiplayer.avif",
        link: "https://www.crazygames.com/embed/bullet-force-multiplayer",
        description: "Engage in thrilling first-person shooter combat with Bullet Force Multiplayer.",
        category: "shooters",
        tags: "FPS,Multiplayer,War,Tactical",
        width: "100%",
        height: "100%",
        guid: "bullet_force",
    },
    {
        title: "Sure Shot",
        thumb: "/sure-shot.avif",
        link: "https://www.crazygames.com/embed/sure-shot",
        description: "Test your accuracy in this challenging sniper shooting game.",
        category: "shooters",
        tags: "Shooting,Skill,Sniper,Action",
        width: "100%",
        height: "100%",
        guid: "sure_shot",
    },
    {
        title: "Xtreme City Drifting",
        thumb: "/xtreme-city-drifting.avif",
        link: "https://www.crazygames.com/embed/xtreme-city-drifting",
        description: "Experience high-speed drifting action in a city environment.",
        category: "racing",
        tags: "Drifting,Cars,Racing,3D",
        width: "100%",
        height: "100%",
        guid: "xtreme_drifting",
    },
    {
        "title": "Subway Surfers Hollywood",
        "thumb": "/subway-surfer.avif",
        "link": "https://g.igroutka.ru/games/164/CuKFQPWtdby6UYev/10/subway_surfers_hollywood/",
        "description": "Run, dodge, and dash your way through Hollywood in Subway Surfers! Avoid obstacles and keep running to get the highest score.",
        "category": "racing",
        "tags": "Endless Runner,Action,Fun",
        "width": "900",
        "height": "700",
        "guid": "subway_surfers",
        "pubDate": "Mon, 15 May 23 12:45:00 +0000"
      },
      {
        "title": "Temple Run 2",
        "thumb": "/temple-run-2.png",
        "link": "https://m.igroutka.ru/ni3/118/TempleRun2/",
        "description": "Temple Run 2 brings thrilling running action with new features and enhancements. Avoid obstacles and keep running!",
        "category": "racing",
        "tags": "Endless Runner,Action,Skill",
        "width": "1024",
        "height": "768",
        "guid": "temple_run_2",
        "pubDate": "Thu, 12 Jan 23 14:30:00 +0000"
      },
      {
        "title": "Ludo Club - Fun Dice Game",
        "thumb": "/ludo.jpeg",
        "link": "https://g.igroutka.ru/games/368/MBP6SlExpkfi65/ludo-club---fun-dice-game/6/ludo.html",
        "description": "A fun and engaging dice game that you can play with friends. Ludo Club will keep you entertained for hours!",
        "category": "board",
        "tags": "Board Game,Multiplayer,Strategy",
        "width": "800",
        "height": "600",
        "guid": "ludo_club_fun_dice_game",
        "pubDate": "Tue, 10 Oct 23 11:15:00 +0000"
      },
      {
        "title": "Chess 3D",
        "thumb": "/chess.avif",
        "link": "https://m.igroutka.ru/ni/493/igra-shakhmaty-3d/",
        "description": "Play a 3D chess game with amazing visuals. Challenge your friends or play against AI.",
        "category": "puzzles",
        "tags": "Board Game,Strategy,Multiplayer",
        "width": "1024",
        "height": "768",
        "guid": "chess_3d",
        "pubDate": "Sat, 17 Jun 23 10:50:00 +0000"
      },
      {
        "title": "Nuts and Bolts: Screwing Puzzle",
        "thumb": "/nuts.jpeg",
        "link": "https://g.igroutka.ru/games/736/aUfdlRyO1QvLDWrY/624bcad1-766c-4355-ad11-9eedf0558ee9/index.html",
        "description": "Test your problem-solving skills with Nuts and Bolts: Screwing Puzzle, a unique puzzle game where players must fit various shapes together to progress through challenging levels. The game’s 3D graphics and intricate designs create a captivating experience, making it ideal for puzzle enthusiasts looking for a fun yet challenging adventure.",
        "category": "puzzles",
        "tags": "Board Game,Strategy,Multiplayer",
        "width": "1024",
        "height": "768",
        "guid": "nuts_and_bolts",
        "pubDate": "Sat, 17 Jun 23 10:50:00 +0000"
      },
      {
        "title": "8 Ball Pro",
        "thumb": "/8ball.jpeg",
        "link": "https://g2.igroutka.ru/games/23/8_ball_pro/rvvASMiM/20fa5406b00643128250478502fa5453/",
        "description": "Step into the virtual pool hall with 8 Ball Pro, where you can showcase your billiards skills against friends or AI opponents. Featuring realistic physics and beautifully rendered graphics, this game provides an authentic pool experience. Whether you're a beginner or a seasoned pro, challenge yourself to master the art of potting balls and executing trick shots to become the ultimate champion.",
        "category": "puzzles",
        "tags": "Board Game,Strategy,Multiplayer",
        "width": "1024",
        "height": "768",
        "guid": "8ball_pro",
        "pubDate": "Sat, 17 Jun 23 10:50:00 +0000"
      },
];

const PAGE_SIZE = 90;
let cachedGames = [];
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const normalizeH5Games = (games) => games.map(game => ({
    title: game.title,
    link: game.link,
    thumb: game.thumb,
    description: game.description,
    category: game.category,
    tags: game.tags,
    width: game.width,
    height: game.height,
    guid: game.guid
}));

const normalizeHtmlGames = (games) => games.map(game => ({
    title: game.name,
    link: game.url,
    thumb: game.thumb1 || game.thumb2 || game.thumb3,
    description: game.description,
    category: game.category,
    tags: "",
    width: game.width,
    height: game.height,
    guid: game.name.toLowerCase().replace(/\s+/g, '-')
}));

const normalizeOnlineGames = (games) => games.map(game => ({
    title: game.title,
    link: game.embed,
    thumb: game.image,
    description: game.description,
    category: game.category || "uncategorized",
    tags: game.tags,
    width: 800,
    height: 600,
    guid: game.title.toLowerCase().replace(/\s+/g, '-')
}));

async function fetchGames() {
    if (Date.now() - lastFetchTime > CACHE_DURATION || cachedGames.length === 0) {
        try {
            const responses = await Promise.all(API_SOURCES.map(url => fetch(url).then(res => res.json())));
            const allGames = [
                ...normalizeH5Games(responses[0]),
                ...normalizeHtmlGames(responses[1]),
                ...normalizeOnlineGames(responses[2])
            ];
            cachedGames = allGames;
            lastFetchTime = Date.now();
        } catch (error) {
            console.error("Error fetching games:", error);
            return [];
        }
    }
    return cachedGames;
}

// ✅ Handle API Requests
// ✅ Handle API Requests (Fixed Search)
export async function GET(request) {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const category = url.searchParams.get("category");
    const guid = url.searchParams.get("guid");
    const relatedGuid = url.searchParams.get("related");
    const searchQuery = url.searchParams.get("search");
    const categoriesRequest = url.searchParams.get("categories");
    const isCustomRequest = url.searchParams.get("custom") === "true";

    let games = await fetchGames();

    // ✅ Fetch Custom Games Separately
    if (isCustomRequest) {
        return NextResponse.json({ games: customGames });
    }

    // ✅ Get Single Game by GUID
    if (guid) {
        const game = [...games, ...customGames].find((g) => g.guid === guid);
        return game
            ? NextResponse.json(game)
            : NextResponse.json({ error: "Game not found" }, { status: 404 });
    }

    // ✅ Get Related Games by Category
    if (relatedGuid) {
        const currentGame = [...games, ...customGames].find((g) => g.guid === relatedGuid);
        if (!currentGame) return NextResponse.json({ error: "Game not found" }, { status: 404 });

        const relatedGames = [...games, ...customGames]
            .filter((g) => g.category === currentGame.category && g.guid !== relatedGuid)
            .slice(0, 10);
        return NextResponse.json(relatedGames);
    }

    // ✅ Get All Categories
    if (categoriesRequest) {
        const categories = [...new Set([...games, ...customGames].map((game) => game.category).filter(Boolean))];
        return NextResponse.json(categories);
    }

    // ✅ Filter Games by Category
    if (category) {
        games = games.filter((game) => game.category.toLowerCase() === category.toLowerCase());
    }

    // 🔥 ✅ IMPROVED SEARCH FUNCTIONALITY
    if (searchQuery) {
        const lowerQuery = searchQuery.toLowerCase().trim();

        // 🔍 **Search Filtering**
        games = [...games, ...customGames].filter((game) => {
            const titleMatch = game.title.toLowerCase().includes(lowerQuery);
            const descMatch = game.description.toLowerCase().includes(lowerQuery);
            const tagMatch = game.tags && game.tags.toLowerCase().includes(lowerQuery);
            const guidMatch = game.guid.toLowerCase().includes(lowerQuery);

            return titleMatch || descMatch || tagMatch || guidMatch;
        });

        // 🔥 **Prioritize Exact Matches First**
        games.sort((a, b) => {
            const aTitleMatch = a.title.toLowerCase() === lowerQuery ? 1 : 0;
            const bTitleMatch = b.title.toLowerCase() === lowerQuery ? 1 : 0;
            return bTitleMatch - aTitleMatch;
        });
    }

    // ✅ Paginate API-Fetched Games (Custom Games Included in Search)
    const totalGames = games.length;
    const totalPages = Math.ceil(totalGames / PAGE_SIZE);
    const startIndex = (page - 1) * PAGE_SIZE;
    const paginatedGames = games.slice(startIndex, startIndex + PAGE_SIZE);

    return NextResponse.json({
        games: paginatedGames,
        totalGames,
        totalPages,
        currentPage: page,
    });
}
