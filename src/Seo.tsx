import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title} | شركة البرمجيات</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || 'برمجة, مواقع, تطبيقات, سعودية'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <html lang="ar" dir="rtl" />
    </Helmet>
  );
};

export default Seo;