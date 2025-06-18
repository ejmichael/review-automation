import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useLocation  } from 'react-router-dom';
import { useRegister } from '../../hooks/useRegister';

const Register = () => {

    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://review-automation-backend.onrender.com";
    const [profilePicture, setProfilePicture] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const navigate = useNavigate()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedPlan = searchParams.get('plan') || 'starter';
    const [step, setStep] = useState(1);
    const { register, isLoading, error } = useRegister()

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const [formData, setFormData] = useState({
        firstName: '', 
        lastName: '', 
        businessName: '', 
        description: '', 
        buildingNumber: '',
        buildingName: '',
        street: '',
        city: '',
        country: '',
        phone: '',
        emailAddress: '',
        website: '',
        instagram: '',
        facebook: '',
        googlePlaceId: '',
        password: '',
        profilePicture: ''
    })



    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }



    console.log(formData);
    

    // Fetch the Google Place ID based on the business name
    // const getGooglePlaceId = async () => {
    //     const apiKey = 'AIzaSyCiqgIaEXaBgX3VQHtGR02eWlZKVeBztyg';  // Make sure to replace this with your actual Google API key
    //     const businessName = formData.businessName;
    //     const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${businessName}&key=${apiKey}`;
        
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         if (data.results && data.results.length > 0) {
    //             const placeId = data.results[0].place_id;
    //             setFormData((prevData) => ({
    //                 ...prevData,
    //                 googlePlaceId: placeId
    //             }));
    //         }
    //     } catch (error) {
    //         console.error("Error fetching Place ID:", error);
    //     }
    // }

    const handleImageUpload = async(e) => {
        const file = e.target.files[0]; // Get the selected file
        if (!file) return;
    
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "my_own_preset");
    
        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/dwvrx1rhr/image/upload", {
              method: "POST",
              body: formData,
            });
      
            const data = await response.json();
            console.log("Cloudinary Upload Response:", data);
      
            setImageURL(data.secure_url); // Save uploaded image URL
    
             // Update formData with the image URL
             setFormData((prevState) => ({
                ...prevState,
                profilePicture: data.secure_url, // Save URL in formData
              }));
          } catch (error) {
            console.error("Error uploading to Cloudinary:", error);
          }
        };
    

    const handleNext = async () => {
        if (step === 1) {
            if (
                formData.firstName.trim() === '' ||
                formData.lastName.trim() === '' ||
                formData.emailAddress.trim() === '' ||
                formData.phone.trim() === ''
                ) {
                    alert('Please fill in all personal information fields.');
                    return;
                }
                setStep(2);
            }
        else if (step === 2) {
            if (
                formData.businessName.trim() === '' ||
                formData.description.trim() === '' ||
                formData.buildingNumber.trim() === '' ||
                formData.city.trim() === '' ||
                formData.country.trim() === ''
            ) {
                alert('Please fill in all business information fields.');
                return;
            }
            setStep(3);
        }
    }

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();

        if (formData.businessName === '' || 
            formData.buildingNumber === '' ||
            formData.street === '' ||
            formData.city === '' ||
            formData.emailAddress === '' ||
            formData.website === '' ||
            formData.googlePlaceId === '' ||
            formData.password === ''
        ) 
            {
            // Handle the case where one or more fields are empty
            alert("Enter all fields")
            return 
        }
        
        
        try {
            console.log("Submitted", formData);
            // const response = await axios.post(domain + '/business/create', formData)

            const registered = await register(formData)
            //console.log(registered);
            
            if(registered.data?.message === 'Business Created'){
                console.log(registered);
                navigate(`/payment?email=${encodeURIComponent(formData.emailAddress)}&name=${encodeURIComponent(formData.firstName)}&plan=${selectedPlan}`);            
            }

        } catch (error) {
            console.log(error);
            
        }
        
    }

    return (
        <div className="w-full min-h-[100vh] py-12 bg-gradient-to-tl from-blue-200 via-indigo-100 to-white">
            <div className="m-auto flex-col lg:w-[30%] max-w-[85%] p-4 ">
                <div className="max-w-7xl mx-auto text-center mb-8">
                    <h2 className="text-5xl font-bold text-gray-900">Registration</h2>
                    <p className="mt-4 text-gray-600">Let's create your account and setup your business.</p>
                </div>
                <div className='flex gap-6 w-full justify-center mb-6 item-center content-center'>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm 
                        ${step === 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}>
                        1
                    </div>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm 
                        ${step === 2 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}>
                        2
                    </div>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm 
                        ${step === 3 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}>
                        3
                    </div>
                </div>
                <div className="">
                    <form onSubmit={onSubmit} className="my-4 grid gap-4">
                    {step === 1 && (
                        <div className='bg-white shadow rounded-md p-4'>
                            {/* Step 1: Personal Info */}
                            <div className="my-2 flex gap-2">
                                <input type="text" className="border p-2 w-full" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChange} />
                                <input type="text" className="border p-2 w-full" name="lastName" value={formData.lastName} placeholder="Surname" onChange={handleChange} />
                            </div>
                            <div className="my-2">
                                <input type="email" className="border p-2 w-full" name="emailAddress" value={formData.emailAddress} placeholder="Email Address" onChange={handleChange} />
                            </div>
                            <div className="my-2">
                                <input type="text" className="border p-2 w-full" name="phone" value={formData.phone} placeholder="Phone Number" onChange={handleChange} />
                            </div>
                            <div className="my-4 text-right">
                                <button type="button" onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Next</button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className='bg-white shadow rounded-md p-4'>
                        {/* Step 2: Business Info */}
                        <input type="text" className="border p-2 w-full mb-2" name="businessName" value={formData.businessName} placeholder="Business Name" onChange={handleChange} />
                        <textarea className="border p-2 w-full mb-2" name="description" value={formData.description} placeholder="Describe your business" onChange={handleChange} />
                        <input type="text" className="border p-2 w-full mb-2" name="buildingNumber" value={formData.buildingNumber} placeholder="Address Line 1" onChange={handleChange} />
                        <input type="text" className="border p-2 w-full mb-2" name="buildingName" value={formData.buildingName} placeholder="Address Line 2" onChange={handleChange} />
                        <input type="text" className="border p-2 w-full mb-2" name="street" value={formData.street} placeholder="Street" onChange={handleChange} />
                        <input type="text" className="border p-2 w-full mb-2" name="city" value={formData.city} placeholder="City" onChange={handleChange} />
                        <input type="text" className="border p-2 w-full mb-2" name="country" value={formData.country} placeholder="Country" onChange={handleChange} />
                        <div className="my-4 flex justify-between">
                            <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded-full hover:bg-gray-400">Back</button>
                            <button type="button" onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Next</button>
                        </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className='bg-white shadow rounded-md p-4'>
                            {/* Step 3: Social Info & Password */}
                            <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 my-2  rounded-md text-sm font-semibold hover:bg-blue-700 transition">
                                Choose Image
                                <input  type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                            </label>

                            <input type="text" className="border p-2 w-full mb-2 mt-4" name="googlePlaceId" value={formData.googlePlaceId} placeholder="Google Business ID" onChange={handleChange} />
                            <input type="text" className="border p-2 w-full mb-2" name="website" value={formData.website} placeholder="Website URL" onChange={handleChange} />
                            <input type="text" className="border p-2 w-full mb-2" name="instagram" value={formData.instagram} placeholder="Instagram Handle" onChange={handleChange} />
                            <input type="text" className="border p-2 w-full mb-2" name="facebook" value={formData.facebook} placeholder="Facebook Handle" onChange={handleChange} />
                            <input type="password" className="border p-2 w-full mb-2" name="password" value={formData.password} placeholder="Enter your password" onChange={handleChange} />
                            
                            <div className="my-4 flex justify-between">
                                <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded-full hover:bg-gray-400">Back</button>
                                <button type="submit" disabled={isLoading} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                {isLoading ? "Creating..." : "Create Account"}
                                </button>
                            </div>
                        </div>
                    )}
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register
