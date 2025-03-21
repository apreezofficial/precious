import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
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
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        autoPlay
      />
      <motion.button
        className="play-btn"
        whileTap={{ scale: 0.9 }}
        onClick={togglePlayPause}
      >
        <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
      </motion.button>
    </motion.div>
  );
};

export default MusicPlayer;
