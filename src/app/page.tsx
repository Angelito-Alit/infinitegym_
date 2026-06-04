import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-purple-600/40">
      <Navbar />
      
      <main>
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-carbon">
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505] z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent z-10"></div>
          
          <div className="absolute inset-0 opacity-[0.03] z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[60rem] font-bold tracking-tighter text-white">∞</span>
          </div>

          <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
            <img 
              src="/hero-athletes.jpg" 
              alt="Atletas de élite entrenando" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-40"
            />
          </div>

          <div className="relative z-20 text-center flex flex-col items-center mt-20">
            
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-purple-500 via-purple-900 to-black p-[1px] shadow-[0_0_80px_rgba(147,51,234,0.4)] mb-12 relative group">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#050505] flex items-center justify-center overflow-hidden relative border-[4px] border-[#0a0a0a]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-50"></div>
                <span className="text-white text-sm tracking-[0.3em] font-light z-10 uppercase">Infinité</span>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-purple-600/50 blur-xl"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-[0.25em] uppercase mb-6 text-glow">
              Rendimiento Absoluto
            </h1>
          </div>
        </section>

        <section className="py-40 px-6 max-w-7xl mx-auto relative z-20 bg-[#050505]">
          <div className="text-center mb-24">
            <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-[0.3em]">
              Nuestros productos
            </h2>
            <div className="w-16 h-[1px] bg-purple-600 mx-auto mt-8 shadow-[0_0_15px_rgba(147,51,234,1)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProductCard 
              title="Accesorios" 
              description="Cuerda de suspensión TRX con acabados metálicos de primera calidad para entrenamiento funcional extremo." 
              imageSrc="/trx.jpg" 
            />
            <ProductCard 
              title="Cardio" 
              description="Cintas de correr de última generación con interfaces inmersivas y amortiguación adaptativa." 
              imageSrc="/cardio.jpg" 
            />
            <ProductCard 
              title="Fuerza" 
              description="Máquina Smith premium en acabado plateado, biomecánica perfecta para levantamientos de precisión." 
              imageSrc="/smith.jpg" 
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}