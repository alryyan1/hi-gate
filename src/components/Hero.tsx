import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-tech-blue via-tech-purple to-tech-lightblue rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              نُحوّل أفكارك إلى واقع برمجي مبتكر
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up">
              نحن شركة برمجية صغيرة متخصصة في تطوير حلول تقنية عالية الجودة تساعدك على النمو والتحوّل الرقمي.
            </p>
            <Button 
              className="bg-white text-tech-blue hover:bg-tech-lightgray hover:text-tech-blue rounded-full px-8 py-6 text-lg font-medium animate-pulse-slow"
            >
              اطلب استشارتك المجانية الآن
            </Button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="برمجة وتطوير" 
              className="w-full max-w-md rounded-lg shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;