"use client";

import useAuth from "@/hooks/useAuth";
import AddProjectForm from "@/components/AddProjectForm";

export default function AdminPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Bu sayfayı görüntülemek için giriş yapmalısınız.</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <p>Hoşgeldin {user.displayName}</p>
      <AddProjectForm />
    </main>
  );
}
