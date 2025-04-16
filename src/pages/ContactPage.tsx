import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
   
      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">تواصل معنا</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          نحن هنا للإجابة على استفساراتك وتقديم الدعم الفني لك في أي وقت
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">معلومات التواصل</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-primary text-xl mt-1 ml-3" />
              <div>
                <h3 className="font-bold text-lg">العنوان</h3>
                <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-primary text-xl mt-1 ml-3" />
              <div>
                <h3 className="font-bold text-lg">الهاتف</h3>
                <p className="text-gray-600">+966 12 345 6789</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="text-primary text-xl mt-1 ml-3" />
              <div>
                <h3 className="font-bold text-lg">البريد الإلكتروني</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaClock className="text-primary text-xl mt-1 ml-3" />
              <div>
                <h3 className="font-bold text-lg">ساعات العمل</h3>
                <p className="text-gray-600">الأحد - الخميس: 8 صباحاً - 5 مساءً</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">أرسل لنا رسالة</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;