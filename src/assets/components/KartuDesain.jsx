import './KartuDesain.css';

function KartuDesain({ desain, onLihatDetail }) {
  return (
    <article className="kartu-desain">
      <div className="kartu-desain-preview">
        {desain.gambar ? (
          <img src={desain.gambar} alt={desain.nama} />
        ) : (
          <div className="kartu-desain-placeholder">
            {desain.kategori}
          </div>
        )}
      </div>

      <div className="kartu-desain-content">
        <span className="kartu-desain-kategori">
          {desain.kategori}
        </span>

        <h3>{desain.nama}</h3>
        <p>{desain.deskripsi}</p>

        <button
          type="button"
          className="kartu-desain-detail"
          onClick={() => onLihatDetail?.(desain)}
        >
          Lihat Detail →
        </button>
      </div>
    </article>
  );
}

export default KartuDesain;