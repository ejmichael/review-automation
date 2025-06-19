import React, { useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const Login = () => {

  const {login, isLoading, error} = useLogin() 
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: ''
  })
  
  const { user } = useAuthContext()  
  
    useEffect(() => {
        if(user) {
            navigate(`/dashboard/${user?.business._id}`)
        }

    }, [user])

  const navigate = useNavigate()

  const handleFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(formData.emailAddress === '' || formData.password === '') {
      alert ("Enter all fields")
      return
    }

    try {
      const loggedIn = await login(formData);

      console.log(loggedIn);
      

      if(loggedIn.data?.message === 'Login Successful'){
        console.log(loggedIn);
        
        console.log("Login Successful");
        navigate(`/dashboard/${loggedIn.data.business._id}`)
        
      }
    } catch (error) {
      console.log(error);
      
    }

  }

  console.log(formData);
  

  return (
        <div className="w-full min-h-[100vh] py-12 bg-gradient-to-tl from-blue-200 via-indigo-100 to-white">
            <div className="m-auto flex-col lg:w-[30%] max-w-[85%] p-4 ">
                <div className="max-w-7xl mx-auto text-center mb-8">
                    <h2 className="text-5xl font-bold text-gray-900">Login</h2>
                    <p className="mt-4 text-gray-600">Let's create your account and setup your business.</p>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="my-4 grid gap-4">
                    <div className='bg-white shadow rounded-md p-4'>
                            <div className="my-2">
                                <input type="email" className="border p-2 w-full" name="emailAddress" value={formData.emailAddress} placeholder="Email Address" onChange={handleFormChange} />
                            </div>
                            <div className="my-2">
                                <input type="password" className="border p-2 w-full" name="password" value={formData.password} placeholder="Password" onChange={handleFormChange} />
                            </div>
                            <div className="my-4 text-right ">
                                <button disabled={isLoading} type="button" onClick={handleSubmit} className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Login</button>
                            </div>
                            <Link to='/register'>
                              <button className='text-blue-700 hover:underline cursor-pointer'>Create account</button>
                            </Link>
                        </div>
                        
                  </form>

                  

                </div>
            </div>
        </div>
  )
}

export default Login