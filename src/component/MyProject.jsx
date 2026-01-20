import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Board from "../playgame/Board";

/* ================================
   MAIN
================================ */
export default function MyProject() {
  const [screen, setScreen] = useState("menu");

  if (screen === "game") return <GameScreen onClose={() => setScreen("menu")} />;
  if (screen === "movie")
    return (
      <IframeScreen
        url="https://watchmoving.netlify.app/"
        onClose={() => setScreen("menu")}
      />
    );
  if (screen === "shopping")
    return (
      <IframeScreen
        url="https://shoppingstorefakeapi.netlify.app/"
        onClose={() => setScreen("menu")}
      />
    );
  if (screen === "youtube")
    return <YoutubeScreen onClose={() => setScreen("menu")} />;

  return <MenuScreen setScreen={setScreen} />;
}

/* ================================
   TOP BAR
================================ */
function TopBar({ onClose }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setTime(d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-5 bg-gray-100 flex items-center px-2 text-[10px] z-50">
      {onClose && (
        <button
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-red-500 text-white flex items-center justify-center"
        >
          ×
        </button>
      )}
      <div className="ml-auto flex gap-2 text-black">
        <span>{time}</span>
        <span>📶</span>
        <span>🔋</span>
      </div>
    </div>
  );
}

/* ================================
   MENU
================================ */
function MenuScreen({ setScreen }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1 }
    );
  }, []);

  const items = [
    { title: "🎮 Game", key: "game" },
    { title: "🎬 Movie", key: "movie" },
    { title: "🛒 Shopping", key: "shopping" },
    { title: "▶ YouTube", key: "youtube" },
  ];

  return (
    <div className="relative w-full h-full bg-white flex items-center justify-center">
      <TopBar />
      <div ref={ref} className="grid grid-cols-2 gap-2 mt-6">
        {items.map((i) => (
          <div
            key={i.key}
            className="border rounded-lg p-2 bg-gray-50 text-center"
          >
            <p className="text-black text-xs">{i.title}</p>
            <button
              onClick={() => setScreen(i.key)}
              className="mt-2 text-[10px] bg-green-500 text-white px-3 py-1 rounded"
            >
              OPEN
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================
   GAME
================================ */
function GameScreen({ onClose }) {
  return (
    <div className="relative w-full h-full bg-white flex items-center justify-center">
      <TopBar onClose={onClose} />
      <div className="scale-[0.55] mt-5">
        <Board />
      </div>
    </div>
  );
}

/* ================================
   YOUTUBE CLONE
================================ */
const API_KEY = "YOUR_YOUTUBE_API_KEY";

function YoutubeScreen({ onClose }) {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(null);

  const search = async () => {
    if (!query) return;

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=8&q=${query}&key=${API_KEY}`
    );
    const data = await res.json();
    setVideos(data.items || []);
    setCurrent(null);
  };

  return (
    <div className="relative w-full h-full bg-black text-white pt-5">
      <TopBar onClose={onClose} />

      {/* SEARCH */}
      <div className="flex items-center gap-2 px-2 mt-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search YouTube"
          className="flex-1 px-2 py-1 text-black text-xs rounded"
        />
        <button
          onClick={search}
          className="bg-gray-700 px-3 py-1 text-xs rounded"
        >
          🔍
        </button>
      </div>

      {/* PLAYER */}
      {current && (
        <div className="mt-2 w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${current}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* LIST */}
      <div className="grid grid-cols-2 gap-2 p-2">
        {videos.map((v) => (
          <div
            key={v.id.videoId}
            onClick={() => setCurrent(v.id.videoId)}
            className="cursor-pointer"
          >
            <img
              src={v.snippet.thumbnails.medium.url}
              className="rounded"
            />
            <p className="text-[10px] mt-1 line-clamp-2">
              {v.snippet.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================
   IFRAME
================================ */
function IframeScreen({ url, onClose }) {
  return (
    <div className="relative w-full h-full bg-black">
      <TopBar onClose={onClose} />
      <iframe
        src={url}
        className="w-full h-full pt-5 border-0"
        allowFullScreen
      />
    </div>
  );
}
