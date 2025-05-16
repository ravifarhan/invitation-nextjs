"use client";

import {  Instagram } from "lucide-react";
// import { motion } from "motion/react";
import Image from "next/image";

export default function Couple() {
  return (
    <div className="py-20 px-10 bg-neutral-200">
      <h2 className={`text-center text-4xl text-neutral-800 mb-12`}>
        The Couple
      </h2>
      <div className="flex justify-center mb-10 gap-4">
        <Image src="/bg.jpg" alt="Dapit" width={150} height={150} />
        <Image src="/bg.jpg" alt="Pujit" width={150} height={150} />
      </div>
      <div className="text-center">
        <h3 className={` text-xl font-semibold`}>Rahmaik Dapit</h3>
        <p className="text-sm">
          Putra kedua dari Bapak Arizal
        </p>
        <p className="text-sm">& Ibu Rina</p>
        <a href="https://www.instagram.com/rahmat.daviit/" target="_blank">
          <Instagram className="text-3xl inline-block" />
        </a>
      </div>
      <div className="text-center my-4">|</div>
      <div className="text-center">
        <h3 className={` text-xl font-semibold`}>Pujit Fuzira</h3>
        <p className="text-sm">Putri pertama dari Bapak</p>
        <p className="text-sm">& Ibu </p>
        <a href="https://www.instagram.com/pujaafzr__/" target="_blank">
          <Instagram className="text-3xl inline-block" />
        </a>
      </div>
    </div>
  );
}
