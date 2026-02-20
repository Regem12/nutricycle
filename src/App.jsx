import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/admin/LoginPage";
import AdminLayout from "@/layouts/AdminLayout";
import DashboardPage from "@/pages/admin/DashboardPage";
import UsersPage from "@/pages/admin/UsersPage";
import MachinesPage from "@/pages/admin/MachinesPage";
import BatchesPage from "@/pages/admin/BatchesPage";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<LoginPage />} />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="machines" element={<MachinesPage />} />
        <Route path="batches" element={<BatchesPage />} />
      </Route>
    </Routes>
  );
}
