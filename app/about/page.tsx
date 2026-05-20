import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - CekFakta AI",
  description: "Misi kami untuk mengawal integritas informasi di ekosistem digital Indonesia.",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow w-full">
      {/* Article Header */}
      <header className="max-w-3xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-6">
          <span className="material-symbols-outlined text-[14px]">flag</span>
          Misi Kami
        </div>
        <h1 className="font-display text-display text-on-surface mb-6">
          Mengawal Integritas Informasi di Ekosistem Digital Indonesia.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          CekFakta AI dibangun dari keresahan terhadap polarisasi dan misinformasi yang merajalela. Kami mengombinasikan kecerdasan buatan dengan disiplin jurnalistik untuk memberikan lapisan verifikasi yang instan, akurat, dan transparan bagi setiap warga digital.
        </p>
      </header>
      
      {/* Aesthetic Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>
      
      {/* Article Body */}
      <article className="max-w-3xl mx-auto space-y-8 text-on-surface font-body-md text-body-md leading-loose mb-24">
        <p>
          Di era di mana data mengalir lebih cepat dari kemampuan manusia untuk memprosesnya, kebenaran sering kali terdistorsi oleh narasi algoritmis. Fragmentasi informasi ini tidak hanya membingungkan, tetapi juga mengancam fondasi pengambilan keputusan yang rasional di masyarakat.
        </p>
        <p>
          Kami percaya bahwa akses terhadap fakta yang diverifikasi bukanlah sebuah kemewahan, melainkan hak asasi digital. Oleh karena itu, CekFakta AI dikembangkan bukan sebagai arbiter mutlak, melainkan sebagai <strong className="text-primary font-semibold">instrumen augmentasi intelijen</strong>—sebuah alat bantu yang memperkuat kapasitas kritis pengguna dalam menavigasi lautan informasi.
        </p>
        <h2 className="font-headline-lg text-headline-lg text-on-surface pt-8 pb-4 border-b border-white/5">
          Filosofi "Dark Glass" Kami
        </h2>
        <p>
          Desain antarmuka dan arsitektur sistem kami mencerminkan komitmen terhadap objektivitas. Kami menolak noise visual dan manipulasi emosional. Lingkungan kerja CekFakta AI dirancang dengan estetika fungsional—presisi, tajam, dan transparan. Layaknya kaca gelap yang menyaring silau, sistem kami bertujuan memfilter sensasionalisme untuk mengungkap data struktural di baliknya.
        </p>
      </article>

      {/* Mission Pillars (Bento/Glass Cards) */}
      <section className="max-w-5xl mx-auto">
        <h3 className="font-label-md text-label-md text-primary tracking-widest uppercase mb-8 text-center">Pilar Fungsional</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-container/40 backdrop-blur-xl border border-white/5 rounded-xl p-8 hover:bg-surface-container/60 transition-colors duration-300 flex flex-col items-start group">
            <div className="w-12 h-12 rounded bg-surface flex items-center justify-center border border-white/10 mb-6 group-hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'wght' 300" }}>school</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-3">Literasi Analitis</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Meningkatkan pemahaman publik tentang struktur disinformasi melalui antarmuka yang membongkar anatomi klaim palsu, bukan sekadar memberikan label benar/salah.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container/40 backdrop-blur-xl border border-white/5 rounded-xl p-8 hover:bg-surface-container/60 transition-colors duration-300 flex flex-col items-start group relative overflow-hidden">
            {/* Top highlight simulation */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="w-12 h-12 rounded bg-surface flex items-center justify-center border border-white/10 mb-6 group-hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'wght' 300" }}>bolt</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-3">Sintesis Instan</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Memanfaatkan Large Language Models yang di-grounding dengan basis data jurnalistik terpercaya untuk memberikan respons verifikasi dalam hitungan detik.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container/40 backdrop-blur-xl border border-white/5 rounded-xl p-8 hover:bg-surface-container/60 transition-colors duration-300 flex flex-col items-start group">
            <div className="w-12 h-12 rounded bg-surface flex items-center justify-center border border-white/10 mb-6 group-hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'wght' 300" }}>account_tree</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-3">Jejak Data Terbuka</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Setiap kesimpulan verifikasi dilengkapi dengan sitasi referensi yang dapat dilacak secara independen, meminimalisir efek "black box" pada sistem AI.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
