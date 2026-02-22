import React, { useState } from "react";
import {
  Users,
  Search,
  Edit2,
  Trash2,
  Mail,
  Calendar,
  Key,
  Copy,
  Check,
  Shield,
  ShieldOff,
} from "lucide-react";
import DashboardHeader from "@/components/admin/DashboardHeader";
import { sendPasswordResetLink, setAdminClaim } from "@/services/api";
import toast from "react-hot-toast";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResetLinkModal, setShowResetLinkModal] = useState(false);
  const [resetLink, setResetLink] = useState("");
  const [resetLinkEmail, setResetLinkEmail] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const [generatingFor, setGeneratingFor] = useState(null); // Track which user is being processed
  const [togglingAdminFor, setTogglingAdminFor] = useState(null); // Track admin toggle in progress

  // Mock data - will be replaced with API calls
  const [users, setUsers] = useState([
    {
      id: "1",
      email: "john.doe@example.com",
      firebaseUid: "firebase-uid-1",
      createdAt: "2024-01-15",
      machineCount: 2,
      isAdmin: true,
      customClaims: { admin: true },
    },
    {
      id: "2",
      email: "jane.smith@example.com",
      firebaseUid: "firebase-uid-2",
      createdAt: "2024-02-10",
      machineCount: 1,
      isAdmin: false,
      customClaims: {},
    },
    {
      id: "3",
      email: "bob.wilson@example.com",
      firebaseUid: "firebase-uid-3",
      createdAt: "2024-02-18",
      machineCount: 3,
      isAdmin: false,
      customClaims: {},
    },
  ]);

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== userId));
    }
  };

  const handleSendPasswordReset = async (user) => {
    // Prevent double-click
    if (generatingFor) {
      toast.error("Already generating a reset link. Please wait.");
      return;
    }

    try {
      setGeneratingFor(user.id);
      const loadingToast = toast.loading("Generating reset link...");

      const response = await sendPasswordResetLink(user.firebaseUid);
      toast.dismiss(loadingToast);

      if (response.success) {
        setResetLink(response.resetLink);
        setResetLinkEmail(response.email);
        setShowResetLinkModal(true);
        setLinkCopied(false);
        toast.success("Password reset link generated!");
      }
    } catch (error) {
      toast.dismiss();

      // Handle specific error cases
      if (error.response?.status === 429) {
        toast.error(
          error.response.data.error ||
            "Too many requests. Please wait a few minutes.",
        );
      } else {
        toast.error(error.message || "Failed to generate reset link");
      }
    } finally {
      setGeneratingFor(null);
    }
  };

  const handleToggleAdmin = async (user) => {
    // Prevent double-click
    if (togglingAdminFor) {
      toast.error("Already processing admin access change. Please wait.");
      return;
    }

    const isCurrentlyAdmin = user.customClaims?.admin === true;
    const action = isCurrentlyAdmin ? "revoke" : "grant";
    const confirmMessage = isCurrentlyAdmin
      ? `Remove admin access from ${user.email}?`
      : `Grant admin access to ${user.email}?`;

    if (!window.confirm(confirmMessage)) {
      return;
    }

    try {
      setTogglingAdminFor(user.id);
      const loadingToast = toast.loading(
        `${isCurrentlyAdmin ? "Revoking" : "Granting"} admin access...`,
      );

      const response = await setAdminClaim(user.firebaseUid, !isCurrentlyAdmin);
      toast.dismiss(loadingToast);

      if (response.success) {
        // Update user in state
        setUsers(
          users.map((u) =>
            u.id === user.id
              ? {
                  ...u,
                  customClaims: { admin: !isCurrentlyAdmin },
                  isAdmin: !isCurrentlyAdmin,
                }
              : u,
          ),
        );
        toast.success(
          `Admin access ${isCurrentlyAdmin ? "revoked" : "granted"}!`,
        );
      }
    } catch (error) {
      toast.dismiss();
      toast.error(
        error.message || `Failed to ${action} admin access. Please try again.`,
      );
    } finally {
      setTogglingAdminFor(null);
    }
  };

  const copyResetLink = () => {
    navigator.clipboard.writeText(resetLink);
    setLinkCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setLinkCopied(false), 3000);
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <DashboardHeader
        title="Users Management"
        subtitle="Manage user accounts and access"
      />

      <div className="p-4 sm:p-8 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users by email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">
                  {users.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Today</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">New This Month</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Firebase UID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Machines
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Joined Date
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No users found
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {user.email.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {user.customClaims?.admin ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 border border-purple-200">
                            <Shield className="w-3.5 h-3.5" />
                            Admin
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            User
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600 font-mono">
                          {user.firebaseUid}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                          {user.machineCount}{" "}
                          {user.machineCount === 1 ? "machine" : "machines"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleToggleAdmin(user)}
                            disabled={togglingAdminFor === user.id}
                            className={`p-2 rounded-lg transition-colors ${
                              togglingAdminFor === user.id
                                ? "text-gray-400 bg-gray-100 cursor-wait"
                                : user.customClaims?.admin
                                  ? "text-purple-600 hover:bg-purple-50"
                                  : "text-gray-600 hover:bg-gray-100"
                            }`}
                            title={
                              user.customClaims?.admin
                                ? "Revoke admin access"
                                : "Grant admin access"
                            }
                          >
                            {togglingAdminFor === user.id ? (
                              <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                            ) : user.customClaims?.admin ? (
                              <ShieldOff className="w-4 h-4" />
                            ) : (
                              <Shield className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={() => handleSendPasswordReset(user)}
                            disabled={generatingFor === user.id}
                            className={`p-2 rounded-lg transition-colors ${
                              generatingFor === user.id
                                ? "text-gray-400 bg-gray-100 cursor-wait"
                                : "text-blue-600 hover:bg-blue-50"
                            }`}
                            title="Send password reset link"
                          >
                            {generatingFor === user.id ? (
                              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <Key className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={() => console.log("Edit user:", user.id)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Edit user"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete user"
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

      {/* Password Reset Link Modal */}
      {showResetLinkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Key className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Password Reset Link Generated
                </h3>
                <p className="text-gray-600">
                  Share this link with{" "}
                  <span className="font-semibold">{resetLinkEmail}</span> to
                  reset their password.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Reset Link:
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 overflow-x-auto">
                  <code className="text-sm text-gray-900 break-all">
                    {resetLink}
                  </code>
                </div>
                <button
                  onClick={copyResetLink}
                  className={`px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    linkCopied
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {linkCopied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">⏱ Valid for 1 hour:</span> This
                link expires after 1 hour. Generate a new one if needed.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">🔒 Security Note:</span> For
                security, there's a limit on password reset requests per user.
                If you hit the limit, wait a few minutes before generating
                another link.
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowResetLinkModal(false);
                  setResetLink("");
                  setResetLinkEmail("");
                }}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors"
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
