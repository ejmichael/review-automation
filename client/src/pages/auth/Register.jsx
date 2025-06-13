import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useLocation  } from 'react-router-dom';

const Register = () => {

    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://review-automation-backend.onrender.com";
    const [profilePicture, setProfilePicture] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const navigate = useNavigate()
    const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const selectedPlan = searchParams.get('plan') || 'starter';

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

    const [isLoading, setIsLoading] = useState(false)

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
    

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (formData.businessName === '' || 
            formData.buildingNumber === '' ||
            formData.street === '' ||
            formData.city === '' ||
            formData.emailAddress === '' ||
            formData.website === '' ||
            formData.googlePlaceId === '' ||
            formData.password === '') {
            // Handle the case where one or more fields are empty
            alert("Enter all fields")
            setIsLoading(false)
            return 
        }
        
        
        try {
            console.log("Submitted", formData);
            const response = await axios.post(domain + '/business/create', formData)

            if(response.data?.message === "Business Created"){
                console.log(response.data);
navigate(`/payment?email=${encodeURIComponent(formData.emailAddress)}&name=${encodeURIComponent(formData.firstName)}&plan=${selectedPlan}`);            }
            
            
        } catch (error) {
            console.log(error);
            
        }
        
        setIsLoading(false);
    }

    return (
        <div className="w-full h-full py-12 bg-gradient-to-tl from-blue-200 via-indigo-100 to-white">
            <div className="m-auto flex-col lg:w-[80%] p-4 ">
                <div className="max-w-7xl mx-auto text-center mb-8">
                    <h2 className="text-5xl font-bold text-gray-900">Registration</h2>
                    <p className="mt-4 text-gray-600">Let's create your account and setup your business.</p>
                </div>
                <div className="">
                    <form onSubmit={onSubmit} className="my-4 grid md:grid-cols-2 gap-4">
                        <div className='bg-white shadow rounded-md p-4 col-span-1'>
                            <div className="my-2 flex gap-2">
                                <input 
                                    type="firstName" 
                                    className="border p-2 w-full" 
                                    name="firstName" 
                                    id='firstName' 
                                    value={formData.firstName} 
                                    placeholder="First Name" 
                                    onChange={handleChange} 
                                    //onBlur={getGooglePlaceId}  // Trigger Place ID fetch on blur
                                />
                                <input 
                                    type="lastName" 
                                    className="border p-2 w-full" 
                                    name="lastName" 
                                    id='lastName' 
                                    value={formData.lastName} 
                                    placeholder="Surname" 
                                    onChange={handleChange} 
                                    //onBlur={getGooglePlaceId}  // Trigger Place ID fetch on blur
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="email" 
                                    className="border p-2 w-full" 
                                    name="emailAddress" 
                                    id='emailAddress' 
                                    value={formData.emailAddress} 
                                    placeholder="Email Address" 
                                    onChange={handleChange} 
                                    //onBlur={getGooglePlaceId}  // Trigger Place ID fetch on blur
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="phone" 
                                    id='phone' 
                                    value={formData.phone} 
                                    placeholder="Phone Number" 
                                    onChange={handleChange} 
                                    //onBlur={getGooglePlaceId}  // Trigger Place ID fetch on blur
                                />
                            </div> 
                                                        <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="businessName" 
                                    id='businessName' 
                                    value={formData.businessName} 
                                    placeholder="Enter your business name" 
                                    onChange={handleChange} 
                                    //onBlur={getGooglePlaceId}  // Trigger Place ID fetch on blur
                                />
                            </div>
                            
                            <div className="my-2">
                                <textarea 
                                    className="border p-2 w-full" 
                                    name="description" 
                                    id="description" 
                                    value={formData.description} 
                                    placeholder="Describe your business in a few words" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="buildingNumber" 
                                    id='buildingNumber' 
                                    value={formData.buildingNumber} 
                                    placeholder="Adress Line 1" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="buildingName" 
                                    id='buildingName' 
                                    value={formData.buildingName} 
                                    placeholder="Address Line 2" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="street" 
                                    id='street' 
                                    value={formData.street} 
                                    placeholder="Street" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="city" 
                                    id='city' 
                                    value={formData.city} 
                                    placeholder="City" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="country" 
                                    id='country' 
                                    value={formData.country} 
                                    placeholder="Country" 
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='col-span-1 shadow rounded-md p-4 bg-white'>
                            <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition">
                                Choose Image
                                <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden"
                                onChange={handleImageUpload}
                                />
                            </label>

                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="googlePlaceId" 
                                    id='googlePlaceId' 
                                    value={formData.googlePlaceId} 
                                    placeholder="Google Business ID" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="website" 
                                    id='website' 
                                    value={formData.website} 
                                    placeholder="Website URL" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="instagram" 
                                    id='instagram' 
                                    value={formData.instagram} 
                                    placeholder="Instagram Handle" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="text" 
                                    className="border p-2 w-full" 
                                    name="facebook" 
                                    id='facebook' 
                                    value={formData.facebook} 
                                    placeholder="Facebook Handle" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="my-2">
                                <input 
                                    type="password" 
                                    className="border p-2 w-full" 
                                    name="password" 
                                    id='password' 
                                    value={formData.password} 
                                    placeholder="Enter your password" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='my-4 w-full border text-center py-2 rounded bg-blue-600 text-white font-semibold'>
                            <button type="submit" disabled={isLoading} className="">{isLoading ? "Creating..." : "Create Account" }</button>
                        </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
