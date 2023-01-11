import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DeleteAccount = (props) => {
  const navigate = useNavigate();
  document.title = props.url_title;
  const [data, setData] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    const response = await fetch("http://localhost:5000/api/user/delete", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'localhost:5000',
        'Access-Control-Allow-Methods': ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
        'Access-Control-Allow-Headers': ['Content-Type', 'Authorization'],
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json()
    if (json.authtoken) {
      // Save the auth token and redirect
      console.log(json)
      navigate('/');
      navigate(0);
    }
    else {
      console.log("Invalid credentials");
    }
  }
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="container m-auto px-4 md:py-10 lg:py-20">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full my-6 shadow-lg rounded-lg border-0 bg-white dark:bg-gray-900">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h1 className="text-red-500 text-2xl lg:text-4xl font-bold"> ☠ </h1>
                  <h1 className="text-red-500 text-xl lg:text-2xl font-bold"> Delete Account </h1>
                </div>
              </div>
              <div className="flex-auto px-4 sm:px-10 md:px-20 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-[color:#6f00fe] dark:text-white text-xs font-bold mb-2" htmlFor="email">
                      <i className="fa-solid fa-user"></i> Email  <span className="text-red-500 font-bold">*</span></label>
                    <input type="email" value={data.email} onChange={onChange} name="email" id="email" placeholder="yash@itzzzyashu.dev" className="border-0 px-3 py-3 text-gray-700 dark:text-gray-500 placeholder-gray-400 dark:bg-gray-900 bg-white rounded text-sm shadow focus:outline-none lg:focus:border-[color:#6f00fe] lg:focus:border-b-2 w-full" required />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-[color:#6f00fe] dark:text-white text-xs font-bold mb-2" htmlFor="password">
                      <i className="fa-solid fa-lock"></i> Password <span className="text-red-500 font-bold">*</span></label>
                    <input type="password" value={data.password} onChange={onChange} name="password" id="password" placeholder="itzzzyashu@idk#123" className="border-0 px-3 py-3 text-gray-700 dark:text-gray-500 placeholder-gray-400 dark:bg-gray-900 bg-white rounded text-sm shadow focus:outline-none lg:focus:border-[color:#6f00fe] lg:focus:border-b-2 w-full" required />
                  </div>
                  <div className="text-center mt-6">
                    <button type="submit" name="submit" className="bg-red-500 text-white active:bg-gray-700 text-xs sm:text-sm font-semibold sm:font-bold  uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">I'm 100% sure, Delete My Account</button>
                  </div>
                  <p className='text-xs md:text-sm mt-4 text-black dark:text-white'> Having some issues? <Link to="/contact" className="text-[color:#6f00fe] dark:text-red-500">Feel Free to Contact Us</Link>.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteAccount;