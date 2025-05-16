"use client";

import Image from "next/image";
import { useState } from "react";

export default function Wish() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<
    { name: string; message: string; time: string }[]
  >([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    const newWish = {
      name,
      message,
      time: new Date().toLocaleString(),
    };

    setWishes([newWish, ...wishes]);
    setName("");
    setMessage("");
  };

  return (
    <div className="py-20 px-10 bg-neutral-200">
      <div className="flex justify-center mb-10 gap-4">
        <Image
          src="/bg.jpg"
          alt="Dapit"
          width={300}
          height={300}
          className="object-cover object-center rounded"
          priority
        />
      </div>

      <h2 className="text-center text-2xl text-neutral-800 mb-1">
        Ucapan dan Doa Restu
      </h2>
      <p className="text-center text-xs px-10 mb-8">
        Ucapkan Selamat dan Doa Restu Kepada Mempelai Untuk Hari Bahagia Mereka
        Melalui Kolom Berikut:
      </p>

      {/* Form */}
      <div className="border rounded-sm">
        <div className=" bg-neutral-800 p-4">
          <form onSubmit={handleSubmit} className="mx-auto mb-6 space-y-2 ">
            <input
              type="text"
              placeholder="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded border bg-white"
              required
            />
            <textarea
              placeholder="Ucapan & Doa"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded border h-24 bg-white"
              required
              maxLength={200}
            />
            <button
              type="submit"
              className="bg-white py-1 rounded-full w-1/3"
            >
              Kirim
            </button>
          </form>
        </div>

        <div className=" mx-auto h-60 overflow-y-auto">
          {wishes.map((wish, i) => (
            <div key={i} className="bg-white rounded px-4 py-2 shadow">
              <p className="text-sm font-semibold">{wish.name}</p>
              <p className="text-sm">{wish.message}</p>
              <p className="text-xs text-neutral-500 mt-1">{wish.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
