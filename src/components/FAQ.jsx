import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Ensure you have lucide-react installed

export default function FAQ() {
  const faqs = [
    {
      question: 'What is TechFest?',
      answer: 'TechFest is an annual technology conference that brings together industry leaders and enthusiasts.',
    },
    {
      question: 'How do I register?',
      answer: 'You can register online through our website.',
    },
    {
      question: 'What topics will be covered?',
      answer: 'We will cover a range of topics including AI, Machine Learning, Web Development, and more.',
    },
    {
      question: 'Is there a student discount?',
      answer: 'Yes, we offer a 20% discount for students with valid ID.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-indigo-100 to-blue-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-900">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-indigo-500 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold">{question}</h3>
        {isOpen ? (
          <Minus className="h-6 w-6" />
        ) : (
          <Plus className="h-6 w-6" />
        )}
      </div>
      {isOpen && (
        <div className="p-4 text-gray-700 bg-indigo-50 rounded-b-lg transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}