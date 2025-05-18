"use client";

import { Mail } from "lucide-react";

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
      <div className="p-4 mt-40">
        <h1 className="font-playfair font-semibold text-4xl mb-4 text-white text-shadow-zinc-800">
          Dapit & Pujit
        </h1>
        <p className="font-montserrat text-sm mb-6 text-white">
          Kami mengundang Bapak/Ibu/Saudara/i
        </p>
        <p className="font-montserrat text-sm font-semibold mb-4 text-white">
          Babin dan partner {guestName}
        </p>
        <button
          onClick={onOpenInvitation}
          className="text-xs font-merriweather px-2 py-1 bg-neutral-950 text-white rounded-full"
        >
          <Mail size={16} className="inline-block mr-1" />
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
