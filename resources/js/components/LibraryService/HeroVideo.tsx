"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface HeroVideoProps {
  title?: string;
  subtitle?: string;
  thumbnail: string;
  videoUrl: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  title = "Cinematic Stories",
  subtitle = "Visual storytelling through film and motion",
  thumbnail,
  videoUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const isEmbed =
    videoUrl.includes("youtube") || videoUrl.includes("vimeo");

  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube")) {
      return url.includes("?")
        ? `${url}&autoplay=1&rel=0`
        : `${url}?autoplay=1&rel=0`;
    }
    if (url.includes("vimeo")) {
      return `${url}?autoplay=1`;
    }
    return url;
  };

  return (
    <section className="relative w-full h-full bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 flex items-center justify-center w-full bg-black overflow-hidden">
      {/* VIDEO / IMAGE */}
      <div className="absolute inset-0">
        {isPlaying ? (
          isEmbed ? (
            <iframe
              src={getEmbedUrl(videoUrl)}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              controls
              playsInline
            />
          )
        ) : (
          <>
            <img
              src={thumbnail}
              alt="Hero Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
      </div>

      {/* CONTENT */}
      {!isPlaying && (
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div>
            {/* <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
              {subtitle}
            </p> */}

            <button
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition"
              aria-label="Play video"
            >
              <Play className="text-white ml-1" size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroVideo;
