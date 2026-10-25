
import { useState } from 'react';
import './App.css';

import AppHeader from './components/AppHeader';
import Ringkasan from './components/Ringkasan';
import FormDesain from './components/FormDesain';
import DaftarDesain from './components/DaftarDesain';

function App() {
  const [daftarDesain, setDaftarDesain] = useState([]);

  function tambahDesain(desainBaru) {
    setDaftarDesain((dataSebelumnya) => [
      ...dataSebelumnya,
      desainBaru,
    ]);
  }

  function hapusDesain(id) {
    setDaftarDesain((dataSebelumnya) =>
      dataSebelumnya.filter((desain) => desain.id !== id)
    );
  }

  return (
    <>
      <AppHeader
        judul="RIFKI ALFATAH DESIGN"
        deskripsi="Katalog karya desain dan proyek kreatif."
      />

      <main className="app-main">
        <Ringkasan jumlahKarya={daftarDesain.length} />

        <FormDesain onTambahDesain={tambahDesain} />

        <DaftarDesain
          daftarDesain={daftarDesain}
          onHapus={hapusDesain}
        />
      </main>

      <footer className="app-footer">
        <p>RIFKI ALFATAH DESIGN</p>
        <span>Creative works, collected in one place.</span>
      </footer>
    </>
  );
}

export default App;