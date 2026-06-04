import { sql } from '@/lib/db';
import ProductCard from '@/components/ProductCard';

export const revalidate = 0;

export default async function Tienda() {
  let products: any[] = [];
  
  try {
    products = await sql`SELECT * FROM products ORDER BY created_at DESC`;
  } catch (error) {}

  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-purple-600/40 py-24 px-6 relative">
      {/* Background elements para mantener el estilo premium */}
      <div className="absolute inset-0 bg-carbon z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-3xl md:text-4xl font-light text-white uppercase tracking-[0.3em] text-glow">
            Equipamiento
          </h1>
          <div className="w-16 h-[1px] bg-purple-600 mx-auto mt-8 shadow-[0_0_15px_rgba(147,51,234,1)]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product: any) => (
            <ProductCard 
              key={product.id} 
              title={product.name}
              description={product.description || `Precio de lista: $${product.price}`}
              imageSrc={product.image_url} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}