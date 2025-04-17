import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-blue text-white py-12 rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">هاي تك مايندز</h3>
            <p className="text-gray-300 mb-4">
              شركة برمجية صغيرة متخصصة في تطوير حلول تقنية عالية الجودة.
            </p>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">من نحن</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">خدماتنا</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white">أعمالنا</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">تطوير تطبيقات الويب</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">تطبيقات الجوال</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">تصميم واجهات المستخدم</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">أنظمة مخصصة</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">الاستضافة والدعم الفني</a></li>
            </ul>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>الرياض، المملكة العربية السعودية</p>
              <p>البريد الإلكتروني: info@hitechminds.com</p>
              <p>الهاتف: +966-555555555</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="flex justify-center items-center gap-1">
            جميع الحقوق محفوظة &copy; {currentYear} هاي تك مايندز | صُمم بـ <Heart size={16} className="text-red-500" fill="currentColor" /> في الرياض
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
