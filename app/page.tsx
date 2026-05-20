"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg("Ukuran file maksimal 5MB");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setErrorMsg(null);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAnalyze = async () => {
    if (!textInput.trim() && !imageFile) {
      setErrorMsg("Mohon masukkan teks atau unggah gambar untuk dianalisis.");
      return;
    }

    setErrorMsg(null);
    setIsAnalyzing(true);
    setResult(null);

    try {
      const formData = new FormData();
      if (textInput.trim()) {
        formData.append("text", textInput.trim());
      }
      if (imageFile) {
        formData.append("image", imageFile);
      }

      // Auto-clear form inputs on submit
      setTextInput("");
      setImageFile(null);
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal melakukan analisis. Silakan coba lagi.");
      }

      setResult(data);
      
      // Scroll to result
      setTimeout(() => {
        document.getElementById("dashboard-result")?.scrollIntoView({ behavior: "smooth" });
      }, 100);

    } catch (err: any) {
      setErrorMsg(err.message || "Terjadi kesalahan sistem.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden cyber-grid data-stream-bg flex flex-col flex-grow">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-drift"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none animate-drift-slow"></div>

      <main className="flex-grow pt-[100px] px-margin-mobile md:px-margin-desktop pb-24 w-full max-w-container-max mx-auto flex flex-col gap-20 relative z-10">
        
        {/* Toast Notification */}
        {errorMsg && errorMsg !== "Koneksi ke AI Node sedang padat. Silakan klik tombol analisa kembali dalam beberapa detik." && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[99999] animate-in fade-in slide-in-from-top-5">
            <div className="bg-error-container text-on-error-container px-6 py-3 rounded-full shadow-lg border border-error flex items-center gap-2">
              <span className="material-symbols-outlined">error</span>
              <span className="font-label-md text-label-md">{errorMsg}</span>
              <button onClick={() => setErrorMsg(null)} className="ml-4 hover:opacity-70 transition-opacity">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>
        )}

        {/* Hero Split Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-6 items-center">
          {/* Left Column: Copy */}
          <div className="md:col-span-5 flex flex-col gap-8 animate-fade-slide-up opacity-0">
            <h1 className="font-display w-full min-h-[80px] sm:min-h-[100px] md:min-h-[120px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight flex items-start flex-wrap">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent animate-gradient-wave">
                Periksa Sebelum Percaya.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md leading-relaxed">
              Analisis teks dan gambar dalam hitungan detik. Mesin AI kami memverifikasi klaim, mendeteksi manipulasi visual, dan memberikan konteks yang akurat untuk melawan disinformasi.
            </p>
            <div className="flex items-center gap-6 mt-2">
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
                <span className="material-symbols-outlined text-[18px] text-cyan-400">verified_user</span>
                <span>Enkripsi E2E</span>
              </div>
              <div className="w-1.5 h-1.5 bg-outline-variant rounded-full"></div>
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
                <span className="material-symbols-outlined text-[18px] text-cyan-400">speed</span>
                <span>Analisis Real-time</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Glass Card */}
          <div className="md:col-span-7 glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col gap-6 shadow-2xl glow-subtle hover:border-white/15 transition-pro animate-scale-in opacity-0" style={{ animationDelay: '200ms' }}>
            
            {/* Scanning Overlay During Analysis */}
            {isAnalyzing && (
              <div className="absolute inset-0 z-20 bg-surface-container-lowest/80 backdrop-blur-md flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 mb-4">
                  <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                  <span className="absolute inset-0 flex items-center justify-center material-symbols-outlined text-3xl text-primary animate-pulse">radar</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary animate-pulse tracking-wider uppercase">Scanning...</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-center max-w-xs leading-relaxed">Cross-referencing with verified data sources</p>
              </div>
            )}

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            {errorMsg === "Koneksi ke AI Node sedang padat. Silakan klik tombol analisa kembali dalam beberapa detik." && (
              <div className="bg-error-container/10 border border-error/30 rounded-xl p-4 flex items-center justify-center gap-2 animate-in fade-in">
                <span className="material-symbols-outlined text-error">warning</span>
                <p className="font-body-md text-error text-sm text-center">{errorMsg}</p>
              </div>
            )}

            {/* Text Input Area */}
            <div className="bg-black/35 border border-white/10 rounded-xl focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500/20 transition-all duration-300">
              <textarea 
                disabled={isAnalyzing}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="w-full bg-transparent border-none text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/40 p-5 min-h-[140px] resize-none focus:ring-0 disabled:opacity-50" 
                placeholder="Tempel atau ketik klaim berita di sini untuk dianalisa...">
              </textarea>
            </div>
            
            {/* Or Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px bg-white/5 flex-grow"></div>
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Atau</span>
              <div className="h-px bg-white/5 flex-grow"></div>
            </div>
            
            {/* Upload Area */}
            <div 
              onClick={() => !isAnalyzing && fileInputRef.current?.click()}
              className={`border border-dashed relative rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-pro group overflow-hidden ${
                imagePreview 
                  ? 'border-primary/50 bg-primary/10' 
                  : 'border-white/10 hover:border-primary/50 bg-white/[0.02] hover:bg-white/[0.04]'
              } ${isAnalyzing ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <input 
                type="file" 
                className="hidden" 
                ref={fileInputRef} 
                accept="image/*" 
                onChange={handleImageUpload}
              />

              {imagePreview ? (
                <>
                  <img src={imagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[36px]">check_circle</span>
                    <span className="font-label-md text-label-md text-primary tracking-wide">Gambar Siap Dianalisis</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleRemoveImage(); }}
                      className="mt-2 text-label-sm font-label-sm text-error bg-error/10 hover:bg-error/20 px-4 py-1.5 rounded-full border border-error/20 transition-pro hover:scale-105"
                    >
                      Hapus Gambar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-pro text-[36px]">document_scanner</span>
                  <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-on-surface transition-pro">Unggah Gambar atau Tangkapan Layar</span>
                  <span className="font-label-sm text-label-sm text-outline/60">Didukung Vision AI OCR</span>
                </>
              )}
            </div>
            
            {/* Action Button */}
            <button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary-container font-headline-md text-[16px] py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ease-out transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shadow-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.55)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group animate-glow-pulse"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform duration-200" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
              Analisa dengan AI
            </button>
          </div>
        </section>

        {/* Dashboard Result Grid */}
        {result && (
          <section id="dashboard-result" className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
            <div className="col-span-full mb-2 flex items-center gap-3 animate-fade-slide-up opacity-0">
              <div className="h-5 w-1.5 bg-primary rounded-full"></div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">Hasil Analisis Fakta</h2>
            </div>
            
            {/* Trust Score Card */}
            <div 
              style={{ animationDelay: '150ms' }}
              className={`md:col-span-4 glass-card rounded-2xl p-8 flex flex-col items-center justify-center gap-6 shadow-2xl transition-pro animate-fade-slide-up opacity-0 ${
                result.trust_score >= 80 ? 'glow-secondary border-secondary/20' : 
                result.trust_score >= 50 ? 'glow-primary border-primary/20' : 
                'glow-error border-error/20'
              }`}
            >
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest self-start w-full text-center">Skor Kepercayaan</span>
              
              {/* Circular Chart */}
              <div className={`relative w-44 h-44 rounded-full flex items-center justify-center transition-all duration-500 ${
                result.trust_score >= 80 ? 'shadow-[0_0_25px_rgba(78,222,163,0.35)] bg-secondary/[0.03] border border-secondary/25' : 
                result.trust_score >= 50 ? 'shadow-[0_0_25px_rgba(56,189,248,0.35)] bg-primary/[0.03] border border-primary/25' : 
                'shadow-[0_0_25px_rgba(255,116,107,0.35)] bg-error/[0.03] border border-error/25'
              }`}>
                <svg className={`w-full h-full -rotate-90 filter ${
                  result.trust_score >= 80 ? 'drop-shadow-[0_0_12px_rgba(78,222,163,0.25)]' : 
                  result.trust_score >= 50 ? 'drop-shadow-[0_0_12px_rgba(56,189,248,0.25)]' : 
                  'drop-shadow-[0_0_12px_rgba(255,116,107,0.25)]'
                }`} viewBox="0 0 36 36">
                  <path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
                  <path 
                    className={`transition-all duration-1000 ease-out ${
                      result.trust_score >= 80 ? 'text-secondary' : 
                      result.trust_score >= 50 ? 'text-primary' : 
                      'text-error'
                    }`} 
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeDasharray={`${result.trust_score}, 100`} 
                    strokeLinecap="round" 
                    strokeWidth="2.5"
                  ></path>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-display text-display text-on-surface text-[40px] tracking-tight">{result.trust_score}%</span>
                </div>
              </div>
              
              <div className={`font-label-md text-label-md px-5 py-2.5 rounded-full border tracking-wide uppercase font-bold transition-pro ${
                result.trust_score >= 80 ? 'text-secondary bg-secondary/10 border-secondary/30 glow-secondary' : 
                result.trust_score >= 50 ? 'text-primary bg-primary/10 border-primary/30 glow-primary' : 
                'text-error bg-error/10 border-error/30 glow-error'
              }`}>
                {result.verdict_title}
              </div>
              
              <div className="w-full flex items-center justify-between border-t border-white/5 pt-5 mt-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Tingkat Risiko</span>
                <span className={`font-label-sm text-label-sm font-bold tracking-widest ${
                   result.risk_level.toLowerCase() === 'tinggi' ? 'text-error' : 
                   result.risk_level.toLowerCase() === 'sedang' ? 'text-primary' : 
                   'text-secondary'
                }`}>
                  {result.risk_level.toUpperCase()}
                </span>
              </div>
            </div>
            
            {/* Data Grid Card */}
            <div 
              style={{ animationDelay: '300ms' }}
              className="md:col-span-8 glass-card rounded-2xl p-8 flex flex-col gap-8 shadow-2xl animate-fade-slide-up opacity-0"
            >
              <div className="flex flex-col gap-4 animate-fade-slide-up opacity-0" style={{ animationDelay: '450ms' }}>
                 <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <span className="material-symbols-outlined text-outline text-[20px]">info</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Ringkasan Analisis</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed text-justify">
                  {result.analysis_summary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 animate-fade-slide-up opacity-0" style={{ animationDelay: '550ms' }}>
                {/* Indikator Kejanggalan */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                    <span className="material-symbols-outlined text-outline text-[20px]">warning</span>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Indikator Hoaks</span>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {result.hoax_indicators.map((indicator: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`mt-2.5 w-2 h-2 rounded-full shrink-0 ${result.trust_score >= 50 ? 'bg-secondary' : 'bg-error'}`}></div>
                        <span className="font-body-md text-body-md text-on-surface-variant text-[14px] leading-relaxed">{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Edukasi Digital */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                    <span className="material-symbols-outlined text-outline text-[20px]">school</span>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Edukasi Digital</span>
                  </div>
                  <div className="bg-black/35 border border-white/5 rounded-xl p-5 hover:border-white/10 transition-pro">
                    <p className="font-body-md text-body-md text-on-surface-variant text-[14px] italic leading-relaxed">
                      "{result.educational_tip}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Cyber-Safety Action Plan */}
              {result.action_plan && (
                <div className="flex flex-col gap-4 mt-4 animate-fade-slide-up opacity-0" style={{ animationDelay: '650ms' }}>
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">security</span>
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Cyber-Safety Action Plan</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Immediate Action */}
                    <div className="bg-error/5 border border-error/15 rounded-xl p-5 flex flex-col gap-3 hover:border-error/45 hover:scale-[1.02] transition-pro shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-error text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                        <span className="font-label-sm text-label-sm font-bold text-error uppercase tracking-wider">Langkah Darurat</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                        {result.action_plan.immediate_action}
                      </p>
                    </div>

                    {/* Hoax Red Flags */}
                    <div className="bg-tertiary-container/5 border border-tertiary-container/15 rounded-xl p-5 flex flex-col gap-3 hover:border-tertiary-container/45 hover:scale-[1.02] transition-pro shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary-container text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
                        <span className="font-label-sm text-label-sm font-bold text-tertiary-container uppercase tracking-wider">Ciri-Ciri Hoaks</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                        {result.action_plan.hoax_red_flags}
                      </p>
                    </div>

                    {/* Reporting Guide */}
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-5 flex flex-col gap-3 hover:border-primary/45 hover:scale-[1.02] transition-pro shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                        <span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wider">Cara Lapor</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                        {result.action_plan.reporting_guide}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Official Verification Channels — Static */}
              <div className="flex flex-col gap-4 mt-4 animate-fade-slide-up opacity-0" style={{ animationDelay: '750ms' }}>
                <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Saluran Konfirmasi Mandiri Resmi</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href="https://www.komdigi.go.id/berita/tags?tag=hoaks-hari-ini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/[0.02] border border-white/5 hover:border-secondary/35 rounded-xl p-5 flex items-center gap-3 transition-pro hover:bg-secondary/5 hover:scale-[1.02] hover:glow-secondary"
                  >
                    <span className="material-symbols-outlined text-secondary text-[24px] group-hover:scale-110 transition-transform animate-icon-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                    <div className="flex flex-col gap-0.5 flex-grow">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">Cek Fakta Komdigi</span>
                      <span className="font-label-sm text-label-sm text-outline text-[11px]">komdigi.go.id</span>
                    </div>
                    <span className="material-symbols-outlined text-outline text-[16px] group-hover:text-secondary transition-colors">open_in_new</span>
                  </a>

                  <a
                    href="https://cekfakta.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/[0.02] border border-white/5 hover:border-secondary/35 rounded-xl p-5 flex items-center gap-3 transition-pro hover:bg-secondary/5 hover:scale-[1.02] hover:glow-secondary"
                  >
                    <span className="material-symbols-outlined text-secondary text-[24px] group-hover:scale-110 transition-transform animate-icon-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span>
                    <div className="flex flex-col gap-0.5 flex-grow">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">CekFakta.com</span>
                      <span className="font-label-sm text-label-sm text-outline text-[11px]">cekfakta.com</span>
                    </div>
                    <span className="material-symbols-outlined text-outline text-[16px] group-hover:text-secondary transition-colors">open_in_new</span>
                  </a>

                  <a
                    href="https://cekfakta.kompas.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/[0.02] border border-white/5 hover:border-secondary/35 rounded-xl p-5 flex items-center gap-3 transition-pro hover:bg-secondary/5 hover:scale-[1.02] hover:glow-secondary"
                  >
                    <span className="material-symbols-outlined text-secondary text-[24px] group-hover:scale-110 transition-transform animate-icon-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>newspaper</span>
                    <div className="flex flex-col gap-0.5 flex-grow">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">Kompas Cek Fakta</span>
                      <span className="font-label-sm text-label-sm text-outline text-[11px]">cekfakta.kompas.com</span>
                    </div>
                    <span className="material-symbols-outlined text-outline text-[16px] group-hover:text-secondary transition-colors">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
