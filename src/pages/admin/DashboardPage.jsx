import React from "react";
import { Users, Cpu, Package, Activity, CheckCircle } from "lucide-react";
import DashboardHeader from "@/components/admin/DashboardHeader";
import StatCard from "@/components/admin/StatCard";

export default function DashboardPage() {
  // Mock data - will be replaced with real API calls
  const stats = [
    {
      icon: Users,
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      changeType: "increase",
      color: "green",
    },
    {
      icon: Cpu,
      title: "Active Machines",
      value: "42",
      change: "+3%",
      changeType: "increase",
      color: "blue",
    },
    {
      icon: Package,
      title: "Batches Today",
      value: "156",
      change: "+8%",
      changeType: "increase",
      color: "purple",
    },
  ];

  const recentBatches = [
    {
      id: "B001",
      machine: "Machine A",
      status: "processing",
      startedAt: "2h ago",
    },
    {
      id: "B002",
      machine: "Machine B",
      status: "completed",
      startedAt: "5h ago",
    },
    {
      id: "B003",
      machine: "Machine C",
      status: "processing",
      startedAt: "1h ago",
    },
    {
      id: "B004",
      machine: "Machine D",
      status: "queued",
      startedAt: "30m ago",
    },
  ];

  const machineStatus = [
    { name: "Machine A", status: "online", lastSeen: "2m ago" },
    { name: "Machine B", status: "online", lastSeen: "5m ago" },
    { name: "Machine C", status: "offline", lastSeen: "2h ago" },
    { name: "Machine D", status: "online", lastSeen: "1m ago" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "offline":
        return "bg-gray-400";
      case "processing":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      case "queued":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <DashboardHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening with your system today."
      />

      <div className="p-4 sm:p-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Batches */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Recent Batches
              </h3>
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentBatches.map((batch) => (
                <div
                  key={batch.id}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-semibold text-gray-900">{batch.id}</p>
                      <p className="text-sm text-gray-500">{batch.machine}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${getStatusColor(batch.status)}`}
                      ></span>
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {batch.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {batch.startedAt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Machine Status
              </h3>
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {machineStatus.map((machine, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {machine.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Last seen {machine.lastSeen}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${getStatusColor(machine.status)}`}
                    ></span>
                    <span className="text-sm font-medium text-gray-700 capitalize">
                      {machine.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Activity Chart Placeholder */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            System Activity
          </h3>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <div className="text-center">
              <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">
                Activity chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
