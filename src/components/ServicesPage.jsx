import React from 'react';
import { FaCode, FaMobile, FaServer, FaChartLine } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl mb-4 text-primary" />,
      title: "تطوير المواقع",
      description: "تصميم وتطوير مواقع ويب احترافية بتقنيات حديثة مثل React وNext.js",
      features: ["واجهة مستخدم جذابة", "تجربة مستخدم ممتازة", "تحسين لمحركات البحث"]
    },
    {
      icon: <FaMobile className="text-4xl mb-4 text-secondary" />,
      title: "تطبيقات الجوال",
      description: "تطوير تطبيقات الهواتف الذكية لنظامي Android وiOS",
      features: ["أداء عالي", "واجهة سهلة الاستخدام", "توافق مع مختلف الأجهزة"]
    },
    {
      icon: <FaServer className="text-4xl mb-4 text-accent" />,
      title: "أنظمة إدارة",
      description: "أنظمة إدارة محتوى مخصصة لإدارة أعمالك بكفاءة",
      features: ["تقارير مفصلة", "لوحة تحكم سهلة", "أتمتة العمليات"]
    },
    {
      icon: <FaChartLine className="text-4xl mb-4 text-primary" />,
      title: "استشارات تقنية",
      description: "تقديم استشارات متخصصة في التحول الرقمي وتطوير البرمجيات",
      features: ["تحليل الاحتياجات", "خطط استراتيجية", "دراسات جدوى"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
   

      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">خدماتنا</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          نقدم حلولاً برمجية متكاملة تساعد عملك على النمو في العصر الرقمي
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {service.icon}
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">هل لديك مشروع خاص؟</h2>
        <p className="text-gray-700 mb-6">نحن هنا لمساعدتك في تحويل فكرتك إلى واقع ملموس</p>
        <a 
          href="/contact" 
          className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition inline-block"
        >
          تواصل معنا
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;