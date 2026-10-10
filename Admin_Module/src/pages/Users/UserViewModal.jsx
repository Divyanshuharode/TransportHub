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
        if (open && userId) getUserById(userId);
    }, [userId, open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#1e2a3b] w-[680px] rounded-xl shadow-2xl border border-gray-600 overflow-hidden">
                <div className="px-7 py-6">
                    <h2 className="text-2xl font-bold text-white">View User :-</h2>
                </div>

                <div className="px-7 pb-7">
                    {user && (
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="text-gray-300 text-base">User ID</label>
                                <div className="mt-2 bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200">
                                    {user.user_id}
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-300 text-base">Full Name</label>
                                <div className="mt-2 bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200">
                                    {user.full_name}
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label className="text-gray-300 text-base">Email</label>
                                <div className="mt-2 bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200">
                                    {user.email}
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-300 text-base">Account Status</label>
                                <div className="mt-2 bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200">
                                    {user.account_status}
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-300 text-base">Role</label>
                                <div className="mt-2 bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200 h-12">
                                    {user.role_name}
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label className="text-gray-300 text-base">Created At</label>
                                <div className="mt-2 bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200">
                                    {moment(user.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                                </div>
                            </div>
                        </div>
                    )}

                    {!user && <p className="text-gray-300">Loading user details...</p>}
                </div>

                <div className="bg-[#243247] px-7 py-4 flex justify-end">
                    <button
                        onClick={() => setOpen(false)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2.5 rounded-lg"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
