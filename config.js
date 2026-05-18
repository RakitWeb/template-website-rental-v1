/**
 * ============================================================
 *  ARIF CAR RENTAL — Site Configuration
 *  Edit file ini untuk mengubah konten website tanpa menyentuh
 *  kode HTML/CSS.
 * ============================================================
 */
const SITE_CONFIG = {

  // ── Identitas Bisnis ──────────────────────────────────────
  businessName:  "ARIF CAR RENTAL",
  tagline:       "",
  description:   "Rental mobil terpercaya di Ende, Flores. Armada terawat, sopir berpengalaman, harga transparan. Siap antar jemput bandara & wisata ke seluruh penjuru Nusa Tenggara Timur.",

  // ── SEO / Browser Tab ─────────────────────────────────────
  siteTitle:     "ARIF CAR RENTAL – Ende, Flores, NTT | Sewa Mobil Profesional",
  faviconUrl:    "", // URL favicon, cth: "https://example.com/favicon.ico" atau path lokal "./favicon.ico"

  // ── Logo ──────────────────────────────────────────────────
  // Kosongkan logoUrl untuk pakai teks (businessName). Isi URL untuk pakai gambar.
  logoUrl:       "", // cth: "./logo.png" atau "https://cdn.example.com/logo.svg"
  logoAlt:       "Arif Car Rental Logo",
  logoHeight:    "40", // tinggi logo dalam px (hanya berlaku jika logoUrl diisi)

  // ── Kontak ────────────────────────────────────────────────
  whatsapp:      "6281234567890", // format: kode negara + nomor, tanpa + atau spasi
  whatsappDisplay: "+62 812-3456-7890",
  address:       "Ende, Flores, Nusa Tenggara Timur",
  mapsEmbed:     "https://maps.google.com/maps?q=-8.8461275,121.653883&z=15&output=embed",
  operationalHours: "Setiap hari, 24 jam siap melayani",

  // ── Hero Section ──────────────────────────────────────────
  heroTitle:     "Jelajahi <em class=\"not-italic text-[#E8B84B]\">Flores</em><br>dengan Nyaman &<br>Aman Bersama Kami",
  heroBgImage:   "https://img.magnific.com/foto-gratis/matahari-terbit-di-atas-kabut-pagi-di-phu-lang-ka-phayao-di-thailand_335224-803.jpg?semt=ais_hybrid&w=740&q=80",

  // ── Stats (Hero) ──────────────────────────────────────────
  stats: [
    { value: "200+", label: "Pelanggan Puas" },
    { value: "10+",  label: "Armada Siap"    },
    { value: "4.9★", label: "Rating Google"  },
  ],

  // ── Armada ────────────────────────────────────────────────
  fleet: [
    {
      name:        "Toyota Fortuner",
      description: "SUV premium · 7 penumpang · AC dingin",
      price:       900000,
      icon:        "car",   // dipakai jika imageUrl kosong
      imageUrl:    "",      // cth: "./img/fortuner.jpg" atau URL eksternal
    },
    {
      name:        "Toyota Avanza",
      description: "MPV keluarga · 7 penumpang · irit BBM",
      price:       550000,
      icon:        "car",
      imageUrl:    "",
    },
    {
      name:        "Hiace Premio",
      description: "Minibus · 14 penumpang · perjalanan grup",
      price:       1200000,
      icon:        "bus",
      imageUrl:    "",
    },
  ],

  // ── Destinasi ─────────────────────────────────────────────
  destinations: [
    {
      name:        "Danau Kelimutu",
      description: "Tiga danau kawah dengan warna berbeda di puncak gunung berapi Ende.",
      icon:        "mountain",
    },
    {
      name:        "Komodo & Labuan Bajo",
      description: "Habitat asli komodo, snorkeling, dan sunset terbaik di Indonesia.",
      icon:        "binoculars",
    },
    {
      name:        "17 Pulau Riung",
      description: "Gugusan pulau kecil dengan air jernih dan terumbu karang yang indah.",
      icon:        "waves",
    },
  ],

  // ── Testimoni ─────────────────────────────────────────────
  testimonials: [
    { text: "Pelayanan ramah, mobil bersih, perjalanan ke Kelimutu sangat nyaman. Sopirnya juga tahu banyak soal Flores!", author: "Rizky", city: "Jakarta" },
    { text: "Harga sesuai, tidak ada biaya tersembunyi. Kami sewa Hiace untuk rombongan 12 orang, sangat puas!", author: "Dewi", city: "Surabaya" },
    { text: "Antar jemput bandara tepat waktu. Fortuner-nya nyaman banget buat jalan ke Labuan Bajo. Recommended!", author: "Budi", city: "Bali" },
    { text: "Sopir sangat profesional dan sabar. Kami keliling Flores 4 hari, semua destinasi tercapai dengan nyaman.", author: "Sari", city: "Bandung" },
    { text: "Booking mudah via WhatsApp, respon cepat. Mobilnya bersih dan terawat. Pasti balik lagi ke Flores!", author: "Hendra", city: "Makassar" },
  ],

  // ── Footer ────────────────────────────────────────────────
  footerCopyright: "© 2025 Arif Car Rental — Sewa Mobil Ende, Flores, NTT",

  // ── Galeri ────────────────────────────────────────────────
  // cat: "armada" | "wisata" | "pelanggan"
  gallery: [
    { url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format", alt: "Toyota Fortuner",  cat: "armada"    },
    { url: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&auto=format", alt: "Danau Kelimutu",   cat: "wisata"    },
    { url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format", alt: "Perjalanan Wisata",cat: "pelanggan" },
    { url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&auto=format", alt: "Toyota Avanza",    cat: "armada"    },
    { url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format", alt: "Labuan Bajo",      cat: "wisata"    },
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format", alt: "Wisata Flores",    cat: "pelanggan" },
    { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format", alt: "Hiace Premio",     cat: "armada"    },
    { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format", alt: "17 Pulau Riung",   cat: "wisata"    },
  ],

};
