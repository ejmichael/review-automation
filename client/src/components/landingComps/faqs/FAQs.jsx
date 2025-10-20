import React, { useState } from 'react'
import { IoAdd } from "react-icons/io5";

const FAQs = () => {
    const [toggleItem, setToggleItem] = useState(null)

    const toggleAccordionItem = (id) => {
        setToggleItem((prevState) => (prevState === id ? null : id))
    }

    const faqs = [
        {
            id: 1,
            question: "How does the Google review automation work?",
            answer: "We provide a branded QR code linking to a smart review form. Customers who give 5 stars are sent to Google; lower ratings are collected privately for feedback. Every submission captures contact info for follow-ups."
        },
        {
            id: 2,
            question: "What is done-for-you SMS & email marketing?",
            answer: "We create, schedule, and manage personalized SMS and email campaigns for you. From crafting messages to tracking results, we handle everything so you can focus on your business."
        },
        {
            id: 3,
            question: "How can bulk SMS and email campaigns benefit my business?",
            answer: "SMS has a 98% open rate, much higher than email. Send promotions, appointment reminders, or review requests to hundreds or thousands of contacts instantly, driving repeat business and engagement."
        },
        {
            id: 4,
            question: "Can I combine email and SMS in one campaign?",
            answer: "Absolutely. You can send both emails and texts in the same campaign—maximizing reach, engagement, and conversions. Perfect for promos, review requests, and follow-ups."
        },
        {
            id: 5,
            question: "Can I track the performance of my campaigns?",
            answer: "Yes! Our dashboard shows delivery rates, opens, clicks, and responses in real-time. Easily optimize your campaigns and see what’s driving results."
        },
        {
            id: 6,
            question: "What kind of support do you offer?",
            answer: "We provide full support—from strategy and content creation to live campaign monitoring. You’ll have access to our team anytime, whether you’re just starting or scaling."
        },
        {
            id: 7,
            question: "Is my customer data secure?",
            answer: "100%. We follow strict data protection standards. Your data is encrypted and only used for campaigns you authorize. We never sell or share your information."
        }
    ];

    return (
        <div className="bg-white py-12">
            <div className='md:max-w-[90%] m-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold mb-2'>Frequently Asked Questions</h2>
                    <p className='text-gray-700'>Everything you need to know about our review automation, lead generation, and SMS/email marketing services.</p>
                </div>
                <div className="mx-auto md:max-w-[80%] grid gap-5 p-6 rounded-xl">
                    {faqs.map(faq => (
                        <div key={faq.id} className='border-b border-slate-400 pb-3'>
                            <div className='cursor-pointer flex justify-between items-center' onClick={() => toggleAccordionItem(faq.id)}>
                                <p className='text-indigo-600 text-lg  md:text-2xl font-medium text-left w-[90%]'>{faq.question}</p>
                                <IoAdd className='text-2xl text-indigo-600' />
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${toggleItem === faq.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                <p className='text-gray-500 text-left'>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQs;
