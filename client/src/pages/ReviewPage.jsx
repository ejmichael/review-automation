import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoStar, IoStarOutline } from "react-icons/io5";

const ReviewPage = () => {
    const {businessID} = useParams()

    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [optInSMS, setOptInSMS] = useState(false);
    const [optInEmail, setOptInEmail] = useState(false);
  
    const handleSubmit = (e) => {
        e.preventDefault();

        const reviewData = {
            businessID,
            rating,
            name,
            surname,
            phone,
            email,
            optInSMS,
            optInEmail,
          };

          // Here you can handle the form submission, like sending the data to your server
    console.log('Review Submitted:', reviewData);

    // Reset form fields after submission
    setRating(0);
    setName('');
    setSurname('');
    setPhone('');
    setEmail('');
    setOptInSMS(false);
    setOptInEmail(false);
    }

  return (
    <div className='p-[20px] bg-slate-100 h-[100vh]'>
        <p className='text-2xl my-4 font-bold'>
            Review: {businessID}
        </p>

        <div className='lg:max-w-[50%] mx-auto'>
            <form onSubmit={handleSubmit} >
                <div className='mb-[20px]'>
                    <label htmlFor="rating">Rating:</label>
                    <div className='mb-[20px] flex gap-6 justify-center '>
                        {[1,2,3,4,5].map((star) => (
                            <label 
                                key={star} 
                                className='cursor-pointer m-[5px]'
                                onClick={() => setRating(star)}
                            >
                                
                                 {rating >= star ? (
                                    <IoStar className='w-[250%] h-[250%]' style={{ color: 'gold', }} /> // Filled star when rating is equal to or greater than the current star
                                ) : (
                                    <IoStarOutline className='w-[250%] h-[250%]' style={{ color: 'gold' }} /> // Outline star when rating is less than the current star
                                )}
                            </label>
                        ))}
                    </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                style={{ padding: '5px', width: '100%' }}
            />
            </div>

            <div style={{ marginBottom: '10px' }}>
            <label htmlFor="surname">Surname: </label>
            <input
                type="text"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Enter your surname"
                required
                style={{ padding: '5px', width: '100%' }}
            />
            </div>

            <div style={{ marginBottom: '10px' }}>
            <label htmlFor="phone">Phone: </label>
            <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
                style={{ padding: '5px', width: '100%' }}
            />
            </div>

            <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                style={{ padding: '5px', width: '100%' }}
            />
            </div>

            <div style={{ marginBottom: '10px' }}>
            <label>
                <input
                type="checkbox"
                checked={optInSMS}
                onChange={() => setOptInSMS(!optInSMS)}
                />
                Opt-in to receive SMS for special offers
            </label>
            </div>

            <div style={{ marginBottom: '20px' }}>
            <label>
                <input
                type="checkbox"
                checked={optInEmail}
                onChange={() => setOptInEmail(!optInEmail)}
                />
                Opt-in to receive email for special offers
            </label>
            </div>

            <div>
            <button
                type="submit"
                style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                }}
            >
                Submit Review
            </button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default ReviewPage