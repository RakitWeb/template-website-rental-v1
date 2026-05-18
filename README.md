# Arif Car Rental — Website Template

Template website satu halaman untuk bisnis rental mobil, dibangun dengan HTML + Tailwind CSS v4 (browser CDN) + Lucide Icons. Tidak memerlukan build tool atau framework — cukup buka `index.html` di browser.

---

## Struktur File

```
arif-car-rental/
├── index.html       # Halaman utama (jangan diedit langsung)
├── config.js        # Konfigurasi konten — edit di sini
├── img/             # Folder untuk foto lokal
└── README.md
```

---

## Cara Setup

### 1. Edit `config.js`

Semua konten website dikontrol dari satu file ini. Tidak perlu menyentuh `index.html`.

#### Identitas Bisnis
```js
businessName:  "ARIF CAR RENTAL",
tagline:       "Ende · Flores · NTT",
siteTitle:     "ARIF CAR RENTAL – Ende, Flores, NTT | Sewa Mobil Profesional",
faviconUrl:    "./favicon.ico",  // kosongkan jika tidak ada
```

#### Logo
```js
logoUrl:    "",           // kosong = pakai teks businessName
logoUrl:    "./img/logo.png",  // isi = pakai gambar
logoHeight: "40",         // tinggi logo dalam px
```

#### Kontak & Lokasi
```js
whatsapp:         "6281234567890",   // kode negara + nomor, tanpa + atau spasi
whatsappDisplay:  "+62 812-3456-7890",
address:          "Ende, Flores, NTT",
mapsEmbed:        "https://maps.google.com/maps?q=...",  // URL embed Google Maps
operationalHours: "Setiap hari, 24 jam siap melayani",
```

> Cara dapat URL embed Maps: Google Maps → Share → Embed a map → salin src dari iframe.

#### Hero
```js
heroTitle:   "Jelajahi <em ...>Flores</em><br>dengan Nyaman",
heroBgImage: "./img/hero.jpg",  // foto background hero
```

#### Armada
```js
fleet: [
  {
    name:        "Toyota Fortuner",
    description: "SUV premium · 7 penumpang · AC dingin",
    price:       900000,       // dalam Rupiah, tanpa titik/koma
    icon:        "car",        // icon Lucide — dipakai jika imageUrl kosong
    imageUrl:    "./img/fortuner.jpg",  // kosong = tampil icon
  },
  // tambah mobil baru dengan format yang sama
]
```

#### Galeri
```js
gallery: [
  { url: "./img/foto1.jpg", alt: "Keterangan foto", cat: "armada"    },
  { url: "./img/foto2.jpg", alt: "Keterangan foto", cat: "wisata"    },
  { url: "./img/foto3.jpg", alt: "Keterangan foto", cat: "pelanggan" },
]
```
Nilai `cat` menentukan filter tab: `"armada"` | `"wisata"` | `"pelanggan"`

#### Destinasi
```js
destinations: [
  { name: "Danau Kelimutu", description: "...", icon: "mountain" },
]
```
Nama icon mengacu ke [lucide.dev](https://lucide.dev/icons/).

#### Testimoni
```js
testimonials: [
  { text: "Pelayanan sangat baik!", author: "Rizky", city: "Jakarta" },
]
```

---

## Fitur

| Fitur | Keterangan |
|---|---|
| Dark / Light Mode | Toggle di navbar (desktop) dan mobile menu, tersimpan di localStorage |
| Mobile Menu | Full-screen overlay dengan animasi clip-path, icon Menu/X dari Lucide |
| Galeri | Masonry grid dengan filter kategori + lightbox klik foto |
| Booking Form | 8 field + estimasi harga otomatis berdasarkan armada & tanggal |
| Marquee Testimoni | Auto-scroll, pause saat hover |
| WhatsApp Float | Tombol WA mengambang di kanan bawah |
| Responsif | Mobile-first, breakpoint sm/md/lg |
| Config-driven | Semua konten dari `config.js` tanpa menyentuh HTML |

---

## Menambah Foto Lokal

1. Taruh foto di folder `img/`
2. Referensikan di `config.js` dengan path relatif: `"./img/nama-foto.jpg"`
3. Refresh browser

---

## Dependencies (CDN, tidak perlu install)

- [Tailwind CSS v4 Browser](https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4)
- [Lucide Icons](https://unpkg.com/lucide@latest/dist/umd/lucide.min.js)
- [Google Fonts — Playfair Display + Inter](https://fonts.google.com)
