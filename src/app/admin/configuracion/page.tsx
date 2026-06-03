'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/Admin.module.css';

export default function AdminConfiguracion() {
  const [settings, setSettings] = useState({
    hero_text: '', hero_image: '', whatsapp: '', about_title: '', about_text: '', about_image: '', footer_text: ''
  });

  useEffect(() => {
    fetch('/api/settings').then(res => res.json()).then(data => setSettings(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings)
    });
    alert('Configuración actualizada correctamente');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Apariencia y Textos</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Texto Principal (Inicio)</label>
          <input className={styles.input} value={settings.hero_text || ''} onChange={e => setSettings({...settings, hero_text: e.target.value})} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>URL Imagen Principal</label>
          <input className={styles.input} value={settings.hero_image || ''} onChange={e => setSettings({...settings, hero_image: e.target.value})} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Número WhatsApp (sin espacios)</label>
          <input className={styles.input} value={settings.whatsapp || ''} onChange={e => setSettings({...settings, whatsapp: e.target.value})} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Título Sección Nosotros</label>
          <input className={styles.input} value={settings.about_title || ''} onChange={e => setSettings({...settings, about_title: e.target.value})} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Texto Sección Nosotros</label>
          <textarea className={styles.textarea} value={settings.about_text || ''} onChange={e => setSettings({...settings, about_text: e.target.value})} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>URL Imagen Nosotros</label>
          <input className={styles.input} value={settings.about_image || ''} onChange={e => setSettings({...settings, about_image: e.target.value})} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Texto del Footer</label>
          <input className={styles.input} value={settings.footer_text || ''} onChange={e => setSettings({...settings, footer_text: e.target.value})} />
        </div>
        <button type="submit" className={styles.button}>Guardar Cambios</button>
      </form>
    </div>
  );
}