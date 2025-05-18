"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import CoverPage from "./components/cover";
import Header from "./components/header";
import Couple from "./components/couple";
import Story from "./components/story";
import Date from "./components/date";
import Moment from "./components/moment";
import Wish from "./components/wish";
import Footer from "./components/footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [guestName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err: string) => {
            console.warn("Audio play blocked:", err);
          });
      }
    }, 500);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <audio ref={audioRef} src="/perfect.mp3" loop preload="auto" />
      {!isOpen ? (
        <CoverPage
          guestName={guestName}
          onOpenInvitation={handleOpenInvitation}
        />
      ) : (
      <div className="mx-auto">
        <div className="fixed z-50 bottom-5">
          <button
            onClick={toggleMusic}
            className="bg-white/40 backdrop-blur-sm p-1 ml-4 rounded-full shadow-md"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>

        <Header />
        <Couple />
        <Story />
        <Date />
        <Moment />
        <Wish />
        <Footer />
      </div>
      )}
    </div>
  );
}
