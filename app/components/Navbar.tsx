"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-surface/40 backdrop-blur-xl border-b border-white/5 fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
        <Link href="/" className="text-headline-md font-headline-md font-bold text-on-surface flex items-center gap-2">
          <svg className="w-7 h-7 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-cyan-500/30" />
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <circle cx="12" cy="11" r="3" />
            <path d="m9 11 2 2 4-4" className="stroke-cyan-400" />
          </svg>
          CekFakta AI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="/">Beranda</Link>
          <Link className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="/about">Tentang</Link>
        </div>

        <div className="hidden md:flex items-center">
          <span className="font-label-sm text-label-sm text-outline px-3 py-1 bg-surface-container rounded-DEFAULT border border-white/5">v1.0 - Live Grounding Engine</span>
        </div>

        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface p-1 hover:text-primary transition-colors focus:outline-none"
        >
          <span className="material-symbols-outlined text-[28px]">{isOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`fixed top-[68px] left-0 w-full z-40 bg-surface/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 md:hidden overflow-hidden ${
          isOpen ? "max-h-[250px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-4 items-center w-full px-margin-mobile">
          <Link 
            onClick={() => setIsOpen(false)}
            className="text-on-surface-variant font-body-lg text-lg hover:text-primary transition-colors w-full text-center py-2" 
            href="/"
          >
            Beranda
          </Link>
          <Link 
            onClick={() => setIsOpen(false)}
            className="text-on-surface-variant font-body-lg text-lg hover:text-primary transition-colors w-full text-center py-2" 
            href="/about"
          >
            Tentang
          </Link>
          <div className="w-full h-px bg-white/5 my-1"></div>
          <span className="font-label-sm text-label-sm text-outline px-3 py-1 bg-surface-container rounded-DEFAULT border border-white/5">
            v1.0 - Live Grounding Engine
          </span>
        </div>
      </div>
    </>
  );
}
