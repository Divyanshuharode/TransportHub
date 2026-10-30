
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },

        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),

            email: Yup.string().email("Invalid email").required("Email is required"),

            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
        }),

        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div className="mx-auto mt-10 max-w-md rounded-lg border p-6">
            <h2 className="mb-4 text-2xl font-bold">Register Form</h2>

            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded border p-2"
                    />

                    {formik.touched.name && formik.errors.name && (
                        <p className="text-sm text-red-500">
                            {formik.errors.name}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded border p-2"
                    />

                    {formik.touched.email && formik.errors.email && (
                        <p className="text-sm text-red-500">
                            {formik.errors.email}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded border p-2"
                    />

                    {formik.touched.password && formik.errors.password && (
                        <p className="text-sm text-red-500">
                            {formik.errors.password}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
