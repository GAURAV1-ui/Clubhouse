'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  website: z.string().optional(),
  inquiry: z.string().min(1, 'Please select an option'),
  message: z.string().min(5, 'Message should be at least 5 characters'),
});

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data:any) => {
    console.log('Form Data:', data);
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-6xl bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Get free <span className="text-yellow-300">consultation</span>
        </h2>
        <p className="text-center text-gray-100 mb-6">We will contact you within 24h.</p>
        {submitted ? (
          <p className="text-green-200 text-center">Thank you! Your request has been submitted.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto">
            <p className="text-center text-red-200">The field is required mark as *</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input {...register('name')} placeholder="Name *" className="w-full p-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white" />
              <input {...register('email')} placeholder="Email Address *" className="w-full p-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white" />
              <input {...register('phone')} placeholder="Phone Number (optional)" className="w-full p-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white" />
              <input {...register('website')} placeholder="Your Website (optional)" className="w-full p-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white" />
            </div>
            {errors.name && <p className="text-red-200 text-sm">{errors.name.message}</p>}
            {errors.email && <p className="text-red-200 text-sm">{errors.email.message}</p>}
            <select {...register('inquiry')} className="w-full p-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white">
              <option value="">How can we help you?</option>
              <option value="service">Service Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="other">Other</option>
            </select>
            {errors.inquiry && <p className="text-red-200 text-sm">{errors.inquiry.message}</p>}
            <textarea {...register('message')} placeholder="How can we help you?" className="w-full p-4 text-sm border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white h-40"></textarea>
            {errors.message && <p className="text-red-200 text-sm">{errors.message.message}</p>}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4" required />
              <label htmlFor="terms" className="text-sm text-white">
                By submitting, I’m agreed to the <a href="#" className="text-yellow-300 underline">Terms & Conditions</a>
              </label>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-full max-w-sm bg-yellow-300 text-blue-900 p-4 text-sm rounded-full font-semibold hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Send Your Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
