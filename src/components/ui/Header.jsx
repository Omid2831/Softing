import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    {/** define the base line style */ }
    const lineStroke = "block w-6 h-0.5 transition-all duration-200 ease-in-out";

    {/** define the base divider line  */ }
    const divider = "border-b-1 border-gray-500 mt-2";

    return (
        <header className="fixed w-full border-4 border-gray-100 shadow-md bg-white/90 px-4 py-4 z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Mobile Menu Button - Left side on mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                    aria-label="Toggle menu"
                >
                    {/* Top line */}
                    <span
                        className={`${lineStroke} bg-black ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />

                    {/* Middle line */}
                    <span
                        className={`${lineStroke} bg-black ${isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    {/* Bottom line */}
                    <span
                        className={`${lineStroke} bg-black ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>

                {/* Logo - Center on mobile, left on desktop */}
                <img decoding="async" src="https://softing.ninetheme.com/wp-content/uploads/2019/01/logo-1.png" className="logo logo-scrolled w-25 lg:mr-auto" alt="logo-1.png" />

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex flex-row gap-6">
                        {/* Home Dropdown */}
                        <li className="list-none">
                            <DropdownMenu>
                                {/** Trigger Menu - Home */}
                                <DropdownMenuTrigger>
                                    <div className="flex flex-row gap-2">
                                        <span className="text-black text-sm font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                            Home
                                        </span>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-2">
                                    <DropdownMenuItem>Overview</DropdownMenuItem>
                                    <DropdownMenuItem>Updates</DropdownMenuItem>
                                    <DropdownMenuItem>News</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>

                        {/* Features */}
                        <li className="list-none">
                            <a>
                                <span className="text-black text-sm font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Features
                                </span>
                            </a>
                        </li>

                        {/* Pricing */}
                        <li className="list-none">
                            <a>
                                <span className="text-black text-sm font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Pricing
                                </span>
                            </a>
                        </li>

                        {/* Teams */}
                        <li className="list-none">
                            <a>
                                <span className="text-black text-sm font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Teams
                                </span>
                            </a>
                        </li>

                        {/* Pages Dropdown */}
                        <li className="list-none">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <span className="text-black text-sm font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                        Pages
                                    </span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-2">
                                    <DropdownMenuItem>About Us</DropdownMenuItem>
                                    <DropdownMenuItem>Blog</DropdownMenuItem>
                                    <DropdownMenuItem>FAQ</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>

                        {/* Contact */}
                        <li className="list-none">
                            <a>
                                <span className="text-black text-sm font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Contact
                                </span>
                            </a>
                        </li>

                        {/* Login */}
                        <li className="list-none">
                            <a>
                                <span className="text-black text-sm font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Login
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="px-4 pb-4">
                    <ul className="flex flex-col gap-4 border-t border-gray-200 pt-4">
                        {/* Home Dropdown - Mobile */}
                        <li className={`${divider} list-none`}>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <div className="flex flex-row gap-2 w-full">
                                        <span className="text-black text-base font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                            Home
                                        </span>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-2">
                                    <DropdownMenuItem>Overview</DropdownMenuItem>
                                    <DropdownMenuItem>Updates</DropdownMenuItem>
                                    <DropdownMenuItem>News</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>

                        {/* Features - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a className="block">
                                <span className="text-black text-base font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Features
                                </span>
                            </a>
                        </li>

                        {/* Pricing - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a className="block">
                                <span className="text-black text-base font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Pricing
                                </span>
                            </a>
                        </li>

                        {/* Teams - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a className="block">
                                <span className="text-black text-base font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Teams
                                </span>
                            </a>
                        </li>

                        {/* Pages Dropdown - Mobile */}
                        <li className={`${divider} list-none`}>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <span className="text-black text-base font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                        Pages
                                    </span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-2">
                                    <DropdownMenuItem>About Us</DropdownMenuItem>
                                    <DropdownMenuItem>Blog</DropdownMenuItem>
                                    <DropdownMenuItem>FAQ</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>

                        {/* Contact - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a className="block">
                                <span className="text-black text-base font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Contact
                                </span>
                            </a>
                        </li>

                        {/* Login - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a className="block">
                                <span className="text-black text-base font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200">
                                    Login
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


        </header>
    )
}

export default Header
