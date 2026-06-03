import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-color)' }}>
      <div>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
          Infinité Gym
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/tienda">Tienda</Link>
        <Link href="/admin" style={{ color: 'var(--accent-color)' }}>Panel Admin</Link>
      </div>
    </nav>
  );
}