"use client";

import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-20 px-10 bg-neutral-800 text-white">
      <div className="flex justify-center mb-10">
        <Image
          src="/bg.jpg"
          alt="Dapit"
          width={300}
          height={300}
          className="object-cover object-center rounded-t-full"
          priority
        />
      </div>

      <p className="font-merriweather text-center text-sm">
        Merupakan sebuah kehormatan dan kebahagiaan bagi kami jika Bapak/Ibu
        /Saudara/i berkenan hadir dan memberikan doa restu bagi kami.
      </p>
      <p className="text-center text-sm px-10 mb-10">Terima kasih.</p>

      <div className="flex flex-col items-center mt-40 pb-10">
        <p className="font-montserrat text-center italic text-xs px-10 mb-1">Created by Ravi Farhan</p>
        <button className="rounded-full shadow-md">
          <Link href="https://www.instagram.com/mravifarhan/">
            <Instagram size={18} className="inline-block" />
            <span className="font-montserrat text-xs ml-1">mravifarhan</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
