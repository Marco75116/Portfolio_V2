import { Icons } from "@/components/icons";
import { Award, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Marc",
  initials: "MA",
  url: "https://www.marc-antoineourradour.fr/",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  description:
    "Fullstack Blockchain Engineer. I like hacking and perfecting myself. Currently building ... 🛠",
  summary:
    "After purchasing in 2018 a Flux masternode like an investment, I dug into a lot of notions related to this new technology. Quicly, I decided to take my skills further by specializing in the blockchain in my engeneering school, at [ESILV](https://www.esilv.fr/en/programmes/master-degree-engineering/majors/fintech/). It didn't take much more than a [hackathon](#hackathons) win to decide to join professionally and dedicate myself 100% to the blockchain industry.",
  avatarUrl: "/me.jpg",
  skills: [
    "Subgraph",
    "Subsquid",
    "Next",
    "Elysia",
    "Foundry",
    "Wagmi.sh",
    "Typescript",
    "Solidity",
    "Python",
    "Postgres",
    "Redis",
    "BullMQ",
    "Docker",
    "EVM",
    "DEFI",
    "UniV3",
    "AI API",
  ],
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
      company: "UNCX Network",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Back End Developer",
      logoUrl: "/uncxnetwork_logo.jpeg",
      start: "2023",
      end: "",
      description:
        "-Power blockchain services, ensuring its security, efficiency and scalability. \n(+600M $ TVL). \n-[Telegram Bot](https://t.me/UNCXInfoBot) which retrieves data from over 14 contracts across 5 chains.\n (+93 groups integrated +68k members). \n-Run [+40 subgraphs](https://thegraph.com/explorer?search=UNCX).\n-Run [Squid's](https://www.sqd.dev/) EVM multichain indexers, combining on-chain and off-chain data.\n-Run Squid's SOLANA indexers.\n(Retrieve real-time data from Uniswap V4, V3, and V2, erc20 balances and states for multiple others smart contracts.)",
    },
    {
      company: "PyratzLabs",
      badges: [],
      href: "https://www.pyratzlabs.com/",
      location: "Remote",
      title: "Front-end Developer",
      logoUrl: "/pyratzlabs_logo.jpeg",
      start: "2022",
      end: "2023",
      description:
        "-Building and maintaining Tezos/EVM applications. Marketplace for utility nfts -  [Leverage yield farming](https://youtu.be/yeJi6pIHAzs?si=z5iOJFuD2sYIRMxh). \n-Coach during [tezos hackathons](https://www.linkedin.com/posts/nomadic-labs_hackathon-tezos-blockchain-activity-7049050354893606914-omZv?utm_source=share&utm_medium=member_desktop).",
    },
    {
      company: "Stoa COFI",
      badges: [],
      href: "https://www.cofi.money/",
      location: "Remote",
      title: "Full-stack Developer - Freelance",
      logoUrl: "/cofilogo.jpeg",
      start: "2021",
      end: "2022",
      description:
        "-Implementation of the front-end, back-end and indexer of an [EVM loan protocol](https://app.cofi.money/). \n-Integration of services : KYC - Account Abstraction - On/Off ramp.",
    },
  ],
  education: [
    {
      school: "Ecole Supérieur d'ingénieur Léonard de Vinci - La Défense",
      href: "https://www.esilv.fr/",
      degree: "Engeneering Degree",
      logoUrl: "/esilvlogo.png",
      description:
        "Blockchain programming, Cryptocurrency market, Cryptography, Web/Mobile Development, Machine Learning, Datascience and Statistics courses. Weeks training of Soft Skills, entrepreneurial projects.",
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
      href: "https://misti-doc-api.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Gateway to accurate and real-time on chain data. Misti is a powerful API built with Go & a webhook engine.",
      technologies: [
        "Subsquid",
        "Golang",
        "Next.js",
        "Nextra",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "authjs",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
      ],
      links: [
        {
          type: "Documentation",
          href: "https://misti-doc-api.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bannervolcano.webp",
      video: "",
    },
    {
      title: "UniMagnifier",
      href: "https://www.deepl.com/fr/translator#en/fr/coming%20soon%20new%20version/",
      dates: "2023",
      active: true,
      description:
        "Retrieve swaps activity on Uniswap, expose metadatas andanalyze trading performance + DeFi portfolio tracker.",
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
    {
      title: "Bot",
      href: "https://github.com/Marco75116/Bot-python-Dofus",
      dates: "2021",
      active: true,
      description:
        "This program automates a repetitive and time-consuming activity in the Dofus game through robotic process automation, incorporating advanced analysis and decision-making capabilities",
      technologies: [
        "Subsquid",
        "Golang",
        "Next.js",
        "Nextra",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "authjs",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
      ],
      links: [
        {
          type: "Documentation",
          href: "https://github.com/Marco75116/Bot-python-Dofus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dofuslogo.jpeg",
      video: "",
    },
  ],
  hackathons: [
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
