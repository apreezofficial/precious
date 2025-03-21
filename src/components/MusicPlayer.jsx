import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play(); // Autoplay when component loads
    }

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
      className="music-player"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" autoPlay />

      <motion.button
        onClick={togglePlayPause}
        className="play-btn"
        whileTap={{ scale: 0.8 }}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </motion.button>

      <div className="track-info">
        <span className="track-title">Now Playing: SoundHelix Track</span>
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
