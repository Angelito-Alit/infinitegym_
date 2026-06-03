import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <aside style={{ width: '250px', backgroundColor: 'var(--card-bg)', borderRight: '1px solid var(--border-color)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Admin</h2>
      <Link href="/admin">Dashboard</Link>
      <Link href="/admin/productos">Gestión de Productos</Link>
      <Link href="/admin/configuracion">Apariencia y Textos</Link>
    </aside>
  );
}