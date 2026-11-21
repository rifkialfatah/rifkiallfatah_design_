import { useMemo, useState } from 'react';
import KartuDesain from './KartuDesain';

import poster1 from '../poster 1.png';
import poster2 from '../poster 2.png';
import poster3 from '../poster 3.png';

import './DaftarDesain.css';

const dataDesainAwal = [
  {
    id: 1,
    nama: 'Poster 1',
    kategori: 'Poster',
    deskripsi: 'Karya desain poster pertama.',
    gambar: poster1,
  },
  {
    id: 2,
    nama: 'Poster 2',
    kategori: 'Poster',
    deskripsi: 'Karya desain poster kedua.',
    gambar: poster2,
  },
  {
    id: 3,
    nama: 'Poster 3',
    kategori: 'Poster',
    deskripsi: 'Karya desain poster ketiga.',
    gambar: poster3,
  },
];

function DaftarDesain({ daftarDesain, onHapus }) {
  const [kataKunci, setKataKunci] = useState('');
  const [kategoriAktif, setKategoriAktif] = useState('Semua');

  const dataYangDitampilkan =
    Array.isArray(daftarDesain) && daftarDesain.length > 0
      ? daftarDesain
      : dataDesainAwal;

  const daftarKategori = useMemo(
    () => [
      'Semua',
      ...new Set(
        dataYangDitampilkan.map((desain) => desain.kategori)
      ),
    ],
    [dataYangDitampilkan]
  );

  const hasilFilter = dataYangDitampilkan.filter((desain) => {
    const cocokNama = desain.nama
      .toLowerCase()
      .includes(kataKunci.toLowerCase());

    const cocokKategori =
      kategoriAktif === 'Semua' ||
      desain.kategori === kategoriAktif;

    return cocokNama && cocokKategori;
  });

  const handleHapus = (id) => {
    if (onHapus) {
      onHapus(id);
    }
  };

  return (
    <section className="daftar-desain">
      <div className="daftar-desain-heading">
        <div>
          <h2>Koleksi Karya</h2>
          <p>Jelajahi karya desain yang tersimpan.</p>
        </div>

        <span>{hasilFilter.length} karya</span>
      </div>

      <div className="daftar-desain-filter">
        <input
          type="search"
          value={kataKunci}
          onChange={(event) => setKataKunci(event.target.value)}
          placeholder="Cari nama karya..."
          aria-label="Cari nama karya"
        />

        <select
          value={kategoriAktif}
          onChange={(event) => setKategoriAktif(event.target.value)}
          aria-label="Filter kategori"
        >
          {daftarKategori.map((kategori) => (
            <option key={kategori} value={kategori}>
              {kategori}
            </option>
          ))}
        </select>
      </div>

      {hasilFilter.length > 0 ? (
        <div className="daftar-desain-grid">
          {hasilFilter.map((desain) => (
            <KartuDesain
              key={desain.id}
              desain={desain}
              onHapus={() => handleHapus(desain.id)}
            />
          ))}
        </div>
      ) : (
        <div className="daftar-desain-kosong">
          <h3>Belum ada karya yang sesuai</h3>
          <p>Ubah kata pencarian atau pilih kategori lain.</p>
        </div>
      )}
    </section>
  );
}

export default DaftarDesain;