import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - CekFakta AI",
  description: "Komitmen kami terhadap keamanan data dan privasi Anda dalam ekosistem CekFakta AI.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-grow pt-[100px] pb-16 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h1 className="font-display text-display text-on-surface mb-4">Kebijakan Privasi</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Komitmen kami terhadap keamanan data dan privasi Anda dalam ekosistem CekFakta AI.</p>
      </div>

      {/* Bento Grid Layout for Privacy Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        
        {/* Main Article Panel */}
        <article className="glass-card rounded-xl p-8 md:col-span-8 space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Pengumpulan Data</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              CekFakta AI dibangun dengan prinsip minimalisasi data. Kami hanya mengumpulkan informasi yang esensial untuk memproses kueri verifikasi fakta Anda. Ini termasuk teks atau tautan yang Anda kirimkan untuk dianalisis oleh Live Grounding Engine kami.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Data telemetri anonim dikumpulkan semata-mata untuk tujuan peningkatan performa model bahasa dan deteksi latensi sistem, tidak pernah ditautkan ke profil identitas pribadi pengguna.
            </p>
          </section>

          <div className="h-px w-full bg-white/5"></div>
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Proteksi & Enkripsi</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Seluruh transmisi data antara klien dan server diamankan menggunakan protokol enkripsi TLS 1.3 terkini. Data pada keadaan istirahat (data at rest) dalam infrastruktur kami dienkripsi menggunakan standar AES-256.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Sistem kami dirancang dengan arsitektur zero-trust, memastikan bahwa akses ke log sistem dibatasi hanya pada proses otomatis yang bertugas melakukan sanitasi data secara periodik.
            </p>
          </section>

          <div className="h-px w-full bg-white/5"></div>
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>model_training</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Kebijakan Pelatihan AI</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Kami <strong>tidak</strong> menggunakan data kueri pribadi atau dokumen yang diunggah pengguna untuk melatih model dasar (foundation models) Gemini AI tanpa izin eksplisit (opt-in). Kueri Anda digunakan secara real-time untuk grounding, dan segera dibuang dari memori volatil setelah sesi analisis selesai.
            </p>
          </section>
        </article>

        {/* Sidebar Info Panels */}
        <aside className="md:col-span-4 space-y-gutter">
          {/* Quick Summary Card */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-label-sm text-label-sm text-primary mb-6 uppercase tracking-wider">Ringkasan Eksekutif</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">No PII Retention</h4>
                  <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">Identitas pribadi tidak disimpan.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">E2E Encryption</h4>
                  <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">Enkripsi dari ujung ke ujung.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">Zero 3rd-Party Sales</h4>
                  <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">Data tidak dijual ke pihak ketiga.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Support Card */}
          <div className="glass-card rounded-xl p-6 border-l-2 border-l-primary">
            <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-4 uppercase tracking-wider">Butuh Bantuan?</h3>
            <p className="text-label-md font-label-md text-on-surface mb-6">
              Jika Anda memiliki pertanyaan teknis mengenai bagaimana kami memproses data, silakan hubungi tim keamanan kami.
            </p>
            <a className="inline-flex items-center justify-center gap-2 w-full bg-primary text-on-primary font-headline-md text-label-md py-3 px-4 rounded hover:bg-primary-fixed transition-colors" href="mailto:alonmarlon089@gmail.com">
              <span className="material-symbols-outlined">mail</span>
              Hubungi Tim DPO
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
