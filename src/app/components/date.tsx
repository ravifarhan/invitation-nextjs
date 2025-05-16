"use client";

import { MapPin } from "lucide-react";
// import { motion } from "motion/react";
import Image from "next/image";

export default function Date() {
  return (
    <div className="py-20 px-10 bg-neutral-200">
      <h2 className={`text-center text-4xl text-neutral-800 mb-12`}>
        Save The Date
      </h2>
      <div className="bg-neutral-800 px-10 py-8 rounded-sm mb-10">
        <div className="flex justify-center">
          <Image
            src="/bg.jpg"
            alt="Dapit"
            width={500}
            height={500}
            className="w-full h-auto rounded"
          />
        </div>
        <div className="text-center text-white">
          <div className="text-center my-4">|</div>
          <h3 className={` text-xl font-semibold`}>Akad Nikah</h3>
          <p className="text-xs">Sabtu, 20 April 2026</p>
          <p className="text-xs">08.00 - 09.00 WIB</p>
          <p className="text-xs">Masjid Al-Ittihad Palupuah</p>
          <p className="text-xs">
            Jl. Raya Palupuah No.1, Kecamatan Palupuah, Kabupaten Agam, Sumatera
            Barat, 21521
          </p>
          <button className="rounded-full mt-2 shadow-md px-2 py-0.5 bg-neutral-950">
            <a href="https://maps.app.goo.gl/npK6574Q6kFXmnfg6" target="_blank">
              <MapPin size={18} className="inline-block" />
              <span className="text-xs ml-1">Lihat Lokasi</span>
            </a>
          </button>
        </div>
      </div>
      <div className="bg-neutral-800 px-10 py-8 rounded-sm">
        <div className="flex justify-center">
          <Image
            src="/bg.jpg"
            alt="Dapit"
            width={500}
            height={500}
            className="w-full h-auto rounded"
          />
        </div>
        <div className="text-center text-white">
          <div className="text-center my-4">|</div>
          <h3 className={` text-xl font-semibold`}>Resepsi</h3>
          <p className="text-xs">Minggu, 21 April 2026</p>
          <p className="text-xs">10.00 WIB - 20.00 WIB</p>
          <p className="text-xs">Rumah Dapik</p>
          <p className="text-xs">
            Jl. Raya Sungaipua No.1, Kecamatan Sungaipua Kabupaten Agam, Sumatera
            Barat, 26181
          </p>
          <button className="rounded-full mt-2 shadow-md px-2 py-0.5 bg-neutral-950">
            <a href="https://maps.app.goo.gl/npK6574Q6kFXmnfg6" target="_blank">
              <MapPin size={18} className="inline-block" />
              <span className="text-xs ml-1">Lihat Lokasi</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
