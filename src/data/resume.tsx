import { Icons } from "@/components/icons";
import { Award, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Marc",
  initials: "MA",
  url: "https://www.marc-antoineourradour.fr/",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  description:
    "Web3 Engineer. Open to new opportunities, remote or relocate.",
  summary:
    "I have been actively engaged in the blockchain ecosystem since 2018, developing a strong passion for the intersection of Web3 technology and finance. I specialize in deep-diving into protocol logic, extracting and refining raw data for populating dapps or to deliver actionable insights. My drive to tackle complex challenges and continuously expand my knowledge is reflected in my active participation in several [hackathons](#hackathons).",

  avatarUrl: "/me.jpg",
  skills: [],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Marco75116",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/marcopoloo33800",
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/marcopoloo33",
        icon: Icons.telegram,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/watch?v=pJRJSQUpH8M",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SQD",
      href: "https://sqd.dev/",
      badges: [],
      location: "Remote",
      title: "Contributor",
      logoUrl: "/subsquid.webp",
      start: "2025",
      end: "",
      description:
        "-Contributed to the indexer project by creating templates for Uniswap V3 and [Uniswap V4](https://github.com/SQD-Boost/uniswap-v4-squid).\n-Occasionally helped SQD clients build and fix their indexers.",
      skills: ["Typescript", "EVM", "Squid SDK", "Pipes SDK", "Postgres", "Clickhouse"],
    },
    {
      company: "UNCX Network",
      href: "https://uncx.network/",
      badges: [],
      location: "Remote",
      title: "Senior Backend Engineer",
      logoUrl: "/uncxnetwork_logo.jpeg",
      start: "Sept 2023",
      end: "March 2026",
      description:
        "-Powered blockchain services, ensuring security, efficiency, and scalability for a +600M TVL protocol.\n-Designed and implemented ETL solutions with data ingestion and sourcing strategies using multichain indexers such as Subgraph and Squids, modeling schemas and tables across PostgreSQL and Clickhouse databases.\n-Provided unified multichain on-chain and off-chain data through GraphQL and REST endpoints, serving the app and partners like [DexTools](https://www.dextools.io/) and [DexScreener](https://dexscreener.com/).\n-Built a webhook-based event processing system using Sequin to monitor on-chain events, logs and traces across +10 smart contracts over +5 chains, powering a [Telegram Bot](https://t.me/Unicrypt_locks) with real-time notifications.\n-Co-designed and maintained a secure, self-hosted infrastructure optimized for high-throughput and low-latency, indexing millions of on-chain events and serving 10K+ API calls daily with high availability.\n-**Protocols we built services on:** Uniswap V4/V3/V2, PancakeSwap, Aerodrome and forks, LayerZero, Hyperlane, Kleros, and launchpad platforms.",
      skills: [
        "Typescript",
        "Python",
        "Elysia/Bun",
        "Solidity",
        "EVM",
        "DEFI",
        "Sequin",
        "Postgres",
        "Redis",
        "Clickhouse",
        "BullMQ",
        "Docker",
        "Patroni",
        "Grafana",
        "Prometheus",
        "Self-host / Coolify",
        "Viem",
      ],
    },
    {
      company: "ESGI - School of Computer Engineering",
      href: "https://www.esgi.fr/",
      badges: [],
      location: "Paris, France",
      title: "Blockchain Instructor",
      logoUrl: "/esgilogo.png",
      start: "2024",
      end: "2026",
      description:
        "-Designed and delivered a comprehensive blockchain course covering core concepts, Solidity development with Foundry, indexers, and Web3 front-end integration, training **+200 students** to build complete decentralized applications from scratch.",
      skills: ["Solidity", "Foundry", "EVM", "Squid SDK", "Indexer", "Next", "Wagmi.sh", "Viem", "Vercel"],
    },
    {
      company: "PyratzLabs",
      badges: [],
      href: "https://www.pyratzlabs.com/",
      location: "Remote",
      title: "Web3 Front-end Developer",
      logoUrl: "/pyratzlabs_logo.jpeg",
      start: "Sept 2022",
      end: "Aug 2023",
      description:
        "-Built and maintained Tezos/EVM applications. Marketplace for utility NFTs and [Leverage yield farming](https://youtu.be/yeJi6pIHAzs?si=z5iOJFuD2sYIRMxh). Integration of [Magic Wallet](https://magic.link/) and [Wert](https://wert.io/) Web3 payment provider.\n-Coach during [Tezos hackathons](https://www.linkedin.com/posts/nomadic-labs_hackathon-tezos-blockchain-activity-7049050354893606914-omZv?utm_source=share&utm_medium=member_desktop).",
      skills: ["EVM", "DEFI", "Next", "Wagmi.sh", "Shadcn", "Magic Wallet", "Wert"],
    },
    {
      company: "Stoa COFI",
      badges: [],
      href: "https://www.cofi.money/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/cofilogo.jpeg",
      start: "Jan 2022",
      end: "Aug 2022",
      description:
        "-Implementation of the front-end, back-end and indexer of an [EVM loan protocol](https://app.cofi.money/).\n-Integration of [Sumsub](https://sumsub.com/) KYC, [Magic Wallet](https://magic.link/), and [Transak](https://transak.com/) on/off ramp.",
      skills: ["Typescript", "EVM", "DEFI", "Subgraph", "Next", "Sumsub", "Magic Wallet", "Transak", "Ethers"],
    },
    {
      company: "Prepar-Vie",
      badges: [],
      href: "https://www.prepar-vie.fr/",
      location: "Paris, France",
      title: "Full Stack Software Developer",
      logoUrl: "/preparvielogo.png",
      start: "Jan 2021",
      end: "Aug 2022",
      description:
        "-Autonomously designed and delivered a complete internal workflow solution: requirements gathering, UI/UX design, database modeling, REST API, and testing.",
      skills: ["UI/UX", "Database Modeling", "REST API", "Testing"],
    },
  ],
  education: [
    {
      school: "Ecole Supérieure d'Ingénieurs Léonard de Vinci - La Défense",
      href: "https://www.esilv.fr/",
      degree: "Engineering Degree | 2021",
      logoUrl: "/esilvlogo.png",
      description:
        "Major in Blockchain. Learned Blockchain programming under the Head of Ecosystem at Starknet Foundation. Coursework: Quantum Computing, Cryptography, Virtualization, Web & Mobile Development, Machine Learning, Data Science, and Statistics. Weeks of Soft Skills training and entrepreneurial projects.",
      skills: ["C#", "Solidity", "React Native", "Next", "Python", "PostgreSQL", "SQLite", "Hardhat", "Web3.js", "Ethers"],
    },
    {
      school: "Lycée Honorée de Balzac - 75017",
      href: "https://fr.wikipedia.org/wiki/Honor%C3%A9_de_Balzac",
      degree: "PCSI/PC ",
      logoUrl: "/logobalzac.jpeg",
      description:
        "Chemistry Olympiad. TIPE project which took place part of a thesis on hydrophobic surfaces at the Institut Pierre Gilles-de-Gennes (liquid infused surfaces).",
    },
  ],
  projects: [
    {
      title: "Misti",
      href: "https://app.misti.app",
      dates: "2026",
      active: true,
      description:
        "Full-stack SaaS platform providing real-time blockchain data via a REST API. Dashboard for API key management, usage monitoring, and billing. Multi-database architecture (ClickHouse, PostgreSQL, DragonflyDB), cache-aside with stampede prevention, Redis Streams quota batching, circuit breakers, and OpenTelemetry tracing routed to SigNoz.",
      technologies: [
        "Typescript",
        "Bun",
        "ElysiaJS",
        "Next.js",
        "ClickHouse",
        "PostgreSQL",
        "DragonflyDB",
        "Redis",
        "OpenTelemetry/Signoz",
        "Polar",
        "Better Auth",
        "Squid Pipes",
        "Shadcn UI",
        "TailwindCSS",
        "Nextra",
      ],
      links: [
        {
          type: "App",
          href: "https://app.misti.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Documentation",
          href: "https://doc.misti.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bannervolcano.webp",
      video: "",
    },
    {
      title: "Agora Insights",
      href: "https://agora.misti.app",
      dates: "2025",
      active: true,
      description:
        "Get real-time and historical metrics for the AUSD token from Agora Finance, including holder balance charts. Aggregates data from ETH, POL, MANTLE, and MONAD.",
      technologies: ["Next", "Bun", "Shadcn", "Sqd", "Pipes SDK", "Clickhouse"],
      links: [
        {
          type: "Website",
          href: "https://agora.misti.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/agora-insights.png",
      video: "",
    },
    {
      title: "Uniswap Signals",
      href: "https://t.me/UniswapListingsSqd",
      dates: "2024",
      active: true,
      description:
        "Get real-time alerts for new Uniswap V4 pool creations over Ethereum, Base, and Unichain—only when they're fully initialized with liquidity and tradable.",
      technologies: ["Squid", "ElysiaJS", "Hasura", "Telegraf"],
      links: [
        {
          type: "Telegram",
          href: "https://t.me/UniswapListingsSqd",
          icon: <Icons.telegramWhite className="size-3" />,
        },
      ],
      image: "/uniswapsignalspool.jpeg",
      video: "",
    },
    {
      title: "Keeper telegram Bot",
      href: "https://t.me/perceval_templar_bot",
      dates: "2025",
      active: true,
      description:
        "Designed and developed an innovative blockchain gaming experience featuring AI-powered characters and incentivized social engagement. Created a Telegram bot integration with wallet functionalities that manages token-based gameplay and rewards. 40K monthly users",
      technologies: [
        "Bun",
        "Telegraf",
        "Viem",
        "Ton Sol Evm Stars payments",
        "Redis",
        "Postgres",
        "Drizzle-orm",
      ],
      links: [
        {
          type: "X",
          href: "https://x.com/theyumparty",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Bot",
          href: "https://github.com/Marco75116/keeper-bot",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "telegram",
          href: "https://t.me/perceval_templar_bot",
          icon: <Icons.telegramWhite className="size-3" />,
        },
      ],
      image: "/yumlogo.png",
      video: "",
    },
    {
      title: "Slot Machine Bot",
      href: "https://t.me/Slot_Machine_tresure_bot",
      dates: "2024",
      active: true,
      description:
        "Play exciting casino slot machines directly in Telegram chat – no downloads needed, just pure gambling excitement at your fingertips! Spin to trigger winnings of up to 100x your initial stake!",
      technologies: [
        "Bun",
        "Telegraf",
        "Viem",
        "Redis",
        "Postgres",
        "Dragonfly",
        "Drizzle-orm",
        "Crypto and Stars payments",
      ],
      links: [
        {
          type: "Telegram",
          href: "https://t.me/Slot_Machine_tresure_bot",
          icon: <Icons.telegramWhite className="size-3" />,
        },
      ],
      image: "/slotmachine.jpg",
      video: "",
    },
    {
      title: "UniMagnifier",
      href: "https://www.deepl.com/fr/translator#en/fr/coming%20soon%20new%20version/",
      dates: "2023",
      active: true,
      description:
        "Retrieve swaps activity on Uniswap, expose metadatas and analyze trading performance + DeFi portfolio tracker.",
      technologies: [
        "Express",
        "Supabase",
        "Chainlink",
        "Nextra",
        "Ethers",
        "Next",
        "ShacdUi",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.deepl.com/fr/translator#en/fr/coming%20soon%20new%20version/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/unilogo.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "ETHGlobal Buenos Aires",
      dates: "2025",
      location: "Buenos Aires, Argentina",
      description:
        "Make smarter LP decisions with comprehensive pool analytics and profitability metrics",
      image: "/ethglobalargentine.png",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ethglobal.com/showcase/unimagnifier-q9dz9",
        },
        {
          title: "Octav",
          icon: <Award className="h-4 w-4" />,
          href: "https://octav.fi/",
        },
      ],
    },
    {
      title: "ETHGlobal Cannes",
      dates: "2025",
      location: "Cannes, France",
      description:
        "Modern DeFi vault interface for Euler Protocol with real-time analytics and positions management.",
      image: "/ethglovalcannelogo.png",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ethglobal.com/showcase/sigmavault-y5msg",
        },
        {
          title: "Euler Finance",
          icon: <Award className="h-4 w-4" />,
          href: "https://www.euler.finance/",
        },
      ],
    },
    {
      title: "ETHGlobal Brussels",
      dates: "2024",
      location: "Brussels, Belgium",
      description:
        "RugStop - Make DeFi great again and don't let the memes rug you Make DeFi great again and don't let the memes rug you.",
      image: "/logoethbrussels.png",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ethglobal.com/showcase/rugstop-qoazr",
        },
        {
          title: "The Graph",
          icon: <Award className="h-4 w-4" />,
          href: "https://thegraph.com/",
        },
      ],
    },
    {
      title: "XRP Ledger",
      dates: "2024",
      location: "Paris, france",
      description:
        "At Bongo, we are redefining Mobile Money by providing a way transfer funds through SMS on top of the XRP Ledger Blockchain.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/BlockchainHackathons/BongoAfricaRWA",
        },
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/X1wFc1a9A38?si=6T4Z74L-ZjZr0AWi",
        },
      ],
    },
    {
      title: "H-W3B",
      dates: "2024",
      location: "Paris, france",
      description:
        "Mythril - Making Insurance Subscription Easier and Transparent!",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Marco75116/Mythril",
        },
        {
          title: "Tezos",
          icon: <Award className="h-4 w-4" />,
          href: "https://www.nomadic-labs.com/",
        },
      ],
    },
    {
      title: "ETHGlobal London",
      dates: "2024",
      location: "London, England",
      description:
        "Adaptum Finance is a CBBI based Cross-Chain & On-Chain DCA Platform with customised time intervals.",
      image: "/logoethlondon.png",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ethglobal.com/showcase/adaptum-finance-g7xxe",
        },
        {
          title: "Chainlink",
          icon: <Award className="h-4 w-4" />,
          href: "https://chain.link/",
        },
      ],
    },
    {
      title: "ETHGlobal Paris",
      dates: "2023",
      location: "Paris, france",
      description:
        "Poseidon Swap - Swap your tokens cross-chain at the best rate by avoiding high slippage and price impact.",
      image: "/logoethparis.png",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ethglobal.com/showcase/poseidon-swap-avdiu",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/BlockchainHackathons/EthGlobal2023",
        },
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=pJRJSQUpH8M&feature=youtu.be",
        },
        {
          title: "1inch Network",
          icon: <Award className="h-4 w-4" />,
          href: "https://1inch.io/fr/",
        },
      ],
    },
    {
      title: "Paris Blockchain Week Summit",
      dates: "2022",
      location: "Paris, france",
      description:
        "UNFUNGIBLE improves tickets in smartTickets with the help of NFT and allows payement in cryptocurrencies. ",
      image: "",
      links: [
        {
          title: "Post",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/marc-antoine-ourradour_blockchain-team-unfungible-activity-6920732515569692672-Xu7m?utm_source=share&utm_medium=member_desktop",
        },
        {
          title: "Dominance venture",
          icon: <Award className="h-4 w-4" />,
          href: "https://dominance.ventures/",
        },
      ],
    },
  ],
} as const;
