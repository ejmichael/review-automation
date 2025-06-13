import React, { useState } from 'react'
import { IoAdd } from "react-icons/io5";

const FAQs = () => {
    const [toggleItem, setToggleItem] = useState(null)

    const toggleAccordionItem = (id) => {
        setToggleItem((prevState) => (prevState === id ? null : id))
    }

    return (
        <div className="bg-white py-4 lg:py-6 mb-10">
            <div className='md:max-w-[90%] m-auto'>
                <div className='text-center m-10'>
                    <p className='text-4xl font-bold mb-2'>Frequently Asked Questions</p>
                    <p>Learn more about our review automation, SMS marketing, and lead generation services</p>
                </div>
                <div className="mx-auto max-w-[80%] grid gap-5 p-6 rounded-xl">
                    
                    
                    {/* 6 - NEW */}
                    <div className='border-b border-slate-400 border-spacing-4 pb-3'>
                        <div className='cursor-pointer flex justify-between items-center' onClick={() => toggleAccordionItem(6)}>
                            <p className='text-indigo-600 text-2xl'>How does the Google review automation work?</p>
                            <IoAdd className='text-2xl text-indigo-600'/>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${toggleItem === 6 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='text-gray-500 mt-2 text-left'>
                                We give you a branded QR code that links to a smart review form. Customers who rate 5 stars are routed to Google; lower ratings are privately captured for feedback. Every submission collects contact info for future follow-up.
                            </p>
                        </div>
                    </div>
                    <div className='border-b border-slate-400 border-spacing-4 pb-3'>
                        <div className='cursor-pointer flex justify-between items-center' onClick={() => toggleAccordionItem(1)}>
                            <p className='text-indigo-600 text-2xl'>What is done-for-you SMS marketing?</p>
                            <IoAdd className='text-2xl text-indigo-600'/>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${toggleItem === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='text-gray-500 mt-2 text-left'>
                                It’s a hands-off service where we create, schedule, and manage SMS campaigns for you—from writing the message to tracking results. You tell us your goal, and we handle the rest so you can focus on running your business.
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='border-b border-slate-400 border-spacing-4 pb-3'>
                        <div className='cursor-pointer flex justify-between items-center' onClick={() => toggleAccordionItem(2)}>
                            <p className='text-indigo-600 text-2xl'>How can bulk SMS services benefit my business?</p>
                            <IoAdd className='text-2xl text-indigo-600'/>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${toggleItem === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='text-gray-500 mt-2 text-left'>
                                SMS has a 98% open rate—way higher than email. With our bulk messaging, you can send personalized promotions, appointment reminders, or review requests to hundreds (or thousands) of customers instantly.
                            </p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='border-b border-slate-400 border-spacing-4 pb-3'>
                        <div className='cursor-pointer flex justify-between items-center' onClick={() => toggleAccordionItem(3)}>
                            <p className='text-indigo-600 text-2xl'>What kind of support do you offer?</p>
                            <IoAdd className='text-2xl text-indigo-600'/>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${toggleItem === 3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='text-gray-500 mt-2 text-left'>
                                We provide full support—from strategy and content creation to live campaign monitoring and performance insights. You’ll have access to our team for help at any stage, whether you're just starting or scaling.
                            </p>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className='border-b border-slate-400 border-spacing-4 pb-3'>
                        <div className='cursor-pointer flex justify-between items-center' onClick={() => toggleAccordionItem(4)}>
                            <p className='text-indigo-600 text-2xl'>Can I track the performance of my SMS campaigns?</p>
                            <IoAdd className='text-2xl text-indigo-600'/>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${toggleItem === 4 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='text-gray-500 mt-2 text-left'>
                                Yes! You’ll get real-time reporting on delivery, open rates, and responses. Our dashboard shows what’s working so you can optimize and grow faster.
                            </p>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className='border-b border-slate-400 border-spacing-4 pb-3'>
                        <div className='cursor-pointer flex justify-between items-center' onClick={() => toggleAccordionItem(5)}>
                            <p className='text-indigo-600 text-2xl'>Is my customer data secure?</p>
                            <IoAdd className='text-2xl text-indigo-600'/>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${toggleItem === 5 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='text-gray-500 mt-2 text-left'>
                                100%. We follow strict data protection standards and never sell or share your information. Your data is encrypted and only used for the campaigns you authorize.
                            </p>
                        </div>
                    </div>

                    {/* 7 - NEW */}
                    <div className='border-b border-slate-400 border-spacing-4 pb-3'>
                        <div className='cursor-pointer flex justify-between items-center' onClick={() => toggleAccordionItem(7)}>
                            <p className='text-indigo-600 text-2xl'>Can I use email and SMS together in one campaign?</p>
                            <IoAdd className='text-2xl text-indigo-600'/>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${toggleItem === 7 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='text-gray-500 mt-2 text-left'>
                                Absolutely. You can create combined campaigns where customers receive both a text and an email—maximizing your reach and increasing the chance of engagement. Perfect for promos, review requests, and follow-ups.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FAQs;
