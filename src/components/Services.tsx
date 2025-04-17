import { 
    GlobeIcon, 
    Smartphone, 
    Layers, 
    Code, 
    Cloud 
  } from "lucide-react";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  
  const Services = () => {
    const services = [
      {
        icon: <GlobeIcon className="h-12 w-12 text-tech-blue" />,
        title: "تطوير تطبيقات الويب",
        description: "نقوم بتطوير مواقع إلكترونية احترافية وسريعة باستخدام أحدث التقنيات."
      },
      {
        icon: <Smartphone className="h-12 w-12 text-tech-blue" />,
        title: "تطبيقات الجوال",
        description: "نصمم ونبرمج تطبيقات iOS و Android سهلة الاستخدام وذات أداء ممتاز."
      },
      {
        icon: <Layers className="h-12 w-12 text-tech-blue" />,
        title: "تصميم واجهات المستخدم",
        description: "نصنع تصاميم جذابة وعملية تضمن أفضل تجربة استخدام ممكنة."
      },
      {
        icon: <Code className="h-12 w-12 text-tech-blue" />,
        title: "أنظمة مخصصة",
        description: "نطوّر أنظمة إدارة أعمال مخصصة حسب متطلباتك (مثل: إدارة حجوزات، مخازن، فواتير،...)."
      },
      {
        icon: <Cloud className="h-12 w-12 text-tech-blue" />,
        title: "الاستضافة والدعم الفني",
        description: "نوفر استضافة آمنة وسريعة، مع دعم فني متواصل."
      }
    ];
  
    return (
      <section id="services" className="py-16 bg-white rtl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-3">خدماتنا</h2>
            <div className="w-20 h-1 bg-tech-purple mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات البرمجية لمساعدتك على تحقيق أهدافك التقنية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-right">
                <CardHeader className="pb-2">
                  <div className="flex justify-end mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-tech-blue">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  