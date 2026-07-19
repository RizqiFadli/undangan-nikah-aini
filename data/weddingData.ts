// src/data/weddingData.ts
// Semua konten undangan disimpan di sini biar gampang diedit tanpa bongkar komponen

export interface BankAccount {
  bank: string;
  number: string;
  name: string;
}

export interface WeddingData {
  groom: {
    name: string;
    fullName: string;
    parents: string;
    instagram?: string;
  };
  bride: {
    name: string;
    fullName: string;
    parents: string;
    instagram?: string;
  };
  event: {
    date: string; // format ISO: "2026-09-20T09:00:00" — dipakai untuk countdown & format hari/tanggal
    akadTime: string;
    resepsiTime: string;
    ramahTamahTime: string;
  };
  location: {
    venue: string;
    address: string;
    mapsUrl: string;
    mapsEmbedUrl: string;
  };
  bankAccounts: BankAccount[];
  music: {
    src: string;
    title: string;
  };
  quote: {
    arabic: string;
    translation: string;
    source: string;
  };
}

export const weddingData: WeddingData = {
  groom: {
    name: "Musyafa'",
    fullName: "Musyafa' Lengkap",
    parents: "Putra dari Bapak ... & Ibu ...",
    instagram: "@username_pria",
  },
  bride: {
    name: "Aini",
    fullName: "Aini Lengkap",
    parents: "Putri dari Bapak ... & Ibu ...",
    instagram: "@username_wanita",
  },
  event: {
    date: "2026-09-20T09:00:00",
    akadTime: "08:00 - 09:00 WIB",
    resepsiTime: "11:00 - 14:00 WIB",
    ramahTamahTime: "14:00 - 16:00 WIB",
  },
  location: {
    venue: "Rumah mempelai wanita",
    address: "RT 01/RW 11, Dk. Tempuran, Ds. Krasakageng, Kec. Sragi",
    mapsUrl: "https://maps.app.goo.gl/RATnh9ynMZzievUc8",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=-6.9498755,109.5201137&z=17&output=embed",
  },
  bankAccounts: [
    { bank: "BCA", number: "1234567890", name: "Musyafa'" },
    { bank: "Mandiri", number: "0987654321", name: "Aini" },
  ],
  music: {
    src: "/music/backsound.mp3",
    title: "Judul Lagu - Penyanyi",
  },
  quote: {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا",
    translation:
      "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya.",
    source: "QS. Ar-Rum: 21",
  },
};

// Helper untuk format hari & tanggal dalam Bahasa Indonesia
// Contoh output: "Minggu, 20 September 2026"
export function formatEventDayDate(isoDate: string): string {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}