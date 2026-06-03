'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 70px)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem', backgroundColor: '#f9f9f9' }}>
      <form onSubmit={handleLogin} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: '#333' }}>Correo electrónico</label>
          <input 
            type="email" 
            placeholder="admin@infinitefitness.mx" 
            style={{ padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: '#333' }}>Contraseña</label>
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px' }}
          />
        </div>

        {error && <p style={{ color: 'red', fontSize: '0.8rem', margin: '0' }}>{error}</p>}

        <button type="submit" style={{ backgroundColor: 'black', color: 'white', padding: '1rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '0.5rem' }}>
          Iniciar sesión
        </button>
        
        <button type="button" style={{ background: 'none', border: 'none', color: '#666', fontSize: '0.8rem', cursor: 'pointer', textAlign: 'left', padding: '0' }}>
          Restablecer contraseña
        </button>
      </form>
    </div>
  );
}