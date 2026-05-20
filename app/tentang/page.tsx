import Link from "next/link";
import Image from "next/image";

export default function TentangKami() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container circuit-bg min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto left-0 right-0 bg-surface/80 backdrop-blur-lg border-b border-white/10 z-50 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
        <div className="flex items-center gap-2">
          <span className="text-headline-md font-bold text-primary tracking-tight">CekFakta AI</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300">Beranda</Link>
          <Link href="/tentang" className="text-primary font-bold border-b-2 border-primary pb-1 transition-colors duration-300">Tentang</Link>
          <Link href="/">
            <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-label-md hover:scale-95 transition-all duration-150 ease-in-out glow-cyan">
              Mulai Analisis
            </button>
          </Link>
        </div>
        {/* Mobile Toggle (Simplified for UI only) */}
        <div className="md:hidden">
          <span className="material-symbols-outlined text-primary">menu</span>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        {/* Hero Section: Bento Inspired */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
          <div className="md:col-span-8 glass-card rounded-xl p-8 flex flex-col justify-center">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-primary leading-tight">
              Membangun Fondasi <br />Kebenaran Digital.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Di era banjir informasi, CekFakta AI hadir sebagai benteng pertahanan digital masyarakat Indonesia. Kami memberdayakan setiap individu dengan teknologi verifikasi tercanggih untuk membedakan fakta dari manipulasi.
            </p>
          </div>
          <div className="md:col-span-4 glass-card rounded-xl overflow-hidden relative min-h-[300px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-lighten" 
              alt="Server room with glowing blue fiber optic cables" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeWZ57QLCO-tDksvZijezQPdjwdiLtz4PjPML3awID_PoTtwrBHKuzkGpdWVOKyYG0BmCYHQzIut3dRWDkahn0uJBfrOlCO0n1WWLQjW_VkcjoVTdts9-5XMFN-xoS2cwbeOYg6c3M6A7un_m_-14UzPcXgJxYMlaYZpbY5j5TczACWZktznNLU-u23sLnyCmv_bP57Lr5PtikGZMqMCjluIwHeiypEQxuBUhCQC8fIotel6Qo26PkR930DYyp0Y5oY-WWM2Jb"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-2">shield_lock</span>
              <p className="font-label-md text-primary tracking-widest uppercase">Verified System</p>
            </div>
          </div>
        </div>

        {/* Section: Misi */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-outline-variant"></div>
            <h2 className="font-headline-md text-headline-md text-center px-4">Misi Kami</h2>
            <div className="h-px flex-1 bg-outline-variant"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card p-8 rounded-xl border-t-2 border-t-primary-container/30">
              <span className="material-symbols-outlined text-primary-container text-3xl mb-4">groups</span>
              <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">Pemberdayaan</h3>
              <p className="text-on-surface-variant">Memberikan akses alat verifikasi tingkat elit kepada seluruh lapisan masyarakat Indonesia tanpa hambatan teknis.</p>
            </div>
            <div className="glass-card p-8 rounded-xl border-t-2 border-t-primary-container/30">
              <span className="material-symbols-outlined text-primary-container text-3xl mb-4">verified</span>
              <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">Akurasi</h3>
              <p className="text-on-surface-variant">Memastikan setiap informasi digital yang dianalisis melewati filter logika AI yang ketat dan objektif.</p>
            </div>
            <div className="glass-card p-8 rounded-xl border-t-2 border-t-primary-container/30">
              <span className="material-symbols-outlined text-primary-container text-3xl mb-4">public</span>
              <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">Ekosistem Bersih</h3>
              <p className="text-on-surface-variant">Menciptakan ruang siber nasional yang sehat, bebas dari polusi hoaks dan kampanye disinformasi.</p>
            </div>
          </div>
        </section>

        {/* Section: Teknologi Gemini AI */}
        <section className="mb-20 bg-surface-container-low rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="text-xs font-label-md text-primary-container uppercase tracking-widest">Powered by Gemini AI</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-md mb-6 text-on-surface">Analisis Konteks &amp; Sentimen Tingkat Lanjut</h2>
              <p className="text-on-surface-variant text-body-lg mb-8">
                Kami mengintegrasikan model bahasa besar Gemini AI untuk melakukan bedah forensik digital. Sistem kami tidak hanya memeriksa kata-kata, tetapi memahami intensi, mendeteksi manipulasi emosional, dan memverifikasi silang dengan database fakta global secara real-time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span className="text-on-surface">Deteksi Anomali Kontekstual</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span className="text-on-surface">Pemetaan Jaringan Disinformasi</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span className="text-on-surface">Analisis Bias Linguistik Otomatis</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square glass-card rounded-full flex items-center justify-center border-2 border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent"></div>
                <img 
                  className="w-4/5 h-4/5 object-cover rounded-full shadow-2xl" 
                  alt="AI neural network visualization" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8YPbQn5r2CHMV0PCr-UDc3dcQ_XrpIfstz7aVWpaj107394tk-fsZCz5GG8Z7ZXpJUTe2iW7H15MLxePiakVolHlzwGrJSD9kzWimHNJ-l-7XL2W8ixpKsRTDxhfPaLsMHBP6xjSfaIBtYCWH1KbIKohDgi_bIusGp5Vwm7ZCUgR_Po6L__8SkSjpjpMpDxfnTsCejEtN-OOmsX-ACMt6wBbPYc_icEfw-0LFEZEUK4QKUBok-197de_pg2FGbPRO8PeD7QFH"
                />
                {/* Orbiting Elements */}
                <div className="absolute w-full h-full border border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mengapa Kami? */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="p-8 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300 shadow-lg">
              <span className="material-symbols-outlined text-4xl">bolt</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">Kecepatan</h4>
            <p className="text-on-surface-variant">Hasil verifikasi dalam hitungan detik. Kami menghargai waktu Anda di tengah arus informasi yang cepat.</p>
          </div>
          <div className="p-8 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300 shadow-lg">
              <span className="material-symbols-outlined text-4xl">target</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">Akurasi</h4>
            <p className="text-on-surface-variant">Divalidasi oleh AI dengan tingkat presisi tinggi dan transparansi dalam proses pengambilan kesimpulan.</p>
          </div>
          <div className="p-8 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300 shadow-lg">
              <span className="material-symbols-outlined text-4xl">lock</span>
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">Privasi</h4>
            <p className="text-on-surface-variant">Data pencarian Anda dienkripsi penuh. Kami tidak menyimpan riwayat identitas demi keamanan anonimitas Anda.</p>
          </div>
        </section>
      </main>

    </div>
  );
}
