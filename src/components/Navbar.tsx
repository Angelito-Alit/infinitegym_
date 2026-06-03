import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-color)', flexWrap: 'wrap', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontSize: '0.9rem', color: '#666' }}>+52 1 446 200 0666</span>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/tienda">Tienda</Link>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link href="/cotizacion" style={{ padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '50%' }}>
          🛒
        </Link>
        <Link href="/admin" style={{ padding: '0.5rem 1rem', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '0.9rem' }}>
          Iniciar sesión
        </Link>
        <a href="https://wa.me/5214462000666" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'var(--accent-color)', color: 'var(--accent-text)', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.9rem' }}>
          ¡Escríbenos!
        </a>
      </div>
    </nav>
  );
} 