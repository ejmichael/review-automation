import React, { useState } from 'react'

const Profile = ({businessInfo}) => {
  console.log(businessInfo);

  const [editableData, setEditableData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setEditableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    // try {
    //   await axios.put(`${domain}/business/${businessID}`, editableData);
    //   setBusinessInfo(editableData);  // Update the displayed business info
    //   setIsEditing(false);  // Disable editing mode
    // } catch (error) {
    //   console.error("Error saving data:", error);
    // }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Profile Manager</h2>
      <div className="business-info bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Business Name</label>
            {isEditing ? (
              <input
                type="text"
                name="businessName"
                value={editableData.businessName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-xl font-bold">{businessInfo.businessName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            {isEditing ? (
              <textarea
                name="description"
                value={editableData.description}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{businessInfo.description}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Location</label>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={`${editableData.buildingNumber}, ${editableData.street}, ${editableData.city}, ${editableData.country}`}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{`${businessInfo.buildingNumber}, ${businessInfo.street}, ${businessInfo.city}, ${businessInfo.country}`}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={editableData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{businessInfo.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            {isEditing ? (
              <input
                type="email"
                name="emailAddress"
                value={editableData.emailAddress}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{businessInfo.emailAddress}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Website</label>
            {isEditing ? (
              <input
                type="url"
                name="website"
                value={editableData.website}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <a href={businessInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">{businessInfo.website}</a>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Instagram</label>
            {isEditing ? (
              <input
                type="text"
                name="instagram"
                value={editableData.instagram}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{businessInfo.instagram || "Not provided"}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Facebook</label>
            {isEditing ? (
              <input
                type="text"
                name="facebook"
                value={editableData.facebook}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{businessInfo.facebook || "Not provided"}</p>
            )}
          </div>

          <div className="flex justify-between mt-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
    </div>
  )
}

export default Profile