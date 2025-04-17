import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50 rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-tech-blue">
              هاي تك مايندز
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-reverse space-x-8">
            <a href="#" className="text-gray-700 hover:text-tech-blue">
              الرئيسية
            </a>
            <a href="#about" className="text-gray-700 hover:text-tech-blue">
              من نحن
            </a>
            <a href="#services" className="text-gray-700 hover:text-tech-blue">
              خدماتنا
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-tech-blue">
              أعمالنا
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-tech-blue">
              آراء العملاء
            </a>
            <a href="#contact" className="text-gray-700 hover:text-tech-blue">
              تواصل معنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-tech-blue py-2">
                الرئيسية
              </a>
              <a href="#about" className="text-gray-700 hover:text-tech-blue py-2">
                من نحن
              </a>
              <a href="#services" className="text-gray-700 hover:text-tech-blue py-2">
                خدماتنا
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-tech-blue py-2">
                أعمالنا
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-tech-blue py-2">
                آراء العملاء
              </a>
              <a href="#contact" className="text-gray-700 hover:text-tech-blue py-2">
                تواصل معنا
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
