import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-cyan-500/20 rounded-lg overflow-hidden glass-effect"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-900/50 transition-colors"
      >
        <span className="font-semibold text-white text-left">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-cyan-500/10"
      >
        <p className="px-6 py-4 text-cyan-300/70">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: 'How is my data saved?',
      answer: 'Your exam data is automatically saved to your browser\'s local storage. This means your data persists even after closing the app. However, clearing your browser cache will delete the data.',
    },
    {
      question: 'Can I use this on mobile?',
      answer: 'Absolutely! The app is fully responsive and works perfectly on desktop, tablet, and mobile devices. All features are accessible on any screen size.',
    },
    {
      question: 'Does it work offline?',
      answer: 'Yes! The app works completely offline once loaded. However, you won\'t see updates unless you refresh the page.',
    },
    {
      question: 'How often does the countdown update?',
      answer: 'The countdown updates every second with real-time accuracy. You\'ll see Days, Hours, Minutes, and Seconds updating in real-time.',
    },
    {
      question: 'Can I export my data?',
      answer: 'Currently, data is stored in local storage. You can take screenshots or access it through browser developer tools. Export feature coming soon!',
    },
    {
      question: 'What browsers are supported?',
      answer: 'The app works on all modern browsers: Chrome, Firefox, Safari, and Edge. For best 3D effects, use the latest version of your browser.',
    },
    {
      question: 'Is there a limit to exams I can add?',
      answer: 'No limit! Add as many exams as you need. The app can handle unlimited exams smoothly.',
    },
    {
      question: 'Can I sync data across devices?',
      answer: 'Not yet, but we\'re working on Firebase integration for cloud sync. For now, data is stored locally per browser.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
