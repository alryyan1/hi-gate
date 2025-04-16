import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">الصفحة غير موجودة</h2>
        <p className="text-gray-600 mb-8 text-lg">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو قد تم نقلها.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition flex items-center justify-center gap-2"
          >
            <FaHome /> العودة للرئيسية
          </Link>
          <Link 
            to="/contact" 
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition flex items-center justify-center gap-2"
          >
            <FaEnvelope /> التواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;