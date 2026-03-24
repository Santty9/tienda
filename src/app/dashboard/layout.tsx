// /src/app/dashboard/layout.tsx
import DashboardLayout from "@/components/DashboardLayout"; // Importa el layout del dashboard

export default function DashboardPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      {children} {/* Aquí cargamos las páginas del dashboard como Perfil, Productos, etc. */}
    </DashboardLayout>
  );
}