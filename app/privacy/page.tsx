import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - CekFakta AI",
  description: "Komitmen kami terhadap keamanan data dan privasi Anda dalam ekosistem CekFakta AI.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden cyber-grid flex flex-col flex-grow">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <main className="flex-grow pt-[120px] px-margin-mobile md:px-margin-desktop pb-24 w-full max-w-container-max mx-auto relative z-10 flex flex-col gap-12">
        <div className="text-center md:text-left">
          <h1 className="font-display text-display text-on-surface mb-4 tracking-tight">Kebijakan Privasi</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">Komitmen kami terhadap keamanan data dan privasi Anda dalam ekosistem CekFakta AI.</p>
        </div>

        {/* Bento Grid Layout for Privacy Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Panel */}
          <article className="glass-card rounded-2xl p-8 md:col-span-8 flex flex-col gap-10 shadow-2xl">
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Pengumpulan Data</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                CekFakta AI dibangun dengan prinsip minimalisasi data. Kami hanya mengumpulkan informasi yang esensial untuk memproses kueri verifikasi fakta Anda. Ini termasuk teks atau tautan yang Anda kirimkan untuk dianalisis oleh Live Grounding Engine kami.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                Data telemetri anonim dikumpulkan semata-mata untuk tujuan peningkatan performa model bahasa dan deteksi latensi sistem, tidak pernah ditautkan ke profil identitas pribadi pengguna.
              </p>
            </section>

            <div className="h-px w-full bg-white/5"></div>
            
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Proteksi & Enkripsi</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                Seluruh transmisi data antara klien dan server diamankan menggunakan protokol enkripsi TLS 1.3 terkini. Data pada keadaan istirahat (data at rest) dalam infrastruktur kami dienkripsi menggunakan standar AES-256.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                Sistem kami dirancang dengan arsitektur zero-trust, memastikan bahwa akses ke log sistem dibatasi hanya pada proses otomatis yang bertugas melakukan sanitasi data secara periodik.
              </p>
            </section>

            <div className="h-px w-full bg-white/5"></div>
            
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>model_training</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Kebijakan Pelatihan AI</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                Kami <strong>tidak</strong> menggunakan data kueri pribadi atau dokumen yang diunggah pengguna untuk melatih model dasar (foundation models) Gemini AI tanpa izin eksplisit (opt-in). Kueri Anda digunakan secara real-time untuk grounding, dan segera dibuang dari memori volatil setelah sesi analisis selesai.
              </p>
            </section>
          </article>

          {/* Sidebar Info Panels */}
          <aside className="md:col-span-4 flex flex-col gap-6">
            {/* Quick Summary Card */}
            <div className="glass-card rounded-2xl p-6 flex flex-col gap-6 shadow-xl">
              <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest border-b border-white/5 pb-3">Ringkasan Eksekutif</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">No PII Retention</h4>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Identitas pribadi tidak disimpan.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">E2E Encryption</h4>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Enkripsi dari ujung ke ujung.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-label-md text-label-md text-on-surface font-bold">Zero 3rd-Party Sales</h4>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Data tidak dijual ke pihak ketiga.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Support Card */}
            <div className="glass-card rounded-2xl p-6 border-l-2 border-l-primary flex flex-col gap-4 shadow-xl">
              <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Butuh Bantuan?</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                Jika Anda memiliki pertanyaan teknis mengenai bagaimana kami memproses data, silakan hubungi tim keamanan kami.
              </p>
              <a className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary-container to-primary text-on-primary-container font-headline-md text-label-md py-3.5 px-4 rounded-xl hover:scale-[1.01] hover:glow-primary transition-pro shadow-lg" href="mailto:alonmarlon089@gmail.com">
                <span className="material-symbols-outlined">mail</span>
                Hubungi Tim DPO
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
