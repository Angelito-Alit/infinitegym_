import { sql } from '@/lib/db';
import ProductCard from '@/components/ProductCard';

export const revalidate = 0;

export default async function Tienda() {
  let products: any[] = [];
  
  try {
    products = await sql`SELECT * FROM products ORDER BY created_at DESC`;
  } catch (error) {}

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', color: 'var(--accent-color)', fontSize: '2.5rem' }}>Equipamiento</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}