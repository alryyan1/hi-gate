import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "أحمد السعيد",
      position: "صاحب متجر إلكتروني",
      avatar: "أ",
      content: "شركة محترفة جداً، سلموا المشروع في الوقت وبجودة ممتازة! سعيد جداً بالتعامل معهم وبالنتائج التي حققناها.",
      rating: 5
    },
    {
      id: 2,
      name: "ليلى المحمد",
      position: "مؤسسة شركة ناشئة",
      avatar: "ل",
      content: "أعجبني التعامل الراقي والدعم المستمر بعد التسليم. ساعدوني في إطلاق مشروعي بسرعة ودقة.",
      rating: 5
    },
    {
      id: 3,
      name: "محمد العبدالله",
      position: "مدير عيادة طبية",
      avatar: "م",
      content: "نظام الحجوزات الذي طوروه لنا وفّر علينا الكثير من الوقت والجهد، وساهم في تنظيم العمل بشكل كبير.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-3">آراء عملائنا</h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نفخر بثقة عملائنا وآرائهم في خدماتنا وأعمالنا
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="text-right border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex space-x-reverse space-x-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < testimonial.rating ? "#8B5CF6" : "none"} 
                      className={i < testimonial.rating ? "text-tech-purple" : "text-gray-300"} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-reverse space-x-4">
                  <Avatar className="h-10 w-10 border-2 border-tech-purple">
                    <AvatarFallback className="bg-tech-blue text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
