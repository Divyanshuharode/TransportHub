import { useEffect, useState } from "react";
import moment from "moment";
import { getUsersById } from "../../services/user.service";

export default function UserViewModal({ open, setOpen, userId }) {
    const [user, setUser] = useState(null);

    async function getUserById(userId) {
        try {
            const res = await getUsersById(userId);
            setUser(res.data.data);
        } catch (err) {
            console.log(err);
            setUser(null);
        }
    }

    useEffect(() => {
        if (open) getUserById(userId);
    }, [userId, open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="border-b border-slate-100 px-6 py-5">
                    <h2 className="text-xl font-semibold text-slate-900">User details</h2>
                    <p className="mt-1 text-sm text-slate-500">Account information and access status.</p>
                </div>

                <div className="p-6">
                    {user && (
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="text-xs font-medium uppercase tracking-wide text-slate-500">User ID</label>
                                <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                                    {user.user_id}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Full name</label>
                                <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                                    {user.full_name}
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Email</label>
                                <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                                    {user.email}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Account status</label>
                                <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                                    {user.account_status}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Role</label>
                                <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                                    {user.role_name}
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Created at</label>
                                <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                                    {moment(user.created_at).format("MMM D, YYYY · h:mm a")}
                                </div>
                            </div>
                        </div>
                    )}

                    {!user && <p className="text-sm text-slate-500">Loading user details...</p>}
                </div>

                <div className="flex justify-end border-t border-slate-100 px-6 py-4">
                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
