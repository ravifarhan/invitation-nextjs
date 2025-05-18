"use client";

import { Instagram } from "lucide-react";
// import { motion } from "motion/react";
import Image from "next/image";

export default function Couple() {
  return (
    <div className="py-20 px-10 bg-neutral-200">
      <h2 className="font-montserrat text-center text-4xl text-neutral-800 mb-12">
        The Couple
      </h2>
      <div className="flex justify-center mb-10 gap-4">
        <Image src="/bg.jpg" alt="Dapit" width={150} height={150} />
        <Image src="/bg.jpg" alt="Pujit" width={150} height={150} />
      </div>
      <div className="text-center">
        <h3 className="font-montserrat text-xl font-semibold">Rahmaik Dapit</h3>
        <p className="font-merriweather text-sm">Putra kedua dari Bapak Arizal</p>
        <p className="font-merriweather text-sm">& Ibu Rina</p>
        <button className="rounded-full mt-2 shadow-md px-2 py-1 bg-neutral-950 text-white">
          <a href="https://www.instagram.com/rahmat.daviit/" className="flex">
            <Instagram size={18} className="inline-block" />
            <span className="font-montserrat text-xs ml-1">rahmat.daviit</span>
          </a>
        </button>
      </div>
      <div className="text-center my-4">|</div>
      <div className="text-center">
        <h3 className="font-montserrat text-xl font-semibold">Pujit Fuzira</h3>
        <p className="font-merriweather text-sm">Putri pertama dari Bapak</p>
        <p className="font-merriweather text-sm">& Ibu </p>
        <button className="rounded-full mt-2 shadow-md px-2 py-1 bg-neutral-950 text-white">
          <a href="https://www.instagram.com/pujaafzr__/" className="flex">
            <Instagram size={18} className="inline-block" />
            <span className="font-montserrat text-xs ml-1">pujaafzr__</span>
          </a>
        </button>
      </div>
    </div>
  );
}
