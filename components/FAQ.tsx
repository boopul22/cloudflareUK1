import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-base sm:text-lg font-semibold ${isOpen ? 'text-brand-primary' : 'text-brand-dark group-hover:text-brand-primary'} transition-colors`}>
                    {question}
                </span>
                <div className={`p-1 rounded-full ${isOpen ? 'bg-brand-primary/10 text-brand-primary' : 'text-gray-400 group-hover:text-brand-primary group-hover:bg-gray-50'} transition-all`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-brand-gray text-base leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Do I contact my insurer if it wasn't my fault?",
            answer: "Call us first! We act on your behalf to manage everything directly with the at-fault driver's insurer. This prevents unnecessary claims on your own policy."
        },
        {
            question: "Will this affect my No-Claims Bonus?",
            answer: "No. Since the accident wasn't your fault, we ensure your policy stays clean, your no-claims bonus remains intact, and your premiums are protected."
        },
        {
            question: "Are there any upfront costs or excess to pay?",
            answer: "None. We recover all costs from the at-fault party's insurer. You won't pay a penny—not even your excess."
        },
        {
            question: "What support do you provide?",
            answer: "We handle it all: immediate roadside recovery, a like-for-like replacement vehicle (often within 24 hours), manufacturer-approved repairs, and full claim management."
        },
        {
            question: "How fast will I be back on the road?",
            answer: "Very fast. We aim to get you a replacement vehicle within 24 hours to ensure minimal disruption to your daily life."
        },
        {
            question: "What should I do immediately after an accident?",
            answer: "Stay calm, ensure safety, and exchange details. Take photos of the scene. Then call us immediately—we'll guide you through every step from there."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 md:py-16 bg-white" id="faq">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-12">
                    <div className="text-center mb-8 md:mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <HelpCircle className="w-4 h-4" />
                            Common Questions
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">
                            You Asked, We Answered
                        </h2>
                        <p className="mt-3 md:mt-4 text-base md:text-lg text-brand-gray max-w-2xl mx-auto">
                            Everything you need to know about our non-fault accident service.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
