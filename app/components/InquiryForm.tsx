'use client';

import { useState } from 'react';

interface InquiryFormProps {
  productName?: string;
  onSubmit?: (data: InquiryData) => void;
}

export interface InquiryData {
  name: string;
  phone: string;
  crop: string;
  problem: string;
  quantity?: string;
  preferredContact: 'whatsapp' | 'callback';
}

export default function InquiryForm({
  productName,
  onSubmit,
}: InquiryFormProps) {
  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    phone: '',
    crop: '',
    problem: '',
    quantity: '',
    preferredContact: 'whatsapp',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I'm interested in inquiring about agricultural products.\nName: ${formData.name}\nPhone: ${formData.phone}\nCrop: ${formData.crop}\nProblem: ${formData.problem}\nQuantity: ${formData.quantity || 'Not specified'}\n${
      productName ? `Product: ${productName}` : ''
    }`;

    if (formData.preferredContact === 'whatsapp') {
      const whatsappURL = `https://wa.me/917349656529?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, '_blank');
    }

    setSubmitted(true);
    onSubmit?.(formData);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        crop: '',
        problem: '',
        quantity: '',
        preferredContact: 'whatsapp',
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
        <p className="text-green-700 font-semibold">✓ Inquiry submitted successfully!</p>
        <p className="text-green-600 text-sm">We'll contact you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg border border-gray-200 space-y-4"
    >
      <h3 className="text-lg font-bold text-gray-800">Request For More Information</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Crop *</label>
        <input
          type="text"
          required
          value={formData.crop}
          onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="e.g., Paddy, Chilli"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Problem/Issue *</label>
        <input
          type="text"
          required
          value={formData.problem}
          onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="e.g., Rice Blast, Thrips"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Needed</label>
        <input
          type="text"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="e.g., 5 liters, 1 box"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="whatsapp"
              checked={formData.preferredContact === 'whatsapp'}
              onChange={() =>
                setFormData({ ...formData, preferredContact: 'whatsapp' })
              }
              className="mr-2"
            />
            <span className="text-gray-700">WhatsApp</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
      >
        Send Inquiry
      </button>
    </form>
  );
}

