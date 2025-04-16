import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', text: 'الرئيسية' },
    { path: '/about', text: 'من نحن' },
    { path: '/services', text: 'خدماتنا' },
    { path: '/portfolio', text: 'أعمالنا' },
    { path: '/contact', text: 'تواصل معنا' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            شركة البرمجيات
          </Link>

          {/* قائمة كبيرة (للأجهزة الكبيرة) */}
          <ul className="hidden md:flex space-x-reverse space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* زر القائمة المتنقلة (للأجهزة الصغيرة) */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* القائمة المتنقلة */}
        {isOpen && (
          <div className="md:hidden bg-white py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;