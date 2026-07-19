"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export default function LocationMap() {
  const { location, event } = weddingData;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(location.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard tidak tersedia, abaikan diam-diam
    }
  };

  return (
    <section className="bg-[#FDEEF0] px-6 py-16 text-[#4A1220]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mb-8 flex flex-col items-center text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#8A1F35]/70">
          Lokasi Acara
        </p>
        <h2 className="mt-2 font-script text-5xl text-[#8A1F35]">
          {location.venue}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto mb-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6"
      >
        <div className="flex-1 rounded-xl border border-[#C9A875] bg-[#5D1523] px-5 py-4 text-center">
          <p className="text-xs uppercase tracking-wide text-[#C9A875]">Akad</p>
          <p className="mt-1 text-sm text-[#F5E6DA]">{event.akadTime}</p>
        </div>
        <div className="flex-1 rounded-xl border border-[#C9A875] bg-[#5D1523] px-5 py-4 text-center">
          <p className="text-xs uppercase tracking-wide text-[#C9A875]">
            Resepsi
          </p>
          <p className="mt-1 text-sm text-[#F5E6DA]">{event.resepsiTime}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mx-auto max-w-md overflow-hidden rounded-xl border-2 border-[#C9A875]"
      >
        <iframe
          src={location.mapsEmbedUrl}
          width="100%"
          height="240"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi acara"
        />
      </motion.div>

      <div className="mx-auto mt-5 flex max-w-md flex-col items-center gap-4 text-center">
        <p className="text-sm text-[#4A1220]/80">{location.address}</p>

        <div className="flex gap-3">
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#8A1F35] px-5 py-2.5 text-sm font-semibold text-[#F5E6DA] transition-transform active:scale-95"
          >
            Buka di Maps
          </a>
          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center gap-2 rounded-full border border-[#8A1F35]/50 px-5 py-2.5 text-sm font-medium text-[#8A1F35] transition-transform active:scale-95"
          >
            {copied ? "Tersalin!" : "Salin Alamat"}
          </button>
        </div>
      </div>
    </section>
  );
}