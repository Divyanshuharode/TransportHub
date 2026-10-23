function Footer() {
    return (
        <footer className="bg-white border-t px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
                <p>© 2026 Transport Hub. All rights reserved.</p>

                <div className="flex gap-5">
                    <span className="hover:text-indigo-600 cursor-pointer">
                        Privacy Policy
                    </span>

                    <span className="hover:text-indigo-600 cursor-pointer">
                        Terms & Conditions
                    </span>

                    <span className="hover:text-indigo-600 cursor-pointer">
                        Help & Support
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;