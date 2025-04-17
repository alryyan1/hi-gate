import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-tech-lightgray rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-3">من نحن؟</h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-8"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
              alt="فريق العمل" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2 text-right">
            <p className="text-lg mb-6 leading-relaxed">
              نحن فريق شغوف من المبرمجين والمصممين، نسعى لتقديم خدمات برمجية مخصصة تناسب احتياجات كل عميل. نؤمن بأن التكنولوجيا أداة قوية لتسهيل الحياة وتحقيق النجاح.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-tech-purple mb-3">رؤيتنا:</h3>
              <p className="text-lg mb-4">
                أن نكون الشريك التقني المفضل لرواد الأعمال والشركات الناشئة.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-tech-purple mb-3">مهمتنا:</h3>
              <p className="text-lg mb-4">
                تقديم حلول برمجية ذكية وعصرية بتكلفة مناسبة وجودة عالية.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-tech-purple" size={20} />
                <span>جودة عالية</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-tech-purple" size={20} />
                <span>تسليم سريع</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-tech-purple" size={20} />
                <span>أسعار تنافسية</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-tech-purple" size={20} />
                <span>دعم فني متواصل</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
