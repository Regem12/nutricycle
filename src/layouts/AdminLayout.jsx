import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/admin/Sidebar";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminLayout() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      <Outlet context={{ toggleSidebar }} />
    </div>
  );
}
