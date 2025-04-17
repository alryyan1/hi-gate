import React from 'react';
import { useParams } from 'react-router-dom';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Seo from '@/Seo';

const servicesData = {
  'web-development': {
    title: "تطوير المواقع الإلكترونية",
    description: "حلول متكاملة لتصميم وتطوير مواقع الويب باحترافية",
    features: [
      "تصميم واجهات مستخدم جذابة",
      "تطوير باستخدام أحدث التقنيات مثل React وNext.js",
      "تحسين أداء وسرعة الموقع",
      "تحسين لمحركات البحث (SEO)",
      "تكامل مع أنظمة الدفع والشحن"
    ],
    process: [
      "تحليل الاحتياجات",
      "تصميم الواجهات",
      "التطوير والبرمجة",
      "الاختبار والتجربة",
      "التسليم والدعم الفني"
    ]
  },
  'mobile-apps': {
    title: "تطبيقات الجوال",
    description: "تطوير تطبيقات الهواتف الذكية لنظامي Android وiOS",
    features: [
      "واجهات مستخدم سهلة ومبتكرة",
      "أداء عالي وسريع",
      "توافق مع مختلف أحجام الشاشات",
      "تكامل مع الخدمات السحابية",
      "دعم فني مستمر"
    ],
    process: [
      "دراسة الجدوى",
      "تصميم تجربة المستخدم",
      "تطوير التطبيق",
      "اختبار الجودة",
      "نشر في المتاجر"
    ]
  }
};

const ServiceDetailsPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return <div>الخدمة غير موجودة</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Seo 
        title={service.title} 
        description={service.description}
      />

      <Link 
        to="/services" 
        className="flex items-center text-primary mb-6 hover:underline"
      >
        <FaArrowLeft className="ml-2" /> العودة لصفحة الخدمات
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-primary mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{service.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">مميزات الخدمة</h2>
          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-500 mt-1 ml-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">مراحل العمل</h2>
          <ol className="space-y-4 list-decimal list-inside">
            {service.process.map((step, index) => (
              <li key={index} className="text-gray-700">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="bg-primary text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">مهتم بهذه الخدمة؟</h2>
        <p className="mb-6">تواصل معنا الآن لمعرفة المزيد أو لطلب الخدمة</p>
        <Link 
          to="/contact" 
          className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
        >
          تواصل معنا
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;