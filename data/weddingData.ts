// src/data/weddingData.ts
// Semua konten undangan disimpan di sini biar gampang diedit tanpa bongkar komponen

export interface BankAccount {
  bank: string;
  number: string;
  name: string;
}

export interface WeddingData {
  bride: {
    name: string;
    fullName: string;
    parents: string;
    instagram?: string;
    photo: string;
  };
    groom: {
    name: string;
    fullName: string;
    parents: string;
    instagram?: string;
    photo: string;
  };
  event: {
    date: string; // format ISO: "2026-09-20T09:00:00"
    akadTime: string;
    resepsiTime: string;
  };
  location: {
    venue: string;
    address: string;
    mapsUrl: string;
    mapsEmbedUrl: string; // untuk iframe embed
  };
  gallery: string[];
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
  bride: {
    name: "Aini",
    fullName: "Nur Ainiyatur Rochmah",
    parents: "Putri dari Bapak Muhyidin & Ibu Karyi",
    instagram: "@ainiyatur_r",
    photo: "/images/bride.jpg",
  },
    groom: {
    name: "Musyafa'",
    fullName: "Muhammad Musyafa'",
    parents: "Putra dari Bapak Diyono & Ibu Malikhah",
    instagram: "@muhammasyaf",
    photo: "/images/groom.jpg",
  },
  event: {
    date: "2026-09-20T12:00:00",
    akadTime: "07:00 WIB",
    resepsiTime: "10:00 - 12:00 WIB",
  },
  location: {
  venue: "Rumah mempelai wanita",
  address: "RT 01/RW 11, Dk. Tempuran, Ds. Krasakageng, Kec. Sragi",
  mapsUrl: "https://maps.app.goo.gl/RATnh9ynMZzievUc8",
  mapsEmbedUrl: "https://www.google.com/maps?q=-6.9498755,109.5201137&z=17&output=embed",
},
  gallery: [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
  ],
  bankAccounts: [
    { bank: "BRI", number: "006801031948536", name: "Muhammad Musyafa" },
    { bank: "Shopeepay", number: "085643589320", name: "" },
  ],
  music: {
    src: "/music/backsound.mp3",
    title: "Terpukau - Astrid",
  },
  quote: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا",
    translation:
      "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya.",
    source: "QS. Ar-Rum: 21",
  },
};