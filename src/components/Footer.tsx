import { sql } from '@/lib/db';

export default async function Footer() {
  let footerText = "Derechos de autor y nombre de la empresa © 2026";

  try {
    const settings = await sql`SELECT config_data FROM site_settings WHERE id = 1`;
    if (settings.length > 0) {
      footerText = settings[0].config_data.footer_text || footerText;
    }
  } catch (error) {}

  return (
    <footer style={{ 
      backgroundColor: 'var(--footer-bg)', 
      color: 'var(--footer-text)',
      padding: '3rem 2rem', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>INFINITÉ PRODUCTS</div>
      <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
        {footerText}
      </p>
    </footer>
  );
}