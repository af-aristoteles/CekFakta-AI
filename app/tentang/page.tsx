import Link from "next/link";
import Image from "next/image";

export default function TentangKami() {

  return (
    <div className="min-h-screen w-full relative overflow-hidden cyber-grid data-stream-bg flex flex-col flex-grow">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-drift"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none animate-drift-slow"></div>

      <main className="flex-grow pt-[120px] px-margin-mobile md:px-margin-desktop pb-24 w-full max-w-container-max mx-auto flex flex-col gap-20 relative z-10">
        
        {/* Hero Section: Bento Inspired */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-8 glass-card rounded-2xl p-8 md:p-12 flex flex-col justify-center gap-6 shadow-2xl glow-subtle hover:border-white/12 transition-pro animate-fade-slide-up opacity-0">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm group cursor-pointer">
              <span className="material-symbols-outlined text-[14px] group-hover:scale-110 transition-transform">shield</span>
              Misi Kami
            </div>
            <h1 className="font-display w-full min-h-[110px] sm:min-h-[120px] md:min-h-[140px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight flex items-start flex-wrap animate-fade-in-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Membangun Fondasi Kebenaran Digital.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Di era banjir informasi, CekFakta AI hadir sebagai benteng pertahanan digital masyarakat Indonesia. Kami memberdayakan setiap individu dengan teknologi verifikasi AI tercanggih untuk membedakan fakta dari manipulasi emosional.
            </p>
          </div>
          
          <div className="md:col-span-4 glass-card rounded-2xl overflow-hidden relative min-h-[300px] shadow-2xl glow-subtle transition-pro animate-fade-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-lighten scale-105 hover:scale-110 transition-all duration-[2000ms] ease-out" 
              alt="Server room with glowing blue fiber optic cables" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeWZ57QLCO-tDksvZijezQPdjwdiLtz4PjPML3awID_PoTtwrBHKuzkGpdWVOKyYG0BmCYHQzIut3dRWDkahn0uJBfrOlCO0n1WWLQjW_VkcjoVTdts9-5XMFN-xoS2cwbeOYg6c3M6A7un_m_-14UzPcXgJxYMlaYZpbY5j5TczACWZktznNLU-u23sLnyCmv_bP57Lr5PtikGZMqMCjluIwHeiypEQxuBUhCQC8fIotel6Qo26PkR930DYyp0Y5oY-WWM2Jb"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 flex flex-col gap-2">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
              <p className="font-label-md text-primary tracking-widest uppercase font-bold">Verified System v1.0</p>
            </div>
          </div>
        </div>

        {/* Section: Pilar Fungsional */}
        <section className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/5"></div>
            <h2 className="font-headline-md text-headline-md text-center px-6 tracking-wide text-on-surface animate-heading-glow">Pilar Fungsional</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl border-t-2 border-t-primary/20 flex flex-col gap-4 shadow-xl hover:scale-[1.02] hover:border-primary/30 transition-pro animate-fade-slide-up opacity-0 group cursor-pointer">
              <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 group-hover:text-primary transition-all duration-300">groups</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Pemberdayaan</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Memberikan akses alat verifikasi tingkat elit kepada seluruh lapisan masyarakat Indonesia tanpa hambatan teknis.</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl border-t-2 border-t-primary/20 flex flex-col gap-4 shadow-xl hover:scale-[1.02] hover:border-primary/30 transition-pro animate-fade-slide-up opacity-0 group cursor-pointer" style={{ animationDelay: '150ms' }}>
              <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 group-hover:text-primary transition-all duration-300">verified</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Akurasi</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Memastikan setiap informasi digital yang dianalisis melewati filter logika AI yang ketat dan objektif secara real-time.</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl border-t-2 border-t-primary/20 flex flex-col gap-4 shadow-xl hover:scale-[1.02] hover:border-primary/30 transition-pro animate-fade-slide-up opacity-0 group cursor-pointer" style={{ animationDelay: '300ms' }}>
              <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 group-hover:text-primary transition-all duration-300">public</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Ekosistem Bersih</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Menciptakan ruang siber nasional yang sehat, bebas dari polusi hoaks, manipulasi digital, dan disinformasi.</p>
            </div>
          </div>
        </section>

        {/* Section: Teknologi Gemini AI */}
        <section className="bg-white/[0.01] border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl glow-subtle animate-fade-slide-up opacity-0" style={{ animationDelay: '100ms' }}>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-label-md text-primary uppercase tracking-widest font-bold">Powered by Gemini AI</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight tracking-tight">Analisis Konteks &amp; Sentimen Tingkat Lanjut</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                Kami mengintegrasikan model bahasa besar Gemini AI untuk melakukan bedah forensik digital. Sistem kami tidak hanya memeriksa kata-kata, tetapi memahami intensi, mendeteksi manipulasi emosional, dan memverifikasi silang dengan database fakta global secara real-time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="text-on-surface font-body-md text-body-md">Deteksi Anomali Kontekstual</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="text-on-surface font-body-md text-body-md">Pemetaan Jaringan Disinformasi</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="text-on-surface font-body-md text-body-md">Analisis Bias Linguistik Otomatis</span>
                </li>
              </ul>
            </div>
            
            <div className="relative flex justify-center">
              <div className="w-80 h-80 glass-card rounded-full flex items-center justify-center border-2 border-primary/20 relative overflow-hidden shadow-2xl glow-primary animate-glow-pulse">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-transparent"></div>
                <img 
                  className="w-4/5 h-4/5 object-cover rounded-full shadow-2xl mix-blend-lighten scale-105" 
                  alt="AI neural network visualization" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8YPbQn5r2CHMV0PCr-UDc3dcQ_XrpIfstz7aVWpaj107394tk-fsZCz5GG8Z7ZXpJUTe2iW7H15MLxePiakVolHlzwGrJSD9kzWimHNJ-l-7XL2W8ixpKsRTDxhfPaLsMHBP6xjSfaIBtYCWH1KbIKohDgi_bIusGp5Vwm7ZCUgR_Po6L__8SkSjpjpMpDxfnTsCejEtN-OOmsX-ACMt6wBbPYc_icEfw-0LFEZEUK4QKUBok-197de_pg2FGbPRO8PeD7QFH"
                />
                {/* Orbiting Elements */}
                <div className="absolute w-full h-full border border-dashed border-primary/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mengapa Kami? */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 flex flex-col items-center text-center gap-4 group transition-pro animate-fade-slide-up opacity-0 cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:glow-primary transition-pro shadow-lg">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform duration-300">bolt</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface">Kecepatan</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Hasil verifikasi dalam hitungan detik. Kami menghargai waktu Anda di tengah arus informasi yang cepat.</p>
          </div>
          
          <div className="p-8 flex flex-col items-center text-center gap-4 group transition-pro animate-fade-slide-up opacity-0 cursor-pointer" style={{ animationDelay: '150ms' }}>
            <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:glow-primary transition-pro shadow-lg">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform duration-300">target</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface">Akurasi</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Divalidasi oleh AI dengan tingkat presisi tinggi dan transparansi penuh dalam proses pengambilan kesimpulan.</p>
          </div>
          
          <div className="p-8 flex flex-col items-center text-center gap-4 group transition-pro animate-fade-slide-up opacity-0 cursor-pointer" style={{ animationDelay: '300ms' }}>
            <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:glow-primary transition-pro shadow-lg">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform duration-300">lock</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface">Privasi</h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Data pencarian Anda dienkripsi penuh. Kami tidak menyimpan log pribadi demi keamanan anonimitas Anda.</p>
          </div>
        </section>
      </main>

    </div>
  );
}
