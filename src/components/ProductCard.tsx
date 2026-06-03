'use client';

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3>{product.name}</h3>
      <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>${product.price}</p>
      <button 
        onClick={addToCart}
        style={{ backgroundColor: 'var(--accent-color)', color: '#000', padding: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginTop: 'auto' }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}