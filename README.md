# RIFKI ALFATAH DESIGN

## Deskripsi Proyek

RIFKI ALFATAH DESIGN merupakan website portofolio desain grafis yang dikembangkan untuk menampilkan berbagai karya desain visual. Website ini dibuat sebagai proyek Tugas Individu mata kuliah Perancangan dan Pemrograman Web.

Website ini menjadi media untuk memperkenalkan profil desainer serta menampilkan hasil karya seperti poster, desain media sosial, banner, dan berbagai karya visual lainnya.

## Tujuan Pengembangan

1. Menampilkan portofolio karya desain grafis secara digital.
2. Memperkenalkan profil dan identitas desainer.
3. Mengelompokkan karya berdasarkan kategori desain.
4. Menyediakan antarmuka website yang menarik, rapi, dan responsif.
5. Mengimplementasikan React dan REST API dalam pengembangan website.
6. Mengintegrasikan backend dengan PostgreSQL menggunakan Prisma ORM.

## Teknologi yang Digunakan

**Frontend**
- React.js
- Vite
- JavaScript
- CSS

**Backend**
- NestJS
- REST API
- TypeScript

**Database**
- PostgreSQL
- Prisma ORM

## Fitur Aplikasi

- Halaman beranda dan profil desainer.
- Menampilkan daftar karya desain.
- Menampilkan inspirasi desain.
- Navigasi halaman Beranda, Karya, Inspirasi, Tentang, dan Kontak.
- REST API untuk pengelolaan data desain.
- Operasi CRUD menggunakan Prisma Client.
- Penyimpanan data secara permanen pada PostgreSQL.
- Tampilan responsif untuk desktop dan mobile.

## Struktur Proyek

```text
Tugas Individu Baru/
├── docs/
│   └── screenshots/
├── src/
│   ├── assets/
│   │   └── components/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   └── src/
│       ├── designs/
│       ├── prisma/
│       ├── app.module.ts
│       └── main.ts
├── package.json
└── README.md
```

## Implementasi PostgreSQL dan Prisma

Pada pengembangan BAB 10, backend NestJS diintegrasikan dengan PostgreSQL menggunakan Prisma ORM.

Implementasi meliputi:

1. Membuat database PostgreSQL bernama `desain_103022400057`.
2. Membuat model `Design` pada `schema.prisma`.
3. Menjalankan migrasi database menggunakan Prisma Migrate.
4. Membuat `PrismaService` sebagai penghubung aplikasi dengan database.
5. Mengintegrasikan PrismaService ke dalam DesignsService.
6. Mengimplementasikan operasi Create, Read, Update, dan Delete menggunakan Prisma Client.
7. Menguji persistensi data setelah server direstart.

## Cara Menjalankan Aplikasi

### 1. Menjalankan Frontend

Buka terminal pada folder utama proyek:

```bash
npm install
npm run dev
```

Frontend dapat diakses melalui:

```text
http://localhost:5173
```

### 2. Menjalankan Backend

Buka terminal baru:

```bash
cd backend
npm install
```

Pastikan file `.env` sudah dikonfigurasi menggunakan koneksi PostgreSQL milik sendiri.

Jalankan backend:

```bash
npm run start:dev
```

Backend berjalan pada:

```text
http://localhost:3000
```

### 3. Migrasi Database

Jika database belum dimigrasikan, jalankan dari folder `backend`:

```bash
npx prisma migrate dev
```

## Dokumentasi Screenshot

Dokumentasi pengerjaan dan tampilan aplikasi tersedia pada folder:

```text
docs/screenshots/
```

Folder tersebut berisi bukti implementasi database, Prisma ORM, pengujian REST API, serta tampilan aplikasi desktop dan mobile.

## Identitas Pengembang

**Nama:** Rifki Alfatah

**NIM:** 103022400057

**Program Studi:** Rekayasa Perangkat Lunak

**Mata Kuliah:** Perancangan dan Pemrograman Web
