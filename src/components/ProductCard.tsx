'use client';

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const addToQuote = () => {
    const quoteList = JSON.parse(localStorage.getItem('quote') || '[]');
    quoteList.push(product);
    localStorage.setItem('quote', JSON.stringify(quoteList));
    alert('Producto añadido a tu lista de cotización.');
    // Here you would ideally trigger an event to update a cart icon counter in the Navbar
  };

  return (
    <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'contain', borderRadius: '4px' }} />
      <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{product.name}</h3>
      <p style={{ color: '#555', fontWeight: 'bold', fontSize: '1.2rem' }}>${product.price}</p>
      <button 
        onClick={addToQuote}
        style={{ backgroundColor: 'var(--accent-color)', color: 'var(--accent-text)', padding: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginTop: 'auto', transition: 'background-color 0.2s' }}
      >
        Añadir para cotizar
      </button>
    </div>
  );
}