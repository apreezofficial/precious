import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import song from "../assets/Ogayoloo-by-Dr-Paul-Enenche.mp3"; // Import your audio file
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      setTimeout(() => {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("Autoplay failed:", err));
      }, 2000); // Auto-play after 2 seconds
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error("Playback error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      className={`music-player ${isPlaying ? "playing" : ""}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileDrag={{ scale: 1.1 }}
    >
      <audio ref={audioRef} src={song} preload="auto" />
      <motion.button className="play-btn" whileTap={{ scale: 0.9 }} onClick={togglePlayPause}>
        <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
      </motion.button>
    </motion.div>
  );
};

export default MusicPlayer;
