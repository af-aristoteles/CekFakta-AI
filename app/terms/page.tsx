import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat Layanan - CekFakta AI",
  description: "Aturan, tanggung jawab, dan batasan penggunaan mesin verifikasi informasi CekFakta AI.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden cyber-grid flex flex-col flex-grow">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-0 pb-24 pt-[120px] relative z-10 flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-bold">Dokumen Legal</span>
            <span className="w-8 h-px bg-white/10"></span>
            <span className="font-label-sm text-label-sm text-outline">Pembaruan Terakhir: 19 Mei 2026</span>
          </div>
          <h1 className="font-display text-display text-on-surface tracking-tight">Syarat Layanan</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Selamat datang di CekFakta AI. Dokumen ini menguraikan aturan, tanggung jawab, dan batasan penggunaan mesin verifikasi informasi kami yang ditenagai oleh kecerdasan buatan. Harap baca dengan saksama.
          </p>
        </header>

        {/* Article Sections */}
        <article className="glass-card rounded-2xl p-8 flex flex-col gap-10 shadow-2xl">
          <section className="flex flex-col gap-3">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">1. Penerimaan Syarat</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
              Dengan mengakses atau menggunakan platform CekFakta AI, Anda menyetujui untuk terikat oleh Syarat Layanan ini. Jika Anda tidak menyetujui seluruh syarat dan ketentuan, Anda tidak diizinkan untuk menggunakan layanan kami.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
              Layanan ini ditujukan untuk digunakan oleh individu yang mencari alat bantu verifikasi informasi independen untuk tujuan riset, jurnalistik, atau penggunaan pribadi yang sah.
            </p>
          </section>

          <div className="h-px w-full bg-white/5"></div>

          <section className="flex flex-col gap-3">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">2. Aturan Penggunaan</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Sebagai pengguna, Anda setuju untuk tidak menggunakan CekFakta AI untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-on-surface-variant font-body-md text-body-md">
              <li>Menghasilkan atau mendistribusikan disinformasi, ujaran kebencian, atau konten ilegal.</li>
              <li>Melakukan rekayasa balik (reverse engineering) pada model AI atau sistem pencarian kami.</li>
              <li>Mengotomatisasi permintaan (scraping/botting) tanpa izin tertulis dari pihak CekFakta AI.</li>
              <li>Menggunakan hasil verifikasi sebagai alat bukti hukum final tanpa validasi ahli manusia.</li>
            </ul>
          </section>

          {/* Highlight/Glassmorphism Warning Box */}
          <section className="p-6 bg-error/5 border border-error/20 rounded-2xl relative overflow-hidden flex items-start gap-4 shadow-inner">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-error"></div>
            <span className="material-symbols-outlined text-error text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            <div className="flex flex-col gap-2">
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">3. Batasan AI (Penting)</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                CekFakta AI menggunakan model bahasa besar (LLM) untuk memproses dan menyintesis informasi. Meskipun kami menerapkan <em>Live Grounding Engine</em> untuk meningkatkan akurasi, <strong>sistem ini dapat mengalami halusinasi atau menghasilkan data yang tidak akurat</strong>. Platform ini adalah alat bantu, bukan pengganti penilaian kritis manusia. Pengguna bertanggung jawab penuh atas keputusan yang diambil berdasarkan output dari layanan ini.
              </p>
            </div>
          </section>

          <div className="h-px w-full bg-white/5"></div>

          <section className="flex flex-col gap-3">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">4. Tanggung Jawab Pengguna</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
              Anda bertanggung jawab menjaga kerahasiaan kredensial akses Anda dan atas semua aktivitas yang terjadi di bawah akun Anda. Anda wajib memverifikasi ulang setiap klaim kritis yang dihasilkan oleh sistem kami dengan sumber primer.
            </p>
          </section>

          <div className="h-px w-full bg-white/5"></div>

          <section className="flex flex-col gap-3">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">5. Perubahan Layanan</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
              Kami berhak untuk memodifikasi, menangguhkan, atau menghentikan layanan (atau bagian mana pun darinya) kapan saja dengan atau tanpa pemberitahuan. Kami juga dapat memperbarui Syarat Layanan ini dari waktu ke waktu. Penggunaan berkelanjutan Anda atas layanan setelah perubahan tersebut merupakan bentuk persetujuan Anda terhadap syarat yang baru.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
