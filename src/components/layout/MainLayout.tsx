// src/components/layout/MainLayout.tsx
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div 
      className="flex flex-col min-h-screen bg-gray-50 font-cairo text-gray-800"
      dir="rtl"
    >
      {/* شريط التنقل الثابت */}
      <Navbar />

      {/* المحتوى الرئيسي مع تأثيرات حركية */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow container mx-auto px-4 py-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* تذييل الصفحة الثابت */}
      <Footer />
    </div>
  );
};

export default MainLayout;