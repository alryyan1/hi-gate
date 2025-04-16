import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaLinkedin />, url: '#' },
    { icon: <FaGithub />, url: '#' }
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* معلومات الشركة */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">شركة البرمجيات</h3>
            <p className="mb-4">نقدم حلولاً برمجية مبتكرة منذ 2010</p>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((item, index) => (
                <a 
                  key={index} 
                  href={item.url} 
                  className="text-gray-300 hover:text-white text-xl transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">أعمالنا</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">تواصل معنا</h3>
            <address className="not-italic">
              <p className="mb-2">الرياض، المملكة العربية السعودية</p>
              <p className="mb-2">البريد: info@example.com</p>
              <p>الهاتف: +966 12 345 6789</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© {currentYear} جميع الحقوق محفوظة لشركة البرمجيات</p>
          <p className="text-sm mt-2 opacity-75">"وما توفيقي إلا بالله"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;