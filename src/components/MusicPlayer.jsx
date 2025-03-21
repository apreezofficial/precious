import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // Online music URL
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    audioRef.current = new Audio(musicUrl);

    const updateProgress = () => {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
    
    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
      audioRef.current.pause();
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
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
        <span className="track-title">SoundHelix Song</span>
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
