import React, { useState } from "react";
import {
  Package,
  Search,
  Eye,
  Calendar,
  Cpu,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import DashboardHeader from "@/components/admin/DashboardHeader";

export default function BatchesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedBatch, setSelectedBatch] = useState(null);

  // Mock data - will be replaced with API calls
  const [batches] = useState([
    {
      id: "1",
      batchNumber: "B2024001",
      machineId: "MACH-001",
      status: "completed",
      feedStatus: "success",
      startedAt: "2024-02-19T08:00:00",
      endedAt: "2024-02-19T10:30:00",
      compostOutput: 2.5,
      feedOutput: 1.8,
      createdAt: "2024-02-19",
    },
    {
      id: "2",
      batchNumber: "B2024002",
      machineId: "MACH-002",
      status: "processing",
      feedStatus: "pending",
      startedAt: "2024-02-19T09:00:00",
      endedAt: null,
      compostOutput: null,
      feedOutput: null,
      createdAt: "2024-02-19",
    },
    {
      id: "3",
      batchNumber: "B2024003",
      machineId: "MACH-001",
      status: "completed",
      feedStatus: "success",
      startedAt: "2024-02-18T14:00:00",
      endedAt: "2024-02-18T16:45:00",
      compostOutput: 3.2,
      feedOutput: 2.1,
      createdAt: "2024-02-18",
    },
    {
      id: "4",
      batchNumber: "B2024004",
      machineId: "MACH-003",
      status: "queued",
      feedStatus: "pending",
      startedAt: null,
      endedAt: null,
      compostOutput: null,
      feedOutput: null,
      createdAt: "2024-02-19",
    },
    {
      id: "5",
      batchNumber: "B2024005",
      machineId: "MACH-004",
      status: "processing",
      feedStatus: "pending",
      startedAt: "2024-02-19T10:00:00",
      endedAt: null,
      compostOutput: null,
      feedOutput: null,
      createdAt: "2024-02-19",
    },
  ]);

  const filteredBatches = batches.filter((batch) => {
    const matchesSearch =
      batch.batchNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      batch.machineId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || batch.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "processing":
        return "bg-blue-100 text-blue-700";
      case "queued":
        return "bg-yellow-100 text-yellow-700";
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "processing":
        return <Clock className="w-4 h-4 animate-spin" />;
      case "queued":
        return <Clock className="w-4 h-4" />;
      case "failed":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getTimeAgo = (dateString) => {
    if (!dateString) return "Not started";
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / 60000);

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const getDuration = (start, end) => {
    if (!start || !end) return "In progress";
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffInMinutes = Math.floor((endDate - startDate) / 60000);

    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    return `${Math.floor(diffInMinutes / 60)}h ${diffInMinutes % 60}m`;
  };

  const completedCount = batches.filter((b) => b.status === "completed").length;
  const processingCount = batches.filter(
    (b) => b.status === "processing",
  ).length;
  const queuedCount = batches.filter((b) => b.status === "queued").length;

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <DashboardHeader
        title="Batches Management"
        subtitle="Track and manage processing batches"
      />

      <div className="p-4 sm:p-8 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by batch number or machine..."
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
            <option value="completed">Completed</option>
            <option value="processing">Processing</option>
            <option value="queued">Queued</option>
          </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Batches</p>
                <p className="text-2xl font-bold text-gray-900">
                  {batches.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {completedCount}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Processing</p>
                <p className="text-2xl font-bold text-gray-900">
                  {processingCount}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Queued</p>
                <p className="text-2xl font-bold text-gray-900">
                  {queuedCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Batches Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Batch Number
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Machine
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Output
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Started
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBatches.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No batches found
                    </td>
                  </tr>
                ) : (
                  filteredBatches.map((batch) => (
                    <tr
                      key={batch.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                            <Package className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {batch.batchNumber}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(batch.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">
                            {batch.machineId}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(batch.status)}`}
                        >
                          {getStatusIcon(batch.status)}
                          {batch.status.charAt(0).toUpperCase() +
                            batch.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {batch.compostOutput !== null ? (
                          <div className="text-sm">
                            <p className="text-gray-900">
                              🌱 Compost: {batch.compostOutput} kg
                            </p>
                            <p className="text-gray-600">
                              🐔 Feed: {batch.feedOutput} kg
                            </p>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-400">Pending</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {getTimeAgo(batch.startedAt)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {getDuration(batch.startedAt, batch.endedAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end">
                          <button
                            onClick={() => setSelectedBatch(batch)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View details"
                          >
                            <Eye className="w-4 h-4" />
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

      {/* Batch Details Modal */}
      {selectedBatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Batch Details</h3>
              <button
                onClick={() => setSelectedBatch(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Batch Number</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedBatch.batchNumber}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Machine</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedBatch.machineId}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedBatch.status)}`}
                  >
                    {getStatusIcon(selectedBatch.status)}
                    {selectedBatch.status.charAt(0).toUpperCase() +
                      selectedBatch.status.slice(1)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Feed Status</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedBatch.feedStatus}
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Timeline</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Created:</span>
                    <span className="text-gray-900">
                      {new Date(selectedBatch.createdAt).toLocaleString()}
                    </span>
                  </div>
                  {selectedBatch.startedAt && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Started:</span>
                      <span className="text-gray-900">
                        {new Date(selectedBatch.startedAt).toLocaleString()}
                      </span>
                    </div>
                  )}
                  {selectedBatch.endedAt && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ended:</span>
                      <span className="text-gray-900">
                        {new Date(selectedBatch.endedAt).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Output */}
              {selectedBatch.compostOutput !== null && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Output</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-green-600 mb-1">
                        Compost Output
                      </p>
                      <p className="text-2xl font-bold text-green-700">
                        {selectedBatch.compostOutput} kg
                      </p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <p className="text-sm text-yellow-600 mb-1">
                        Feed Output
                      </p>
                      <p className="text-2xl font-bold text-yellow-700">
                        {selectedBatch.feedOutput} kg
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 justify-end mt-6 pt-6 border-t">
              <button
                onClick={() => setSelectedBatch(null)}
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
