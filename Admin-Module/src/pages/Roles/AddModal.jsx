
import { useFormik } from "formik";
import * as Yup from "yup";

function RoleAddModal({ open, setOpen, rname, setrname, addRole }) {
    const formik = useFormik({
        initialValues: { rname: rname || "" },
        enableReinitialize: true,
        validationSchema: Yup.object({
            rname: Yup.string().required("Role name is required").min(3, "Minimum 3 characters required").max(50, "Maximum 50 characters allowed"),
        }),
        onSubmit: (values) => {
            setrname(values.rname.trim());
            addRole();
        },
    });

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                <h2 className="text-lg font-semibold">Add New Role</h2>

                <form onSubmit={formik.handleSubmit}>
                    <label className="mb-2 mt-5 block text-sm font-medium">Role Name</label>
                    <input
                        name="rname"
                        placeholder="Ex- manager"
                        value={formik.values.rname}
                        onChange={(e) => { formik.handleChange(e); setrname(e.target.value); }}
                        onBlur={formik.handleBlur}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                    />

                    {formik.touched.rname && formik.errors.rname && <p className="mt-1 text-sm text-red-500">{formik.errors.rname}</p>}

                    <div className="mt-6 flex justify-end gap-3">
                        <button type="button" onClick={() => setOpen(false)} className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white">Cancel</button>
                        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RoleAddModal;
