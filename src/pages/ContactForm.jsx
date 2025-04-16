import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('الاسم مطلوب'),
    email: Yup.string().email('بريد إلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
    phone: Yup.string().matches(/^[0-9]+$/, 'رقم الهاتف يجب أن يحتوي على أرقام فقط'),
    message: Yup.string().required('الرسالة مطلوبة').min(10, 'الرسالة قصيرة جداً')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert('تم إرسال الرسالة بنجاح!');
        resetForm();
        setSubmitting(false);
      }, 1000);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">
          <FaUser className="inline-block ml-2" /> الاسم الكامل
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          <FaEnvelope className="inline-block ml-2" /> البريد الإلكتروني
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 mb-2">
          <FaPhone className="inline-block ml-2" /> رقم الهاتف (اختياري)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
        ) : null}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 mb-2">
          <FaComment className="inline-block ml-2" /> الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition flex items-center justify-center gap-2 w-full"
      >
        <FaPaperPlane /> {formik.isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
      </button>
    </form>
  );
};

export default ContactForm;