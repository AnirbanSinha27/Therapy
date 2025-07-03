// components/Contact.tsx
'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#f3f0e8] w-full">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm p-8 md:p-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-[#57574D]">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block font-sans font-medium text-[#111111] mb-2">
                Name 
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#94b0b0] focus:border-[#94b0b0] outline-none transition ${
                    errors.name ? 'border-red-500' : 'border-[#7e7e6b]'
                  }`}
                />
                {errors.name && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FiAlertCircle className="text-red-500" />
                  </div>
                )}
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block font-sans font-medium text-[#111111] mb-2">
                Phone 
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: {
                      value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                      message: 'Please enter a valid phone number',
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#94b0b0] focus:border-[#94b0b0] outline-none transition ${
                    errors.phone ? 'border-red-500' : 'border-[#7e7e6b]'
                  }`}
                />
                {errors.phone && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FiAlertCircle className="text-red-500" />
                  </div>
                )}
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block font-sans font-medium text-[#111111] mb-2">
                Email 
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#94b0b0] focus:border-[#94b0b0] outline-none transition ${
                    errors.email ? 'border-red-500' : 'border-[#7e7e6b]'
                  }`}
                />
                {errors.email && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FiAlertCircle className="text-red-500" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block font-sans font-medium text-[#111111] mb-2">
                What brings you here? 
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'This field is required' })}
                  className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#94b0b0] focus:border-[#94b0b0] outline-none transition ${
                    errors.message ? 'border-red-500' : 'border-[#7e7e6b]'
                  }`}
                />
                {errors.message && (
                  <div className="absolute top-3 right-3">
                    <FiAlertCircle className="text-red-500" />
                  </div>
                )}
              </div>
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Preferred Time Field */}
            <div>
              <label htmlFor="preferredTime" className="block font-sans font-medium text-[#111111] mb-2">
                Preferred time to reach you 
              </label>
              <div className="relative">
                <input
                  id="preferredTime"
                  type="text"
                  {...register('preferredTime', { required: 'This field is required' })}
                  className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#94b0b0] focus:border-[#94b0b0] outline-none transition ${
                    errors.preferredTime ? 'border-red-500' : 'border-[#7e7e6b]'
                  }`}
                  placeholder="e.g. Weekdays after 5pm"
                />
                {errors.preferredTime && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FiAlertCircle className="text-red-500" />
                  </div>
                )}
              </div>
              {errors.preferredTime && (
                <p className="mt-2 text-sm text-red-600">{errors.preferredTime.message}</p>
              )}
            </div>

            {/* Checkbox Field */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeToContact"
                  type="checkbox"
                  {...register('agreeToContact', {
                    required: 'You must agree to be contacted',
                  })}
                  className="w-4 h-4 text-[#94b0b0] border-[#7e7e6b] rounded focus:ring-[#94b0b0]"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeToContact" className="font-sans text-[#111111]">
                  I agree to be contacted 
                </label>
                {errors.agreeToContact && (
                  <p className="mt-1 text-sm text-red-600">{errors.agreeToContact.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#94b0b0] text-white font-sans font-medium rounded-full hover:bg-[#7a9a9a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#94b0b0] focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}