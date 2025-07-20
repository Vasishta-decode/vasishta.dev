import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Here you would typically send the form data to your backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information */}
            <div className="md:w-2/5">
              <div className="bg-blue-900 text-white p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-blue-100 mb-8">
                  Fill out the form and I will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-300" />
                    <div>
                      <p className="text-sm text-blue-300">Email</p>
                      <p>vasishta.official@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-300" />
                    <div>
                      <p className="text-sm text-blue-300">Phone</p>
                      <p>+91 807-351-9760</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-300" />
                    <div>
                      <p className="text-sm text-blue-300">Address</p>
                      <p>Tech Park, Brigade Road, Bangalore, 560001</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="text-lg font-semibold mb-4">Connect</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://x.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Follow on X (Twitter)"
                    >
                      <Twitter size={20} className="text-white" />
                    </a>
                    <a 
                      href="https://en-gb.facebook.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Follow on Facebook"
                    >
                      <Facebook size={20} className="text-white" />
                    </a>
                    <a 
                      href="https://github.com/login" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Follow on GitHub"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a 
                      href="https://www.instagram.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Follow on Instagram"
                    >
                      <Instagram size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-3/5">
              <div className="bg-white dark:bg-black p-8 rounded-2xl border dark:border-[#414141]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 focus:bg-white dark:focus:bg-black text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 focus:bg-white dark:focus:bg-black text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Hello, I'd like to talk about..."
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 focus:bg-white dark:focus:bg-black text-gray-900 dark:text-white resize-none"
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="text-green-600 dark:text-green-400">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="text-red-600 dark:text-red-400">
                      Something went wrong. Please try again later.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5L19 12L12 19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
