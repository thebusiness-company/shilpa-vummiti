import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import logo from '../../assets/images/Logo.png';
import heart from '../../assets/images/heart.svg';
import profile from '../../assets/images/profile.svg';
import cart from '../../assets/images/cart.svg';

export default function Navbar({ NumCartItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const searchRef = useRef(null);

  console.log(NumCartItems)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        event.target.getAttribute('aria-label') !== 'Search'
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#F2F0EF] shadow-sm">
      <div className="relative">
        <div className="flex justify-between items-center px-6 lg:px-12 py-6 max-w-8xl mx-auto">
          {/* Left: Menu & Search */}
          <div className="flex items-center gap-6">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="flex items-center cursor-pointer space-x-4"
              aria-label="Toggle menu"
              aria-controls="main-menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
              <span className="text-sm font-medium uppercase hidden sm:inline">Menu</span>
            </button>

            <button
              onClick={toggleSearch}
              className="flex items-center cursor-pointer space-x-1    "
              aria-label="Search"
            >
              <Search size={22} />
              <span className="text-sm font-medium hidden sm:inline">Search</span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="block" aria-label="Home">
              <img src={logo} alt="Logo" className="h-10 sm:h-16 mx-auto" />
            </Link>
          </div>

          {/* Right: User & Wishlist */}
          <div className="flex items-center gap-4 lg:gap-8 md:gap-8 lg:px-8">
            
          <a href="/cart" className="relative">
              <button aria-label="cart" className="relative">
                <img src={cart} alt="cart" className="h-6 cursor-pointer mx-auto" />
                {NumCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] leading-none font-semibold rounded-full px-1.5 py-0.5">
                    {NumCartItems}
                  </span>
                )}
              </button>
            </a>
            <a href="/wishlist"><button aria-label="Wishlist">
            <img src={heart} alt="Wishlist" className="h-6 cursor-pointer mx-auto"/>
            </button></a>
            <a href="/profile"><button aria-label="User">
              <img src={profile} alt="profile" className="h-6 cursor-pointer  mx-auto"/>
            </button></a>
          </div>
        </div>

        {/* Search Bar */}
        <div
          ref={searchRef}
          className={`transition-all duration-300 ease-in-out px-6 bg-[#f5f3f1] ${
            searchOpen ? 'max-h-24 py-3' : 'max-h-0 py-0 overflow-hidden'
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-sm border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black text-sm"
          />
        </div>

        {/* Dropdown Menu */}
        <nav
          ref={menuRef}
          id="main-menu"
          className={`absolute top-[72px] left-6 w-32 bg-white shadow-md border rounded-md text-left transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          role="navigation"
        >
          <ul className="flex flex-col text-sm font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
