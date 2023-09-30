function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/">Bux Store</a>
                </div>

                {/* Right-side items */}
                <div className="flex space-x-4">
                    {/* My Account (Placeholder) */}
                    <div className="hover:text-gray-300">
                        <a href="/my-account">My Account</a>
                    </div>

                    {/* Basket (Placeholder) */}
                    <div className="hover:text-gray-300">
                        <a href="/basket">Basket</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;