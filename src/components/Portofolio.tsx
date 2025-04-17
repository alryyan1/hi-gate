import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "نظام حجوزات عيادات طبية",
      description: "تطبيق ويب وموبايل متكامل لإدارة الحجوزات والمواعيد في العيادات الطبية",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "web"
    },
    {
      id: 2,
      title: "متجر إلكتروني متكامل",
      description: "منصة تسوق إلكتروني مع نظام دفع آمن وإدارة للمخزون والطلبات",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "ecommerce"
    },
    {
      id: 3,
      title: "تطبيق خدمات توصيل",
      description: "تطبيق جوال لخدمات التوصيل مع نظام تتبع مباشر وإدارة للطلبات",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "mobile"
    },
    {
      id: 4,
      title: "لوحة تحكم لإدارة المدارس",
      description: "نظام إدارة شامل للمدارس يشمل شؤون الطلاب والجداول والدرجات والحضور",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "dashboard"
    }
  ];
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-16 bg-tech-lightgray rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-3">معرض الأعمال</h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نفخر بتقديم بعض من أعمالنا المميزة التي نفذناها لعملائنا
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full mb-8" dir="rtl">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="px-4 py-2"
              >
                الكل
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                onClick={() => setActiveTab("web")}
                className="px-4 py-2"
              >
                تطبيقات الويب
              </TabsTrigger>
              <TabsTrigger 
                value="mobile" 
                onClick={() => setActiveTab("mobile")}
                className="px-4 py-2"
              >
                تطبيقات الجوال
              </TabsTrigger>
              <TabsTrigger 
                value="ecommerce" 
                onClick={() => setActiveTab("ecommerce")}
                className="px-4 py-2"
              >
                متاجر إلكترونية
              </TabsTrigger>
              <TabsTrigger 
                value="dashboard" 
                onClick={() => setActiveTab("dashboard")}
                className="px-4 py-2"
              >
                أنظمة إدارية
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                        <p className="mt-2 text-white/80">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-right">
                    <h3 className="text-xl font-bold text-tech-blue">{project.title}</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Other tab contents will be shown by the same content due to filtering logic */}
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                        <p className="mt-2 text-white/80">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-right">
                    <h3 className="text-xl font-bold text-tech-blue">{project.title}</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          {/* More tab contents... */}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
