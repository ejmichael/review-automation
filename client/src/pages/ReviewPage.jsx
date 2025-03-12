import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
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
    const [showComplaintsForm, setShowComplaintsForm] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [formCompleted, setFormCompleted] = useState(false);
    const [hideMainForm, setHideMainForm] = useState(false);
    const [businessInfo, setBusinessInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "";
  
    useEffect(() => {

        setIsLoading(true)

        const fetchBusinessInfo = async() => {

            
            try {
                const response = await axios.get(`${domain}/business/${businessID}`);

                if (typeof response.data === "object" && response.data !== null) {
                    setBusinessInfo(response.data);
                } else {
                    console.error("Unexpected data format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching business info:", error);
            } finally {
                setIsLoading(false);
            } 
        }
        
        fetchBusinessInfo()
        
    }, [businessID])

    console.log(businessInfo);
    

    
    const handleSubmit = async(e) => {
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
            feedback
          };

        if (rating === 0) {
            alert("Please select a rating")
            return
        }

        if (rating < 5) {
            console.log("Showing Complaint Form");
            setShowComplaintsForm(true);
            setHideMainForm(true);
        } else {
            //Create the review on our system
            const review = await axios.post(domain + '/review/create/' + businessID, {
                reviewData
            })

             // Reset form fields after submission
                setRating(0);
                setName('');
                setSurname('');
                setPhone('');
                setEmail('');
                setOptInSMS(false);
                setOptInEmail(false);
            
            console.log("Redirecting to Google Review Page");
            if(review) {
                window.location.assign(`https://search.google.com/local/writereview?placeid=${businessInfo.googlePlaceId}`);
            } 
        }


          // Here you can handle the form submission, like sending the data to your server
        console.log('Review Submitted:', reviewData);

    }

    const submitFeedback = async (e) => {
        e.preventDefault();

        //console.log(reviewData);

        const reviewData = {
            businessID,
            rating,
            name,
            surname,
            phone,
            email,
            optInSMS,
            optInEmail,
            feedback
          };

          console.log(reviewData);

          try {
            //Create the review on our system
            const review = await axios.post(domain + '/review/create/' + businessID, {reviewData})

            if(review.status === 201) {
                setShowComplaintsForm(false)
                setFormCompleted(true)
                setRating(0);
                setName('');
                setSurname('');
                setPhone('');
                setEmail('');
                setOptInSMS(false);
                setOptInEmail(false);
            }
          } catch (error) {
            console.log(error.message);
                        
          }
    }


    

  return (

    isLoading ? (<div>Loading</div>) : (
    <div
        style={{
            backgroundImage: businessInfo?.profilePicture
            ? `url(${businessInfo.profilePicture})`
            : `url('/path/to/default-image.jpg')`, // Fallback image if profilePicture is not available
        }}
        className={`p-8 relative h-[100vh] bg-cover bg-center overflow-auto max-h-[100vh]`}
    >
        <div className="absolute inset-0"></div> 
        <div className='p-6 bg-black bg-opacity-80 lg:max-w-[45%] mx-auto rounded-lg text-white '>
            <p className='text-3xl my-6 font-bold relative'>
                {businessInfo?.businessName && businessInfo.businessName}
            </p>

            <div className='relative'>
                {!hideMainForm && (<form onSubmit={handleSubmit} className='w-full max-w-[500px] mx-auto' >
                    <div className='mb-[20px]'>
                        <label htmlFor="rating">Rating:</label>
                        <div className='mb-[15px] flex gap-6 justify-center '>
                            {[1,2,3,4,5].map((star) => (
                                <label 
                                    key={star} 
                                    className='cursor-pointer m-[5px]'
                                    onClick={() => setRating(star)}
                                >
                                    
                                    {rating >= star ? (
                                        <IoStar className='w-[150%] h-[150%]' style={{ color: 'gold', }} /> // Filled star when rating is equal to or greater than the current star
                                    ) : (
                                        <IoStarOutline className='w-[150%] h-[150%]' style={{ color: 'gold' }} /> // Outline star when rating is less than the current star
                                    )}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name" className=''>Name: </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                            style={{ padding: '8px', width: '100%', borderRadius: '8px' }}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="surname">Surname: </label>
                        <input
                            type="text"
                            id="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder="Enter your surname"
                            required
                            style={{ padding: '8px', width: '100%', borderRadius: '8px' }}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="phone">Phone: </label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
                            required
                            style={{ padding: '8px', width: '100%', borderRadius: '8px' }}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            style={{ padding: '8px', width: '100%', borderRadius: '8px' }}
                        />
                    </div>

                    <div className='my-4'>
                        <div>
                            <p className=''>
                                Where can we send exclusive discounts and promos?
                            </p>
                        </div>
                        <div className='flex items-center justify-evenly my-2 gap-3'>
                            <div className="flex items-center space-x-2 p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-200 transition">
                                <input
                                    type="checkbox"
                                    checked={optInSMS}
                                    onChange={() => setOptInSMS(!optInSMS)}
                                    className="w-8 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-400 cursor-pointer"
                                />
                                <p className="text-gray-700 font-medium">SMS me</p>
                            </div>
                            <div className="flex items-center space-x-2 p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-200 transition">
                                <input
                                    type="checkbox"
                                    checked={optInEmail}
                                    onChange={() => setOptInEmail(!optInEmail)}
                                    className="w-8 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-400 cursor-pointer"
                                />
                                <p className="text-gray-700 font-medium">Email me</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                margin: '20px auto',
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
                </form>)}

                {showComplaintsForm && (
                    <div className="mt-10 p-6 bg-gray-100 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">We're sorry you did not have a 5-star experience!</h2>
                        <textarea
                            placeholder="Tell us about your experience..."
                            className="w-full p-2 border border-gray-300 rounded"
                            rows="4"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        ></textarea>
                        <button onClick={submitFeedback} className="mt-4 px-6 py-2 bg-red-500 text-white rounded">Submit Complaint</button>
                    </div>
                )}

                {formCompleted && (
                    <div className="mt-10 p-6 bg-gray-100 rounded-lg">
                        <h2 className="text-xl font-bold mb-6 my-2">Thank you for your feedback!</h2>
                        <div className='bg-slate-300 h-[200px] font-bold text-3xl text-center content-center'>
                            ADVERTISEMENT
                        </div>
                    </div>
                )}

            </div>
        </div>
    </div>
    )
    
  )
}

export default ReviewPage