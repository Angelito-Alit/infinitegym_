import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 70px)' }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        {children}
      </div>
    </div>
  );
}