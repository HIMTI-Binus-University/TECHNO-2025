# TECHNO 2025 🚀

Website resmi acara TECHNO 2025 yang diselenggarakan oleh HIMTI (Himpunan Mahasiswa Teknik Informatika) BINUS University. Website ini menyediakan informasi lengkap tentang acara, jadwal kegiatan, FAQ, dan berbagai benefit untuk peserta.

## 🎯 Tentang Project

TECHNO 2025 adalah event tahunan HIMTI BINUS yang mencakup berbagai kegiatan seperti:

- **PBP (Pembelajaran Bahasa Pemrograman)** - Kelas programming untuk mahasiswa baru
- **Main Show** - Acara utama dengan guest artist dan talkshow
- **Expo** - Pameran di berbagai kampus BINUS
- **HIMTI Kit** - Paket software dan course materials
- **SoCS Inauguration** - Pelantikan mahasiswa School of Computer Science

## 📁 Struktur Project

```
Tecno-2025/
├── src/
│   ├── assets/              # File statis (images, videos, fonts)
│   │   ├── fonts/          # Chancery, Parisienne, Alice fonts
│   │   └── *.png, *.svg    # Images dan logos
│   │
│   ├── components/         # Komponen reusable
│   │   ├── Button.jsx      # Tombol dengan styling
│   │   ├── Card.jsx        # Card untuk benefits
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Footer.jsx      # Footer dengan logos
│   │   └── SectionTitle.jsx # Title section dengan dekorasi
│   │
│   ├── pages/              # Halaman utama
│   │   ├── Home.jsx        # Homepage
│   │   ├── Events.jsx      # Halaman events
│   │   └── Faq.jsx         # Halaman FAQ
│   │
│   ├── data/               # Data statis
│   │   ├── faqData.js      # Data FAQ
│   │   ├── pbpData.js      # Jadwal PBP
│   │   └── expoData.js     # Jadwal Expo
│   │
│   ├── App.jsx             # Main app dengan routing
│   ├── main.jsx            # Entry point React
│   └── index.css           # Global styles & Tailwind config
│
├── public/                 # Static assets
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── index.html              # HTML entry point
├── eslint.config.js        # ESLint configuration
└── README.md               # Dokumentasi ini
```

## 🚀 Instalasi

### Langkah Instalasi

1. Clone repository

```bash
git clone https://github.com/your-username/Tecno-2025.git
cd Tecno-2025
```

2. Install dependencies

```bash
npm install
```

## 💻 Menjalankan Project

### Development Server

Jalankan development server dengan hot reload:

```bash
npm run dev
```

Website akan tersedia di `http://localhost:5173`

### Linting

Jalankan ESLint untuk check code quality:

```bash
npm run lint
```

### Preview Build

Preview hasil production build:

```bash
npm run preview
```

## 📦 Build & Deployment

### Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

### Deploy ke GitHub Pages

```bash
npm run deploy
```

Script ini akan otomatis build dan push ke branch `gh-pages`

### Konfigurasi Deployment

Base URL sudah dikonfigurasi di [vite.config.js](vite.config.js) untuk GitHub Pages:

```javascript
base: "/Tecno-2025/";
```

**Dibuat dengan ❤️ oleh HIMTI BINUS**

_TECHNO 2025 - Empowering Future Technologists_
