import { sql } from '@/lib/db';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export const revalidate = 0;

export default async function Home() {
  let heroText = "";
  let videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; // Cambia esto por la URL de tu video en Cloudinary
  
  try {
    const settings = await sql`SELECT config_data FROM site_settings WHERE id = 1`;
    if (settings.length > 0) {
      heroText = settings[0].config_data.hero_text || heroText;
      // Asumiendo que guardaste la URL del video en 'hero_image' en tu panel admin
      videoUrl = settings[0].config_data.hero_image || videoUrl; 
    }
  } catch (error) {}

  return (
    <div>
      <div className={styles.heroContainer}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.videoBackground}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
        
        <div className={styles.content}>
          <h1 className={styles.heroTitle}>{heroText}</h1>
        </div>
      </div>

      {/* Sección de categorías similar a tu imagen */}
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Nuestros productos</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
           <div style={{ width: '300px', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ backgroundColor: 'black', color: 'white', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>ACCESORIOS</h3>
              <Link href="/tienda" style={{ display: 'block', padding: '0.5rem', backgroundColor: 'black', color: 'white', borderRadius: '4px', marginTop: '1rem' }}>Ver equipos</Link>
           </div>
           <div style={{ width: '300px', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ backgroundColor: 'black', color: 'white', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>Cardio</h3>
              <Link href="/tienda" style={{ display: 'block', padding: '0.5rem', backgroundColor: 'black', color: 'white', borderRadius: '4px', marginTop: '1rem' }}>Ver equipos</Link>
           </div>
        </div>
      </div>
    </div>
  );
}