"use client";

import { Mail } from "lucide-react";
import { motion } from "motion/react"
import styles from "../page.module.css";

export type CoverPageProps = {
  guestName: string;
  onOpenInvitation: () => void;
};

export default function CoverPage({
  guestName,
  onOpenInvitation,
}: CoverPageProps) {
  return (
    <div className="min-h-screen mx-auto flex flex-col items-center justify-center text-center bg-cover bg-center  bg-[url('/bg.jpg')] mask-t-from-70% mask-b-from-70%">
      <div className="p-4  mt-40">
        <motion.h1
          className={`${styles.h1} text-5xl mb-4 text-white text-shadow-zinc-800`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Dapit & Pujit
        </motion.h1>
        <p className="font-montserrat text-xs mb-6 text-white">
          Kami mengundang Bapak/Ibu/Saudara/i
        </p>
        <p className="font-montserrat text-sm font-semibold mb-4 text-white">
          Babin dan partner {guestName}
        </p>
        <button
          onClick={onOpenInvitation}
          className="text-xs font-montserrat px-2 py-1 bg-neutral-950 text-white rounded-full cursor-pointer"
        >
          <Mail size={16} className="inline-block mr-1" />
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
