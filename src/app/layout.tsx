import '@/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Infinité Gym',
  description: 'Tienda y sitio oficial de Infinité Gym',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}