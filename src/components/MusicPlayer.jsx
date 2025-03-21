import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./MusicPlayer.css";

const MusicPlayer = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      className="music-player"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button 
        onClick={togglePlayPause} 
        className="play-btn"
        whileTap={{ scale: 0.8 }}
      >
        <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
      </motion.button>
      
      <div className="track-info">
        <span className="track-title">{title}</span>
        <div className="progress-bar">
          <motion.div 
            className="progress"
            style={{ width: `${progress}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
