'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';

interface HeroVideoProps {
    title?: string;
    subtitle?: string;
    thumbnail: string;
    videoUrl: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
    title = 'Cinematic Stories',
    subtitle = 'Visual storytelling through film and motion',
    thumbnail,
    videoUrl,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const isEmbed = videoUrl.includes('youtube') || videoUrl.includes('youtu.be') || videoUrl.includes('vimeo');

    const getEmbedUrl = (url: string) => {
        // YouTube watch URL
        if (url.includes('youtube.com/watch')) {
            const videoId = url.split('v=')[1]?.split('&')[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&mute=1`;
        }

        // YouTube short URL
        if (url.includes('youtu.be')) {
            const videoId = url.split('youtu.be/')[1];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&mute=1`;
        }

        // Vimeo
        if (url.includes('vimeo.com')) {
            const videoId = url.split('/').pop();
            return `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1`;
        }

        return url;
    };

    return (
        <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-black bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100">
            {/* VIDEO / IMAGE */}
            <div className="absolute inset-0">
                {isPlaying ? (
                    isEmbed ? (
                        <iframe
                            key={videoUrl}
                            src={getEmbedUrl(videoUrl)}
                            className="h-full w-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <video src={videoUrl} className="h-full w-full object-cover" autoPlay muted controls playsInline />
                    )
                ) : (
                    <>
                        <img src={thumbnail} alt="Hero Video" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/50" />
                    </>
                )}
            </div>

            {/* CONTENT */}
            {!isPlaying && (
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
                    <div>
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary transition hover:scale-110"
                            aria-label="Play video"
                        >
                            <Play className="ml-1 text-white" size={32} />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroVideo;
