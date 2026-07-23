"use client";

import { useState } from "react";
import { Copy, Check, Link2 } from "lucide-react";
import { weddingData } from "@/data/weddingData";
import { SITE_URL } from "@/lib/config";

interface GeneratedLink {
  name: string;
  url: string;
  message: string;
}

export default function GeneratorPage() {
  const [rawNames, setRawNames] = useState("");
  const [links, setLinks] = useState<GeneratedLink[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleGenerate = () => {
    const names = rawNames
      .split("\n")
      .map((n) => n.trim())
      .filter((n) => n.length > 0);

    const generated = names.map((name) => {
      const url = `${SITE_URL}/?to=${encodeURIComponent(name)}`;
      const message = buildWhatsappMessage(name, url);
      return { name, url, message };
    });

    setLinks(generated);
  };

  const buildWhatsappMessage = (name: string, url: string) => {
    const { bride, groom } = weddingData;
    return `Assalamualaikum Warahmatullahi Wabarakatuh

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i ${name} untuk menghadiri acara pernikahan kami.

${bride.name} & ${groom.name}

Berikut link undangan kami, untuk info lengkap acara bisa kunjungi:
${url}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.

Terima kasih.`;
  };

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // clipboard tidak tersedia, abaikan diam-diam
    }
  };

  return (
    <main className="min-h-screen bg-[#FDEEF0] px-4 py-10 text-[#4A1220]">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8A1F35]/70">
            Tools Internal
          </p>
          <h1 className="mt-2 font-script text-4xl text-[#8A1F35]">
            Generator Link Undangan
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#4A1220]/70">
            Paste daftar nama tamu (satu nama per baris), lalu klik Generate
            untuk membuat link undangan personal untuk masing-masing tamu.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-[#C9A875] bg-[#5D1523] p-5">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#C9A875]">
            Daftar Nama Tamu (satu nama per baris)
          </label>
          <textarea
            value={rawNames}
            onChange={(e) => setRawNames(e.target.value)}
            rows={8}
            placeholder={"Bapak Ahmad\nIbu Siti\nKeluarga Besar Sragi\nBudi Santoso"}
            className="w-full resize-none rounded-lg border border-[#C9A875]/40 bg-[#FDEEF0]/5 px-4 py-3 text-sm text-[#F5E6DA] placeholder:text-[#F5E6DA]/40 outline-none focus:border-[#C9A875]"
          />
          <button
            onClick={handleGenerate}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A875] px-6 py-3 text-sm font-semibold text-[#4A1220] transition-transform active:scale-95"
          >
            <Link2 className="h-4 w-4" />
            Generate Link
          </button>
        </div>

        {links.length > 0 && (
          <div className="mt-8 flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wide text-[#4A1220]/60">
              {links.length} link berhasil dibuat
            </p>

            {links.map((link) => (
              <div
                key={link.name}
                className="rounded-xl border border-[#C9A875]/50 bg-white px-5 py-4"
              >
                <p className="text-sm font-semibold text-[#8A1F35]">
                  {link.name}
                </p>
                <p className="mt-1 break-all text-xs text-[#4A1220]/70">
                  {link.url}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCopy(link.url, `url-${link.name}`)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#8A1F35]/40 px-3 py-1.5 text-xs font-medium text-[#8A1F35] transition-colors hover:bg-[#8A1F35]/5"
                  >
                    {copiedKey === `url-${link.name}` ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    Salin Link
                  </button>

                  <button
                    onClick={() =>
                      handleCopy(link.message, `msg-${link.name}`)
                    }
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#8A1F35] px-3 py-1.5 text-xs font-medium text-[#F5E6DA] transition-colors hover:bg-[#8A1F35]/90"
                  >
                    {copiedKey === `msg-${link.name}` ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    Salin Pesan WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}