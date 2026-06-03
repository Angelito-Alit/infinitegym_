import { sql } from '@/lib/db';
import styles from '@/styles/Home.module.css';

export const revalidate = 0;

export default async function Home() {
  let heroText = "Supera tus límites";
  let heroImage = "";
  let whatsappNumber = "1234567890";
  
  try {
    const settings = await sql`SELECT config_data FROM site_settings WHERE id = 1`;
    if (settings.length > 0) {
      heroText = settings[0].config_data.hero_text || heroText;
      heroImage = settings[0].config_data.hero_image || heroImage;
      whatsappNumber = settings[0].config_data.whatsapp || whatsappNumber;
    }
  } catch (error) {}

  return (
    <div className={styles.heroContainer}>
      <div style={{ textAlign: 'center' }}>
        <h1 className={styles.heroTitle}>{heroText}</h1>
        {heroImage && <img src={heroImage} alt="Infinité Gym" className={styles.heroImage} />}
      </div>
      
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
      >
        ¡Escríbenos!
      </a>
    </div>
  );
}