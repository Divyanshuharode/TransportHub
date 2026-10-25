import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

function RoleAddModal({ open, setOpen, rname, setrname, addRole }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                    <DialogTitle className="text-l font-semibold text-slate-900">Add new role :-</DialogTitle>
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-slate-700">Role name</label>
                        <input
                            type="text"
                            placeholder="Ex- manager"
                            value={rname}
                            onChange={(e) => setrname(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <button onClick={() => setOpen(false)} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-red-600 text-white bg-red-500">Cancel</button>
                        <button onClick={addRole} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">Save </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default RoleAddModal;

// import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// function RoleAddModal({ open, setOpen, rname, setrname, addRole }) {
//     const formik = useFormik({
//         initialValues: { rname: rname || "" },
//         enableReinitialize: true,
//         validationSchema: Yup.object({
//             rname: Yup.string()
//                 .trim()
//                 .required("Role name is required")
//                 .min(3, "Role name must be at least 3 characters")
//                 .max(50, "Role name cannot exceed 50 characters"),
//         }),
//         onSubmit: (values) => {
//             setrname(values.rname.trim());
//             addRole();
//         },
//     });

//     return (
//         <Dialog open={open} onClose={setOpen} className="relative z-50">
//             <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" aria-hidden="true" />
//             <div className="fixed inset-0 flex items-center justify-center p-4">
//                 <DialogPanel className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
//                     <DialogTitle className="text-lg font-semibold text-slate-900">Add new role</DialogTitle>

//                     <form onSubmit={formik.handleSubmit}>
//                         <div className="mt-5">
//                             <label className="mb-2 block text-sm font-medium text-slate-700">Role name</label>
//                             <input
//                                 type="text"
//                                 name="rname"
//                                 placeholder="Ex- manager"
//                                 value={formik.values.rname}
//                                 onChange={(e) => {
//                                     formik.handleChange(e);
//                                     setrname(e.target.value);
//                                 }}
//                                 onBlur={formik.handleBlur}
//                                 className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                             />
//                             {formik.touched.rname && formik.errors.rname && (
//                                 <p className="mt-1 text-sm text-red-500">{formik.errors.rname}</p>
//                             )}
//                         </div>

//                         <div className="mt-6 flex justify-end gap-3">
//                             <button type="button" onClick={() => setOpen(false)} className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600">Cancel</button>
//                             <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">Save</button>
//                         </div>
//                     </form>
//                 </DialogPanel>
//             </div>
//         </Dialog>
//     );
// }

// export default RoleAddModal;