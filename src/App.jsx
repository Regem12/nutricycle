import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/admin/LoginPage";
import ResetPasswordPage from "@/pages/ResetPasswordPage";
import AdminLayout from "@/layouts/AdminLayout";
import DashboardPage from "@/pages/admin/DashboardPage";
import UsersPage from "@/pages/admin/UsersPage";
import MachinesPage from "@/pages/admin/MachinesPage";
import BatchesPage from "@/pages/admin/BatchesPage";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#333",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

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
    </>
  );
}
