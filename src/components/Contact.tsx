import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your server
    alert("تم استلام رسالتك بنجاح! سنتواصل معك قريباً.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-tech-lightgray rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-3">تواصل معنا</h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            هل لديك فكرة مشروع؟ دعنا نبدأ سويًا. تواصل معنا الآن!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-tech-blue mb-6 text-right">أرسل رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2 text-right">
                <label htmlFor="name" className="block text-gray-700">الاسم</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  required
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2 text-right">
                <label htmlFor="email" className="block text-gray-700">البريد الإلكتروني</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2 text-right">
                <label htmlFor="phone" className="block text-gray-700">رقم الهاتف</label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="أدخل رقم هاتفك"
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2 text-right">
                <label htmlFor="message" className="block text-gray-700">الرسالة</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  required
                  className="text-right"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-tech-blue hover:bg-tech-purple text-white py-2 transition-colors duration-300"
              >
                إرسال الرسالة
              </Button>
            </form>
          </div>
          
          <div className="text-right">
            <h3 className="text-2xl font-bold text-tech-blue mb-6">معلومات التواصل</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-reverse space-x-4">
                <div className="bg-tech-purple p-3 rounded-full text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">البريد الإلكتروني</h4>
                  <p className="text-gray-600">info@hitechminds.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-reverse space-x-4">
                <div className="bg-tech-purple p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">الهاتف</h4>
                  <p className="text-gray-600">+966-555555555</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-reverse space-x-4">
                <div className="bg-tech-purple p-3 rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">العنوان</h4>
                  <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-tech-blue mb-4">تابعنا على:</h3>
              <div className="flex space-x-reverse space-x-4">
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-tech-blue hover:text-white transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-tech-blue hover:text-white transition-colors duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-tech-blue hover:text-white transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-tech-blue hover:text-white transition-colors duration-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
