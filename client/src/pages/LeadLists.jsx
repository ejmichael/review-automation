import React, { useEffect, useState } from 'react'

const LeadLists = ({businessInfo}) => {

    console.log(businessInfo);

    const [emailList, setEmailList] = useState(null)
    const [smsList, setSmsList] = useState(null)

    useEffect(() => {
        // Check if businessInfo is available
        if (businessInfo) {
          // Filter users who have opted in for SMS and Email
          const filteredSmsList = businessInfo.reviews.filter(user => user.optInSMS);
          const filteredEmailList = businessInfo.reviews.filter(user => user.optInEmail);
    
          // Update state with filtered lists
          setSmsList(filteredSmsList);
          setEmailList(filteredEmailList);
        }
      }, [businessInfo]);

      console.log({
        smsList,
        emailList
      });
      
    
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 ">Lead Lists</h2>
      <div className='overflow-x-auto bg-white p-4 rounded-md shadow-md mb-5'>
        <h1 className='text-xl font-medium text-left p-2'>Email List</h1>
              <table className="min-w-full bg-white border border-gray-200 ">
                  <thead >
                      <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                          <th className="py-3 px-6 text-left">Name</th>
                          <th className="py-3 px-6 text-left">Surname</th>
                          <th className="py-3 px-6 text-left">Email</th>
                          <th className="py-3 px-6 text-left">Opt In Date</th>
                      </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm">
                      {emailList && emailList.map((user) => (
                          <tr key={user._id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                              <td className="py-3 px-6 text-left">{user.name}</td>
                              <td className="py-3 px-6 text-left">{user.surname}</td>
                              <td className="py-3 px-6 text-left">{user.email}</td>

                            
                              <td className="py-3 px-6 text-left">{new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      <div className='overflow-x-auto bg-white p-4 rounded-md shadow-md'>
        <h1 className='text-xl font-medium text-left p-2'>SMS List</h1>
              <table className="min-w-full bg-white border border-gray-200 ">
                  <thead >
                      <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                          <th className="py-3 px-6 text-left">Name</th>
                          <th className="py-3 px-6 text-left">Surname</th>
                          <th className="py-3 px-6 text-left">Phone</th>
                          <th className="py-3 px-6 text-left">Opt In Date</th>
                      </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm">
                      {smsList && smsList.map((user) => (
                          <tr key={user._id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                              <td className="py-3 px-6 text-left">{user.name}</td>
                              <td className="py-3 px-6 text-left">{user.surname}</td>
                              <td className="py-3 px-6 text-left">{user.phone}</td>

                            
                              <td className="py-3 px-6 text-left">{new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
    </div>
  )
}

export default LeadLists