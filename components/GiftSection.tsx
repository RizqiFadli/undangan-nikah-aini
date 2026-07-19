"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Gift } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export default function GiftSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (number: string, index: number) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // clipboard tidak tersedia, abaikan diam-diam
    }
  };

  return (
    <section className="bg-[#5D1523] px-6 py-16 text-[#F5E6DA]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mb-8 flex flex-col items-center text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A875]">
          Tanda Kasih
        </p>
        <h2 className="mt-2 font-script text-5xl text-[#F5E6DA]">
          Amplop Digital
        </h2>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#F5E6DA]/70">
          Doa restu Anda adalah karunia yang paling berarti bagi kami. Namun
          jika ingin memberi tanda kasih, kami sediakan di bawah ini.
        </p>
      </motion.div>

      {!isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-[#C9A875] px-6 py-3 text-sm font-semibold text-[#4A1220] transition-transform active:scale-95"
          >
            <Gift className="h-4 w-4" />
            Buka Amplop
          </button>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-md flex-col gap-3"
          >
            {weddingData.bankAccounts.map((account, index) => (
              <div
                key={account.number}
                className="flex items-center justify-between rounded-xl border border-[#C9A875]/50 bg-[#FDEEF0]/5 px-5 py-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#C9A875]">
                    {account.bank}
                  </p>
                  <p className="mt-1 font-serif text-lg tracking-wide">
                    {account.number}
                  </p>
                  <p className="mt-0.5 text-xs text-[#F5E6DA]/60">
                    {account.name}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(account.number, index)}
                  aria-label="Salin nomor rekening"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A875]/50 text-[#C9A875] transition-colors hover:bg-[#C9A875]/10"
                >
                  {copiedIndex === index ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}