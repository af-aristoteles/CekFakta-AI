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
    <main className="flex-grow pt-[88px] px-margin-mobile md:px-margin-desktop pb-20 w-full max-w-container-max mx-auto flex flex-col gap-16">
      
      {/* Toast Notification */}
      {errorMsg && errorMsg !== "Koneksi ke AI Node sedang padat. Silakan klik tombol analisa kembali dalam beberapa detik." && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-5">
          <div className="bg-error-container text-on-error-container px-6 py-3 rounded-full shadow-lg border border-error flex items-center gap-2">
            <span className="material-symbols-outlined">error</span>
            <span className="font-label-md text-label-md">{errorMsg}</span>
            <button onClick={() => setErrorMsg(null)} className="ml-4 hover:opacity-70">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>
      )}

      {/* Hero Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-12 items-center">
        {/* Left Column: Copy */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <h1 className="font-display text-display text-on-surface">
            Periksa Sebelum <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Percaya.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Analisis teks dan gambar dalam hitungan detik. Mesin AI kami memverifikasi klaim, mendeteksi manipulasi visual, dan memberikan konteks yang akurat untuk melawan disinformasi.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Enkripsi E2E</span>
            </div>
            <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
            <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
              <span className="material-symbols-outlined text-[16px]">speed</span>
              <span>Analisis Real-time</span>
            </div>
          </div>
        </div>

        {/* Right Column: Functional Glass Card */}
        <div className="md:col-span-7 bg-surface-container/40 backdrop-blur-md border border-white/5 rounded-xl p-6 relative overflow-hidden flex flex-col gap-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]">
          
          {/* Scanning Overlay During Analysis */}
          {isAnalyzing && (
            <div className="absolute inset-0 z-20 bg-surface-container-lowest/80 backdrop-blur-md flex flex-col items-center justify-center">
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                <span className="absolute inset-0 flex items-center justify-center material-symbols-outlined text-3xl text-primary animate-pulse">radar</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary animate-pulse">Scanning...</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-center max-w-xs">Cross-referencing with verified data sources</p>
            </div>
          )}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          {errorMsg === "Koneksi ke AI Node sedang padat. Silakan klik tombol analisa kembali dalam beberapa detik." && (
            <div className="bg-error-container/20 border border-error/50 rounded-lg p-4 flex items-center justify-center gap-2 animate-in fade-in">
              <span className="material-symbols-outlined text-error">warning</span>
              <p className="font-body-md text-error text-sm text-center">{errorMsg}</p>
            </div>
          )}

          {/* Text Input Area */}
          <div className="bg-black/20 border border-slate-800 rounded-lg focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200">
            <textarea 
              disabled={isAnalyzing}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="w-full bg-transparent border-none text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 p-4 min-h-[120px] resize-none focus:ring-0 disabled:opacity-50" 
              placeholder="Paste news text here...">
            </textarea>
          </div>
          
          {/* Or Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-white/5 flex-grow"></div>
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">OR</span>
            <div className="h-px bg-white/5 flex-grow"></div>
          </div>
          
          {/* Upload Area */}
          <div 
            onClick={() => !isAnalyzing && fileInputRef.current?.click()}
            className={`border border-dashed relative ${imagePreview ? 'border-primary/50 bg-primary/5' : 'border-slate-700 hover:border-primary/50 bg-white/5 hover:bg-white/10'} rounded-lg p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors duration-200 group overflow-hidden ${isAnalyzing ? 'opacity-50 pointer-events-none' : ''}`}
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
                  <span className="material-symbols-outlined text-primary text-[32px]">check_circle</span>
                  <span className="font-label-md text-label-md text-primary">Image Ready</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleRemoveImage(); }}
                    className="mt-2 text-label-sm font-label-sm text-error bg-error/10 hover:bg-error/20 px-3 py-1 rounded-full border border-error/20 transition-colors"
                  >
                    Remove Image
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[32px]">document_scanner</span>
                <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-on-surface transition-colors">Drag & Drop Image or Screenshot</span>
                <span className="font-label-sm text-label-sm text-outline">Vision AI OCR enabled</span>
              </>
            )}
          </div>
          
          {/* Action Button */}
          <button 
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full bg-primary hover:bg-primary-fixed-dim text-on-primary font-headline-md text-[16px] py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            Analyze with AI
          </button>
        </div>
      </section>

      {/* Dashboard Result Grid */}
      {result && (
        <section id="dashboard-result" className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-8 animate-in slide-in-from-bottom-8 fade-in duration-700">
          <div className="col-span-full mb-4 flex items-center gap-3">
            <div className="h-4 w-1 bg-primary rounded-full"></div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Analysis Results</h2>
          </div>
          
          {/* Trust Score Card */}
          <div className="md:col-span-4 bg-surface-container/30 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-6">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider self-start w-full text-center">Trust Score</span>
            
            {/* Circular Chart */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
                <path 
                  className={`transition-all duration-1000 ease-out ${
                    result.trust_score >= 80 ? 'text-secondary' : 
                    result.trust_score >= 50 ? 'text-tertiary-container' : 
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
                <span className="font-display text-display text-on-surface text-[36px]">{result.trust_score}%</span>
              </div>
            </div>
            
            <div className={`font-label-sm text-label-sm px-4 py-2 rounded-full border ${
              result.trust_score >= 80 ? 'text-secondary bg-secondary/10 border-secondary/20' : 
              result.trust_score >= 50 ? 'text-tertiary-container bg-tertiary-container/10 border-tertiary-container/20' : 
              'text-error bg-error/10 border-error/20'
            }`}>
              {result.verdict_title}
            </div>
            
            <div className="w-full flex items-center justify-between border-t border-white/5 pt-4 mt-2">
              <span className="font-label-sm text-label-sm text-outline">Risk Level</span>
              <span className={`font-label-sm text-label-sm font-bold ${
                 result.risk_level.toLowerCase() === 'tinggi' ? 'text-error' : 
                 result.risk_level.toLowerCase() === 'sedang' ? 'text-tertiary-container' : 
                 'text-secondary'
              }`}>
                {result.risk_level.toUpperCase()}
              </span>
            </div>
          </div>
          
          {/* Data Grid Card */}
          <div className="md:col-span-8 bg-surface-container/30 border border-white/5 rounded-xl p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                <span className="material-symbols-outlined text-outline text-[18px]">info</span>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Analysis Summary</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                {result.analysis_summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              {/* Indikator Kejanggalan */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="material-symbols-outlined text-outline text-[18px]">warning</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Hoax Indicators</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {result.hoax_indicators.map((indicator: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${result.trust_score >= 50 ? 'bg-secondary' : 'bg-error'}`}></div>
                      <span className="font-body-md text-body-md text-on-surface-variant text-sm">{indicator}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Edukasi Digital */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="material-symbols-outlined text-outline text-[18px]">school</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Edukasi Digital</span>
                </div>
                <div className="bg-black/20 border border-slate-800 rounded-lg p-4">
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm italic">
                    "{result.educational_tip}"
                  </p>
                </div>
              </div>
            </div>

            {/* Cyber-Safety Action Plan */}
            {result.action_plan && (
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">security</span>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Cyber-Safety Action Plan</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Immediate Action */}
                  <div className="bg-error/5 border border-error/20 rounded-lg p-4 flex flex-col gap-3 hover:border-error/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-error text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                      <span className="font-label-sm text-label-sm font-bold text-error uppercase tracking-wider">Langkah Darurat</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                      {result.action_plan.immediate_action}
                    </p>
                  </div>

                  {/* Hoax Red Flags */}
                  <div className="bg-tertiary-container/5 border border-tertiary-container/20 rounded-lg p-4 flex flex-col gap-3 hover:border-tertiary-container/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary-container text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
                      <span className="font-label-sm text-label-sm font-bold text-tertiary-container uppercase tracking-wider">Ciri-Ciri Hoaks</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                      {result.action_plan.hoax_red_flags}
                    </p>
                  </div>

                  {/* Reporting Guide */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex flex-col gap-3 hover:border-primary/40 transition-colors">
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
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                <span className="material-symbols-outlined text-secondary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Gunakan Kanal Resmi untuk Konfirmasi Mandiri</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://www.komdigi.go.id/berita/tags?tag=hoaks-hari-ini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface-container/50 border border-white/5 hover:border-secondary/40 rounded-lg p-4 flex items-center gap-3 transition-all duration-200 hover:bg-secondary/5"
                >
                  <span className="material-symbols-outlined text-secondary text-[24px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
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
                  className="group bg-surface-container/50 border border-white/5 hover:border-secondary/40 rounded-lg p-4 flex items-center gap-3 transition-all duration-200 hover:bg-secondary/5"
                >
                  <span className="material-symbols-outlined text-secondary text-[24px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span>
                  <div className="flex flex-col gap-0.5 flex-grow">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">Konsorsium CekFakta.com</span>
                    <span className="font-label-sm text-label-sm text-outline text-[11px]">cekfakta.com</span>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[16px] group-hover:text-secondary transition-colors">open_in_new</span>
                </a>

                <a
                  href="https://cekfakta.kompas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface-container/50 border border-white/5 hover:border-secondary/40 rounded-lg p-4 flex items-center gap-3 transition-all duration-200 hover:bg-secondary/5"
                >
                  <span className="material-symbols-outlined text-secondary text-[24px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>newspaper</span>
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
  );
}
