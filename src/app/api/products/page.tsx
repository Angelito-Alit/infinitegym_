'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/Admin.module.css';

export default function AdminProductos() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', price: '', image_url: '', category: '' });

  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(data => setProducts(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setFormData({ name: '', description: '', price: '', image_url: '', category: '' });
    fetch('/api/products').then(res => res.json()).then(data => setProducts(data));
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    fetch('/api/products').then(res => res.json()).then(data => setProducts(data));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gestión de Productos</h1>
      
      <form onSubmit={handleSubmit} className={styles.formGroup}>
        <input className={styles.input} placeholder="Nombre del producto" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required style={{marginBottom: '1rem'}} />
        <textarea className={styles.textarea} placeholder="Descripción" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required style={{marginBottom: '1rem'}} />
        <input className={styles.input} type="number" placeholder="Precio" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required style={{marginBottom: '1rem'}} />
        <input className={styles.input} placeholder="URL de la Imagen (Cloudinary)" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} required style={{marginBottom: '1rem'}} />
        <input className={styles.input} placeholder="Categoría" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} required style={{marginBottom: '1rem'}} />
        <button type="submit" className={styles.button}>Añadir Producto</button>
      </form>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Nombre</th>
            <th className={styles.th}>Precio</th>
            <th className={styles.th}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p: any) => (
            <tr key={p.id}>
              <td className={styles.td}>{p.name}</td>
              <td className={styles.td}>${p.price}</td>
              <td className={styles.td}>
                <button onClick={() => handleDelete(p.id)} className={styles.actionButton}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}