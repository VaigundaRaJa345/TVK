
import React, { useState } from 'react';

const ContributePage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState('');

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;
    if (!formData.name) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        setFileName(e.target.files[0].name);
    } else {
        setFileName('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('submitting');
    
    // NOTE: This uses Formspree. Replace YOUR_FORM_ID with your actual Formspree form ID.
    // File uploads with Formspree require a paid plan. For free options, you might
    // need to instruct users to upload to a service like Imgur and share the link.
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
        const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setFileName('');
            form.reset();
        } else {
            setFormStatus('error');
        }
    } catch (error) {
        setFormStatus('error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-2">Contribute & Contact</h1>
      <p className="text-center text-gray-400 mb-8">Have something to share or a message for the team? We'd love to hear from you.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-tvk-yellow focus:border-tvk-yellow" />
          {errors.name && <p className="mt-1 text-sm text-tvk-red">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-tvk-yellow focus:border-tvk-yellow" />
          {errors.email && <p className="mt-1 text-sm text-tvk-red">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
          <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-tvk-yellow focus:border-tvk-yellow"></textarea>
          {errors.message && <p className="mt-1 text-sm text-tvk-red">{errors.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Upload File (Optional)</label>
          <label htmlFor="upload" className="mt-1 cursor-pointer flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div className="flex text-sm text-gray-500"><p className="pl-1">{fileName ? fileName : 'Upload a photo or video'}</p></div>
              <input id="upload" name="upload" type="file" className="sr-only" onChange={handleFileChange} />
            </div>
          </label>
          <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF, MP4 up to 10MB. For larger files, please upload to a cloud service and share the link in your message.</p>
        </div>
        <div>
          <button type="submit" disabled={formStatus === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-tvk-yellow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tvk-yellow disabled:bg-gray-500">
            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {formStatus === 'success' && <p className="text-green-400 text-center">Thank you! Your message has been sent successfully.</p>}
        {formStatus === 'error' && <p className="text-tvk-red text-center">Oops! Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
};

export default ContributePage;
