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
        'https://jsonplaceholder.typicode.com/salah'
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

   return (
    <section className="inspirasi-section" id="inspirasi">
      <div className="inspirasi-heading">
        <span className="inspirasi-label">DESIGN RESOURCES</span>
        <h2>Inspirasi Desain</h2>
        <p>
          Temukan inspirasi dan ide kreatif untuk karya desain
          berikutnya.
        </p>
      </div>

      {loading && (
        <div className="inspirasi-status">
          <div className="loading-spinner"></div>
          <p>Sedang mengambil data inspirasi...</p>
        </div>
      )}

      {!loading && error && (
        <div className="inspirasi-status error-status">
          <h3>Oops! Terjadi Kesalahan</h3>
          <p>{error}</p>

          <button
            type="button"
            onClick={() => setPercobaan((prev) => prev + 1)}
          >
            Coba Lagi
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="inspirasi-success">
            <span className="success-dot"></span>
            Data berhasil dimuat!
          </div>

          <div className="inspirasi-grid">
            {daftarInspirasi.map((item) => (
              <article className="inspirasi-card" key={item.id}>
                <div className="inspirasi-number">
                  #{String(item.id).padStart(2, '0')}
                </div>

                <div className="inspirasi-card-content">
                  <span>DESIGN INSPIRATION</span>

                  <h3>{item.title}</h3>

                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default InspirasiDesain;

