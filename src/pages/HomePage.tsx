import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';

const HomePage = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-primary mb-4" />,
      title: "تطوير الويب",
      description: "مواقع احترافية بتقنيات حديثة مثل React وNext.js"
    },
    {
      icon: <FaMobileAlt className="text-4xl text-secondary mb-4" />,
      title: "تطبيقات الجوال",
      description: "تطبيقات أندرويد و iOS بأداء عالي"
    },
    {
      icon: <FaServer className="text-4xl text-accent mb-4" />,
      title: "أنظمة إدارة",
      description: "أنظمة مخصصة لإدارة أعمالك بكفاءة"
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* قسم Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">حلول برمجية لمستقبل رقمي</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            نقدم خدمات تطوير البرمجيات التي تساعد عملك على النمو في العصر الرقمي
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/services" 
              className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              اكتشف خدماتنا
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* قسم الخدمات */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* قسم لماذا نحن؟ */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">لماذا تختارنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">خبرة واسعة</h3>
              <p className="text-gray-700">
                أكثر من 10 سنوات في مجال تطوير البرمجيات وتقديم الحلول التقنية للشركات الناشئة والكبيرة.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">جودة عالية</h3>
              <p className="text-gray-700">
                نلتزم بأعلى معايير الجودة في البرمجة والتطوير لضمان منتجات مستقرة وآمنة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;