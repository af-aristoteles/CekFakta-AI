import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat Layanan - CekFakta AI",
  description: "Aturan, tanggung jawab, dan batasan penggunaan mesin verifikasi informasi CekFakta AI.",
};

export default function TermsPage() {
  return (
    <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-0 py-16 pt-[100px]">
      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">Dokumen Legal</span>
          <span className="w-8 h-px bg-white/10"></span>
          <span className="font-label-sm text-label-sm text-outline">Pembaruan Terakhir: 19 Mei 2026</span>
        </div>
        <h1 className="font-display text-display text-on-surface mb-6">Syarat Layanan</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Selamat datang di CekFakta AI. Dokumen ini menguraikan aturan, tanggung jawab, dan batasan penggunaan mesin verifikasi informasi kami yang ditenagai oleh kecerdasan buatan. Harap baca dengan saksama.
        </p>
      </header>

      {/* Article Sections */}
      <article className="space-y-12 text-on-surface-variant">
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">1. Penerimaan Syarat</h2>
          <p className="mb-4">
            Dengan mengakses atau menggunakan platform CekFakta AI, Anda menyetujui untuk terikat oleh Syarat Layanan ini. Jika Anda tidak menyetujui seluruh syarat dan ketentuan, Anda tidak diizinkan untuk menggunakan layanan kami.
          </p>
          <p>
            Layanan ini ditujukan untuk digunakan oleh individu yang mencari alat bantu verifikasi informasi independen untuk tujuan riset, jurnalistik, atau penggunaan pribadi yang sah.
          </p>
        </section>

        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">2. Aturan Penggunaan</h2>
          <p className="mb-4">
            Sebagai pengguna, Anda setuju untuk tidak menggunakan CekFakta AI untuk:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>Menghasilkan atau mendistribusikan disinformasi, ujaran kebencian, atau konten ilegal.</li>
            <li>Melakukan rekayasa balik (reverse engineering) pada model AI atau sistem pencarian kami.</li>
            <li>Mengotomatisasi permintaan (scraping/botting) tanpa izin tertulis dari pihak CekFakta AI.</li>
            <li>Menggunakan hasil verifikasi sebagai alat bukti hukum final tanpa validasi ahli manusia.</li>
          </ul>
        </section>

        {/* Highlight/Glassmorphism Warning Box */}
        <section className="p-6 bg-surface-container border border-error/20 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-error mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">3. Batasan AI (Penting)</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                CekFakta AI menggunakan model bahasa besar (LLM) untuk memproses dan menyintesis informasi. Meskipun kami menerapkan <em>Live Grounding Engine</em> untuk meningkatkan akurasi, <strong>sistem ini dapat mengalami halusinasi atau menghasilkan data yang tidak akurat</strong>. Platform ini adalah alat bantu, bukan pengganti penilaian kritis manusia. Pengguna bertanggung jawab penuh atas keputusan yang diambil berdasarkan output dari layanan ini.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">4. Tanggung Jawab Pengguna</h2>
          <p className="mb-4">
            Anda bertanggung jawab menjaga kerahasiaan kredensial akses Anda dan atas semua aktivitas yang terjadi di bawah akun Anda. Anda wajib memverifikasi ulang setiap klaim kritis yang dihasilkan oleh sistem kami dengan sumber primer.
          </p>
        </section>

        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">5. Perubahan Layanan</h2>
          <p>
            Kami berhak untuk memodifikasi, menangguhkan, atau menghentikan layanan (atau bagian mana pun darinya) kapan saja dengan atau tanpa pemberitahuan. Kami juga dapat memperbarui Syarat Layanan ini dari waktu ke waktu. Penggunaan berkelanjutan Anda atas layanan setelah perubahan tersebut merupakan bentuk persetujuan Anda terhadap syarat yang baru.
          </p>
        </section>
      </article>
    </main>
  );
}
