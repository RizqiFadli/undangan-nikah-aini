"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import { FloralSprig } from "@/components/FloralOrnament";

function getTimeLeft(targetDate: string) {
  const total = new Date(targetDate).getTime() - Date.now();
  const clamped = Math.max(total, 0);
  return {
    total: clamped,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(weddingData.event.date)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingData.event.date));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="relative flex flex-col items-center gap-6 overflow-hidden bg-[#FDEEF0] px-6 py-16 text-[#4A1220]">
      <FloralSprig className="absolute left-3 top-3 h-14 w-14" />
      <FloralSprig className="absolute right-3 top-3 h-14 w-14 -scale-x-100" />
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="font-script text-5xl text-[#8A1F35]"
      >
        Counting Days
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative rounded-[36px] border-2 border-[#C9A875] px-6 py-7"
      >
        {/* ornamen sudut frame */}
        <span className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full border border-[#C9A875] bg-[#FDEEF0]" />
        <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full border border-[#C9A875] bg-[#FDEEF0]" />
        <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-full border border-[#C9A875] bg-[#FDEEF0]" />
        <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 rounded-full border border-[#C9A875] bg-[#FDEEF0]" />

        <div className="flex gap-4">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <span className="font-serif text-3xl font-bold tabular-nums text-[#8A1F35]">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-wide text-[#4A1220]/60">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <a
        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
          "Pernikahan " + weddingData.groom.name + " & " + weddingData.bride.name
        )}&dates=${weddingData.event.date.replace(/[-:]/g, "").split(".")[0]}Z/${weddingData.event.date.replace(/[-:]/g, "").split(".")[0]}Z`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 rounded-full border border-[#C9A875] px-5 py-2 text-xs font-medium tracking-wide text-[#8A1F35] transition-colors hover:bg-[#C9A875]/10"
      >
        + Tambah ke Kalender
      </a>
    </section>
  );
}