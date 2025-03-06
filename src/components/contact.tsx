"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  website: z.string().optional(),
  inquiry: z.string().min(1, "Please select an option"),
  message: z.string().min(5, "Message should be at least 5 characters"),
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

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    setSubmitted(true);
  };

  return (
    <div className="p-4" id="contact">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Contact{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Now
          </span>
        </h1>
        <p className="text-gray-700 mt-2">We will contact you within 24h.</p>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-7xl border-t-8 border-[#6640F4] bg-[#F0EFF5] px-4 py-20 rounded-3xl relative">
          <img
            src="/contact_a.png"
            alt="Small Decorative Left"
            className="absolute bottom-6 left-0 w-30 h-30"
          />

          <div className="w-full max-w-4xl mx-auto">
            {submitted ? (
              <p className="text-green-700 text-center font-semibold">
                Thank you! Your request has been submitted.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 p-6 rounded-xl relative z-10"
              >
                <p className="text-center text-red-500">
                  Fields marked with * are required.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    {...register("name")}
                    placeholder="Name *"
                    className="w-full p-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    {...register("email")}
                    placeholder="Email Address *"
                    className="w-full p-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    {...register("phone")}
                    placeholder="Phone Number (optional)"
                    className="w-full p-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    {...register("website")}
                    placeholder="Your Website (optional)"
                    className="w-full p-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
                {errors.inquiry && (
                  <p className="text-red-500 text-sm">
                    {errors.inquiry.message}
                  </p>
                )}
                <textarea
                  {...register("message")}
                  placeholder="How can we help you?"
                  className="w-full p-4 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 h-40"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-800">
                    By submitting, I agree to the{" "}
                    <a href="#" className="text-blue-600 underline">
                      Terms & Conditions
                    </a>
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full max-w-sm bg-[#6640F4] text-white p-4 text-sm rounded-3xl font-semibold hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send Your Request"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <img
  src="/contact_message.png"
  alt="Small Decorative Right"
  className="absolute top-6 -right-20 w-30 h-30 z-0 hidden md:block"
/>

        </div>
      </div>
    </div>
  );
}
