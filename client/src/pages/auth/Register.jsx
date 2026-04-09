import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRegister } from '../../hooks/useRegister';

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { register, checkCustomer, isLoading } = useRegister();

  const leadId = searchParams.get('leadId');

  // Step navigation
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(prev => Math.min(prev + 1, 2));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  // Form state (only fields needed for step 2 & 3)
  const [formData, setFormData] = useState({
    businessName: '',
    description: '',
    buildingNumber: '',
    street: '',
    city: '',
    country: '',
    website: '',
    instagram: '',
    facebook: '',
    googlePlaceId: '',
    profilePicture: '',
    password: ''
  });

  const [imageURL, setImageURL] = useState('');

  // Load lead info and validate payment
  useEffect(() => {
    const fetchLeadData = async () => {
      if (!leadId) return navigate('/');

      try {
        const lead = await checkCustomer(leadId);
        console.log('Lead data:', lead);

        if (lead?.status !== "paid") {
          return navigate('/payment-required');
        }

        // Prefill business info if available
        setFormData(prev => ({
          ...prev,
          businessName: lead.businessName || '',
          firstName: lead.firstName || '',
          lastName: lead.lastName || '',
          phone: lead.phone || '',
          emailAddress: lead.email || '',
          isPaid: lead.status === "paid" ? true : false,
        }));
      } catch (err) {
        console.error(err);
        navigate('/');
      }
    };

    fetchLeadData();
  }, [leadId, navigate]);

  console.log(formData);
  

  // Handle input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Image upload
  const handleImageUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'my_own_preset');

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dwvrx1rhr/image/upload',
        { method: 'POST', body: data }
      );
      const result = await res.json();
      setImageURL(result.secure_url);
      setFormData(prev => ({ ...prev, profilePicture: result.secure_url }));
    } catch (err) {
      console.error('Image upload failed:', err);
    }
  };

  // Submit registration
  const onSubmit = async e => {
    e.preventDefault();

    // Required fields for step 2 & 3
    const required = ['businessName', 'description', 'city', 'country', 'website', 'googlePlaceId', 'password'];
    const missing = required.filter(field => !formData[field]);
    if (missing.length) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const dataToSubmit = { ...formData, leadId };
      const response = await register(dataToSubmit);

      if (response.data?.message === 'Business Created') {
        navigate(`/dashboard/${response.data.business._id}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-tl from-blue-200 via-indigo-100 to-white">
      <div className="m-auto lg:w-[40%] max-w-[85%] p-4">
        <h2 className="text-4xl font-bold text-center mb-4">Complete Your Registration</h2>
        <form onSubmit={onSubmit} className="grid gap-4">
          {/* Step 2: Business Info */}
          {step === 1 && (
            <div className="bg-white p-4 rounded-md shadow">
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                placeholder="Business Name"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <textarea
                name="description"
                value={formData.description}
                placeholder="Describe your business"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="buildingNumber"
                value={formData.buildingNumber}
                placeholder="Address Line 1"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="street"
                value={formData.street}
                placeholder="Street"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="City"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                placeholder="Country"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <div className="flex justify-between mt-4">
                <div />
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Social & Password */}
          {step === 2 && (
            <div className="bg-white p-4 rounded-md shadow">
              <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 mb-2 rounded-md inline-block">
                Upload Image
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>

              <input
                type="text"
                name="website"
                value={formData.website}
                placeholder="Website URL"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                placeholder="Instagram Handle"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                placeholder="Facebook Handle"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                type="text"
                name="googlePlaceId"
                value={formData.googlePlaceId}
                placeholder="Google Place ID"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                onChange={handleChange}
                className="border p-2 w-full mb-2"
              />

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 px-4 py-2 rounded-full hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                >
                  {isLoading ? 'Creating...' : 'Create Account'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;