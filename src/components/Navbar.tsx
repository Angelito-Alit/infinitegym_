import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-[#050505]/90 backdrop-blur-xl border-b border-purple-900/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="font-light tracking-[0.1em] text-sm">+52 1 446 200 0666</span>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <span className="text-3xl font-extralight tracking-[0.3em] text-white uppercase">Infinité</span>
          </Link>
        </div>
        
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-xs font-light tracking-widest text-gray-400 hover:text-white transition-colors uppercase">Inicio</Link>
          <Link href="/nosotros" className="text-xs font-light tracking-widest text-gray-400 hover:text-white transition-colors uppercase">Nosotros</Link>
          <Link href="/tienda" className="text-xs font-light tracking-widest text-gray-400 hover:text-white transition-colors uppercase">Tienda</Link>
          <Link href="/login" className="text-xs font-light tracking-widest text-gray-400 hover:text-white transition-colors uppercase ml-4">Iniciar sesión</Link>
          <button className="px-6 py-2.5 bg-[#0a0a0a] text-white text-xs tracking-widest uppercase rounded border border-purple-600 glow-purple hover:bg-purple-900/30 transition-all duration-300">
            ¡Escríbenos!
          </button>
        </nav>
      </div>
    </header>
  );
}