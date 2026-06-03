import { sql } from '@/lib/db';

export const revalidate = 0;

export default async function Nosotros() {
  let aboutTitle = "Sobre Nosotros";
  let aboutText = "Somos Infinité Gym, tu mejor opción para equipamiento de alto rendimiento.";
  let aboutImage = "";

  try {
    const settings = await sql`SELECT config_data FROM site_settings WHERE id = 1`;
    if (settings.length > 0) {
      aboutTitle = settings[0].config_data.about_title || aboutTitle;
      aboutText = settings[0].config_data.about_text || aboutText;
      aboutImage = settings[0].config_data.about_image || aboutImage;
    }
  } catch (error) {}

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', minHeight: 'calc(100vh - 70px)' }}>
      <h1 style={{ color: 'var(--accent-color)', fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
        {aboutTitle}
      </h1>
      {aboutImage && (
        <img 
          src={aboutImage} 
          alt="Sobre Nosotros" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '2rem', border: '1px solid var(--border-color)', objectFit: 'cover' }} 
        />
      )}
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-color)', whiteSpace: 'pre-wrap' }}>
        {aboutText}
      </p>
    </div>
  );
}