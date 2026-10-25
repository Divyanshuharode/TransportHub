import { FileText, CheckCircle, Clock, XCircle, Upload, Eye } from "lucide-react";

const Document_verification = () => {
    const documents = [
        { id: 1, name: "Driving License", number: "DL-MP-2024-12345", date: "20 Oct 2026", status: "Verified" },
        { id: 2, name: "Vehicle Registration (RC)", number: "MP09AB1234", date: "21 Oct 2026", status: "Pending" },
        { id: 3, name: "Insurance Certificate", number: "INS-2026-5678", date: "22 Oct 2026", status: "Verified" },
        { id: 4, name: "Fitness Certificate", number: "FC-MP-9012", date: "22 Oct 2026", status: "Rejected" },
    ];

    return (
        <div className="space-y-2 p-1">

            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Documents Verification</h1>
                    <p className="mt-1 text-sm text-gray-500">Upload and manage your transport documents.</p>
                </div>

                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                    <Upload size={17} /> Upload Document
                </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Total Documents</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">04</h2>
                    </div>
                    <FileText size={20} className="text-blue-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Verified</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">02</h2>
                    </div>
                    <CheckCircle size={20} className="text-green-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Pending</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">01</h2>
                    </div>
                    <Clock size={20} className="text-amber-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Rejected</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">01</h2>
                    </div>
                    <XCircle size={20} className="text-red-500" />
                </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-start gap-3">
                    <FileText size={20} className="mt-0.5 text-blue-600" />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Document Verification Guidelines</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Upload clear, valid documents. Rejected documents must be uploaded again after correcting the issue.
                        </p>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 p-4">
                    <div>
                        <h2 className="font-semibold text-gray-900">My Documents</h2>
                        <p className="mt-1 text-xs text-gray-500">Check your document verification status.</p>
                    </div>

                    <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-500">
                        <option>All Status</option>
                        <option>Verified</option>
                        <option>Pending</option>
                        <option>Rejected</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-4 py-3">Document</th>
                                <th className="px-4 py-3">Document Number</th>
                                <th className="px-4 py-3">Upload Date</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {documents.map((document) => (
                                <tr key={document.id} className="hover:bg-gray-50">
                                    <td className="whitespace-nowrap px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                                                <FileText size={18} />
                                            </div>
                                            <span className="font-medium text-gray-800">{document.name}</span>
                                        </div>
                                    </td>

                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{document.number}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{document.date}</td>

                                    <td className="whitespace-nowrap px-4 py-4">
                                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${document.status === "Verified" ? "bg-green-100 text-green-700" :
                                            document.status === "Pending" ? "bg-amber-100 text-amber-700" :
                                                "bg-red-100 text-red-700"
                                            }`}>
                                            {document.status}
                                        </span>
                                    </td>

                                    <td className="whitespace-nowrap px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <button title="View Document" className="rounded-md border border-gray-200 p-2 text-gray-600 hover:bg-gray-100">
                                                <Eye size={16} />
                                            </button>

                                            {document.status === "Rejected" && (
                                                <button className="rounded-md bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-100">
                                                    Re-upload
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Document_verification;