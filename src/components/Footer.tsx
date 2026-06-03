import { sql } from '@/lib/db';

export default async function Footer() {
  let footerText = "© 2026 Infinité Gym. Todos los derechos reservados.";

  try {
    const settings = await sql`SELECT config_data FROM site_settings WHERE id = 1`;
    if (settings.length > 0) {
      footerText = settings[0].config_data.footer_text || footerText;
    }
  } catch (error) {}

  return (
    <footer style={{ 
      backgroundColor: 'var(--card-bg)', 
      borderTop: '1px solid var(--border-color)', 
      padding: '2rem', 
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <p style={{ color: '#888', fontSize: '1rem' }}>
        {footerText}
      </p>
    </footer>
  );
}