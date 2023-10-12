function Header() {
    return (
        <header className="bg-gradient-to-t from-blue-950 to-blue-900 text-white p-4 pb-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center pl-5 -mb-1">
                    <img
                        src="/images/bux-logo-64.png"
                        alt="Bux Store Logo"
                        className="h-32 w-32 mr-2 drop-shadow-xl" // Adjust the height and width as needed
                    />
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