import React, { useState, useRef } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, shares, channal, avatarSrc, song }) {
    const [isVidepPlaying, setIsVidepPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (isVidepPlaying) {
            videoRef.current.pause();
            setIsVidepPlaying(false);
        } else {
            videoRef.current.play();
            setIsVidepPlaying(true);
        }
    };
    return (
        <div className="videoCard">
            <VideoHeader />
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="videoCard__player"
                src={url}
                alt="IG Reel video"
                loop
            />
            <VideoFooter
                channal={channal}
                avatarSrc={avatarSrc}
                likes={likes}
                shares={shares}
                song={song}
            />
        </div>
    );
}

export default VideoCard;
