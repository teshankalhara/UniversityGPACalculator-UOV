import { Link, useLocation } from "react-router-dom"

function NavBar() {
    const navigation = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ]

    const location = useLocation()

    return (
        <nav className="bg-gray-800 mx-auto">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <ul>
                        {
                            navigation.map((link, index) => {
                                const isActive = location.pathname === link.path
                                return (
                                    <li key={index} className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white space-x-4 mx-4">
                                        <Link to={link.path} className={`text-gray-400 hover:text-white ${isActive ? 'text-white' : ''}`}>
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar