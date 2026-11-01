import { useEffect, useState } from 'react';
import './InspirasiDesain.css';

function InspirasiDesain() {
  const [daftarInspirasi, setDaftarInspirasi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [percobaan, setPercobaan] = useState(0);

  const ambilDataInspirasi = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=6'
      );

      if (!response.ok) {
        throw new Error('Gagal mengambil data dari server.');
      }

      const data = await response.json();

      setDaftarInspirasi(data);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat mengambil data.');
      setDaftarInspirasi([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    ambilDataInspirasi();
  }, [percobaan]);
}
