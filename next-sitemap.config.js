const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000, // Split sitemap into multiple files if URLs exceed 5000

  additionalPaths: async (config) => {
    try {
      console.log("Fetching games for sitemap...");

      let allGames = [];
      let currentPage = 1;
      let hasMoreGames = true;

      // Fetch all games using pagination
      while (hasMoreGames) {
        console.log(`Fetching page ${currentPage}...`);

        const gamesRes = await fetch(`${SITE_URL}/api/games?page=${currentPage}&limit=100`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Failed to fetch games: ${res.statusText}`);
            }
            return res.json();
          })
          .catch((error) => {
            console.error("Error fetching games:", error);
            return { games: [] };
          });

        if (gamesRes.games && gamesRes.games.length > 0) {
          allGames = [...allGames, ...gamesRes.games];
          currentPage++;
        } else {
          hasMoreGames = false; // Stop if no more games are returned
        }
      }

      console.log(`Fetched ${allGames.length} games.`);

      // Generate URLs for games
      const gameUrls = allGames.map((game) => ({
        loc: `/game/${encodeURIComponent(game.guid)}`,
        lastmod: new Date().toISOString(),
        priority: 0.9,
      }));

      return [...gameUrls];
    } catch (error) {
      console.error("Error fetching games for sitemap:", error);

      // Provide fallback games in case of failure
      const fallbackGames = [
        { guid: "timberman" },
        { guid: "pop-up" },
        { guid: "fire-truck" },
      ];

      const gameUrls = fallbackGames.map((game) => ({
        loc: `/game/${encodeURIComponent(game.guid)}`,
        lastmod: new Date().toISOString(),
        priority: 0.9,
      }));

      return [...gameUrls];
    }
  },
};