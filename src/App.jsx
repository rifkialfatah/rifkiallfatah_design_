import './App.css';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#beranda" className="brand">
          RIFKI ALFATAH DESIGN
        </a>

        <div className="nav-links">
          <a href="#beranda">Beranda</a>
          <a href="#karya">Karya</a>
          <a href="#tentang">Tentang</a>
          <a href="#kontak">Kontak</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="beranda">
          <div className="hero-content">
            <p className="hero-label">DESIGN PORTFOLIO</p>
            <h1>
              Turning Ideas Into
              <span> Visual Stories.</span>
            </h1>
            <p className="hero-description">
              Halo! Saya Rifki Alfatah, seorang desainer yang
              mengeksplorasi kreativitas melalui poster, desain
              media sosial, banner, dan berbagai karya visual.
            </p>

            <a href="#karya" className="primary-button">
              Jelajahi Karya Saya ↗
            </a>
          </div>

          <div className="hero-art">
            <div className="art-card art-card-back">CREATIVE</div>
            <div className="art-card art-card-front">
              <span>R</span>
              <p>RIFKI ALFATAH</p>
              <small>DESIGNER & CREATIVE</small>
            </div>
          </div>
        </section>

        <section className="works" id="karya">
          <div className="section-heading">
            <div>
              <p className="hero-label">SELECTED PROJECTS</p>
              <h2>Karya Pilihan</h2>
            </div>
            <p>Beberapa karya visual yang saya buat.</p>
          </div>

          <div className="empty-works">
            <span>✦</span>
            <h3>Karya kreatif akan tampil di sini</h3>
            <p>
              Nantinya karya dari data yang ditambahkan akan
              ditampilkan di bagian ini.
            </p>
          </div>
        </section>

        <section className="about" id="tentang">
          <p className="hero-label">ABOUT ME</p>
          <h2>Creativity with Purpose.</h2>
          <p>
            Saya tertarik pada desain visual, branding, dan
            pengembangan identitas visual untuk berbagai kegiatan.
          </p>
        </section>

        <footer id="kontak">
          <h2>Let’s Create Something Great.</h2>
          <p>RIFKI ALFATAH DESIGN © 2026</p>
        </footer>
      </main>
    </div>
  );
}

export default App;