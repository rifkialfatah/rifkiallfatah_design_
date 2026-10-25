
import { useMemo, useState } from 'react';
import KartuDesain from './KartuDesain';
import './DaftarDesain.css';

function DaftarDesain({ daftarDesain, onHapus }) {
  const [kataKunci, setKataKunci] = useState('');
  const [kategoriAktif, setKategoriAktif] = useState('Semua');

  const daftarKategori = useMemo(
    () => [
      'Semua',
      ...new Set(daftarDesain.map((desain) => desain.kategori)),
    ],
    [daftarDesain]
  );

  const hasilFilter = daftarDesain.filter((desain) => {
    const cocokNama = desain.nama
      .toLowerCase()
      .includes(kataKunci.toLowerCase());

    const cocokKategori =
      kategoriAktif === 'Semua' ||
      desain.kategori === kategoriAktif;

    return cocokNama && cocokKategori;
  });

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
              onHapus={onHapus}
            />
          ))}
        </div>
      ) : (
        <div className="daftar-desain-kosong">
          <h3>Belum ada karya yang sesuai</h3>
          <p>Tambahkan karya atau ubah pencarianmu.</p>
        </div>
      )}
    </section>
  );
}

export default DaftarDesain;