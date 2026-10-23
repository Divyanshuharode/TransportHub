import { PackageOpen } from "lucide-react";

function ModulePlaceholder({ title, description }) {
    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Operations</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
            <div className="mt-6 flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><PackageOpen size={22} /></div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">{title} module is coming soon</h2>
                <p className="mt-1 max-w-md text-sm text-slate-500">{description}</p>
            </div>
        </div>
    );
}

export default ModulePlaceholder;
