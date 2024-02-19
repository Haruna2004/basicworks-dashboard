import Sidebar from "@/components/sidebar/sidebar";
import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <main className="flex w-full h-screen">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
