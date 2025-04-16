import React from 'react';
import { FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      icon: <FaUsers className="text-4xl mb-4 text-primary" />,
      title: "فريق متخصص",
      description: "فريق من المطورين والمصممين ذوي الخبرة الواسعة في مجال البرمجيات"
    },
    {
      icon: <FaLightbulb className="text-4xl mb-4 text-secondary" />,
      title: "حلول مبتكرة",
      description: "نقدم حلولاً برمجية مبدعة تلبي احتياجات السوق المتغيرة"
    },
    {
      icon: <FaAward className="text-4xl mb-4 text-accent" />,
      title: "جودة عالية",
      description: "نلتزم بأعلى معايير الجودة في جميع منتجاتنا البرمجية"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
     

      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">من نحن</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          شركة رائدة في مجال تطوير البرمجيات والحلول التقنية منذ عام 2010
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">قصتنا</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            تأسست شركة البرمجيات برؤية واضحة وهي تقديم حلول تقنية متكاملة تساعد الشركات والأفراد على تحقيق أهدافهم في العصر الرقمي.
          </p>
          <p className="text-gray-600 leading-relaxed">
            بدأنا برحلة صغيرة وبفريق محدود، ومع مرور السنوات وتزايد ثقة عملائنا، أصبحنا من الشركات الرائدة في مجال تطوير البرمجيات في المنطقة.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src="/images/about-team.jpg" 
            alt="فريق العمل" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">رؤيتنا</h2>
        <p className="mb-6">
          أن نكون الشريك التقني الأول للشركات الناشئة والمؤسسات في رحلتها الرقمية.
        </p>
        <h2 className="text-2xl font-bold mb-4">رسالتنا</h2>
        <p>
          تقديم حلول برمجية مبتكرة وعالية الجودة تساعد عملائنا على النمو والتطور في السوق التنافسي.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;