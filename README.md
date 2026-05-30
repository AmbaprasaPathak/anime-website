# 🎌 Animix — Anime Streaming & Discovery App

A React web app for discovering and streaming anime — browse recent releases, popular titles, and dubbed anime, all in one place. Built with the Consumet API (GogoAnime), React Router, and infinite scroll.

🌐 **Live Demo:** [animix.netlify.app](https://animix.netlify.app)

---

## 📸 Overview

Animix lets users search for any anime, browse by category (recent, popular, dub), view episode details, and stream episodes directly in the browser. The app uses the Consumet GogoAnime API for real-time data and supports infinite scroll for a seamless browsing experience.

---

## ✨ Features

- 🔍 **Live search** — real-time anime search with instant results
- 📺 **Episode streaming** — watch episodes directly in the app
- 🔥 **Popular anime** — browse trending titles with infinite scroll
- 🆕 **Recent releases** — latest sub and dub episodes
- 🗣️ **Dub anime** — dedicated dubbed anime section
- 📄 **Anime detail pages** — synopsis, episode list, and metadata
- ♾️ **Infinite scroll** — auto-loads more content as you scroll
- 📱 **Responsive UI** — works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router v6 |
| HTTP Client | Axios |
| Infinite Scroll | react-infinite-scroll-component |
| SEO | React Helmet |
| Styling | CSS + Bootstrap |
| API | Consumet API (GogoAnime) |
| Deployment | Netlify |

---

## 📁 Project Structure

```
my-anime/
├── src/
│   ├── Components/
│   │   ├── Header.js        # Nav bar with live search
│   │   ├── Card.js          # Anime card component
│   │   ├── SearchJSX.js     # Search results overlay
│   │   └── Lastwatch.js     # Recently watched
│   ├── Pages/
│   │   ├── RecentAnime.js   # Home — latest releases
│   │   ├── Popular.js       # Popular anime page
│   │   ├── DubAnime.js      # Dubbed anime page
│   │   ├── Details.js       # Anime detail + episode list
│   │   └── Stream.js        # Episode player
│   ├── utils/
│   │   └── hooks.js         # Custom hook: auto-fetch on short content
│   ├── App.js               # Root component + routing
│   └── App.css              # Global styles
└── public/
    └── index.html
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/anime-website
cd anime-website/my-anime

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🔌 API

This project uses the [Consumet API](https://github.com/consumet/api.consumet.org) — an open-source anime/manga API.

| Endpoint | Description |
|---|---|
| `/recent-release` | Latest sub episodes |
| `/recent-release?type=2` | Latest dub episodes |
| `/popular` | Trending anime |
| `/search?keyw=` | Search by keyword |

---

## 🧠 What I Built

- **Custom infinite scroll hook** (`useFetchInitialData`) — auto-triggers data fetch when content height is shorter than viewport, preventing blank screens on large monitors
- **Live search with overlay** — searches as user types, clears on navigation
- **Unified data flow** — all fetching in `App.js`, passed as props for clean component separation
- **Episode streaming page** — embeds the GogoAnime video player via route params

---

## 🌐 Deployment

Deployed on Netlify with a `_redirects` file to handle client-side routing:

```
/*  /index.html  200
```

---

## 📄 License

[MIT](LICENSE)
