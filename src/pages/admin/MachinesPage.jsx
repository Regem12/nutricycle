import React, { useState } from "react";
import {
  Cpu,
  Plus,
  Search,
  Edit2,
  Trash2,
  Power,
  Activity,
  Clock,
} from "lucide-react";
import DashboardHeader from "@/components/admin/DashboardHeader";

export default function MachinesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock data - will be replaced with API calls
  const [machines, setMachines] = useState([
    {
      id: "1",
      machineId: "MACH-001",
      status: "online",
      lastCommandAt: "2024-02-19T10:30:00",
      createdAt: "2024-01-10",
      batchCount: 45,
      lastTelemetry: { temperature: 25.5, humidity: 60 },
    },
    {
      id: "2",
      machineId: "MACH-002",
      status: "online",
      lastCommandAt: "2024-02-19T11:15:00",
      createdAt: "2024-01-15",
      batchCount: 32,
      lastTelemetry: { temperature: 24.8, humidity: 58 },
    },
    {
      id: "3",
      machineId: "MACH-003",
      status: "offline",
      lastCommandAt: "2024-02-18T14:20:00",
      createdAt: "2024-02-01",
      batchCount: 12,
      lastTelemetry: null,
    },
    {
      id: "4",
      machineId: "MACH-004",
      status: "online",
      lastCommandAt: "2024-02-19T11:45:00",
      createdAt: "2024-01-20",
      batchCount: 28,
      lastTelemetry: { temperature: 26.2, humidity: 62 },
    },
  ]);

  const filteredMachines = machines.filter((machine) => {
    const matchesSearch = machine.machineId
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || machine.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    return status === "online" ? "bg-green-500" : "bg-gray-400";
  };

  const getStatusBadgeColor = (status) => {
    return status === "online"
      ? "bg-green-100 text-green-700"
      : "bg-gray-100 text-gray-700";
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / 60000);

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const handleDeleteMachine = (machineId) => {
    if (window.confirm("Are you sure you want to delete this machine?")) {
      setMachines(machines.filter((m) => m.id !== machineId));
    }
  };

  const onlineCount = machines.filter((m) => m.status === "online").length;
  const offlineCount = machines.filter((m) => m.status === "offline").length;

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <DashboardHeader
        title="Machines Management"
        subtitle="Monitor and manage IoT devices"
      />

      <div className="p-4 sm:p-8 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
            <div className="relative flex-1 sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search machines by ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white"
            >
              <option value="all">All Status</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          {/* Add Machine Button */}
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Machine</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Machines</p>
                <p className="text-2xl font-bold text-gray-900">
                  {machines.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Power className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Online</p>
                <p className="text-2xl font-bold text-gray-900">
                  {onlineCount}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Offline</p>
                <p className="text-2xl font-bold text-gray-900">
                  {offlineCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Machines Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Machine ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Telemetry
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Batches
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Last Active
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredMachines.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No machines found
                    </td>
                  </tr>
                ) : (
                  filteredMachines.map((machine) => (
                    <tr
                      key={machine.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {machine.machineId}
                            </p>
                            <p className="text-xs text-gray-500">
                              Added{" "}
                              {new Date(machine.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${getStatusColor(machine.status)}`}
                          ></span>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(machine.status)}`}
                          >
                            {machine.status.charAt(0).toUpperCase() +
                              machine.status.slice(1)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {machine.lastTelemetry ? (
                          <div className="text-sm">
                            <p className="text-gray-900">
                              🌡️ {machine.lastTelemetry.temperature}°C
                            </p>
                            <p className="text-gray-600">
                              💧 {machine.lastTelemetry.humidity}%
                            </p>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-400">No data</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">
                          {machine.batchCount}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {getTimeAgo(machine.lastCommandAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() =>
                              console.log("Edit machine:", machine.id)
                            }
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Edit machine"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteMachine(machine.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete machine"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Machine Modal - Placeholder */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Register New Machine
            </h3>
            <p className="text-gray-600 mb-6">
              Machine registration will be configured with API integration.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
