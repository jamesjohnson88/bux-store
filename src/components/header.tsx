import Image from 'next/image'

function Header() {
    return (
        <header className="bg-gradient-to-t from-blue-950 to-blue-900 text-white p-4 pb-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center pl-5 -mb-1">
                    <Image
                        src="/images/bux-logo-64.png"
                        alt="Bux Store Logo"
                        height={128}
                        width={128}
                        quality={80}
                        priority={true}
                        className="mr-2 drop-shadow-xl"
                    />
                </div>

                {/* Right-side items */}
                <div className="flex space-x-4">
                    {/* My Account (Placeholder) */}
                    <div className="hover:text-gray-300">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                           target="_blank"
                        >
                            My Account
                        </a>
                    </div>

                    {/* Basket (Placeholder) */}
                    <div className="hover:text-gray-300">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                           target="_blank"
                        >
                            Basket
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;