import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
  document.title = props.url_title;
  const navigate = useNavigate();
  if (localStorage.getItem('token')) {
    document.location.pathname = '/'
  }
  const [data, setData] = useState({ email: "", password: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '127.0.0.1',
        'Access-Control-Allow-Methods': ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
        'Access-Control-Allow-Headers': ['Content-Type', 'Authorization'],
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json();
    if (json.authtoken) {
      // Save the auth token and redirect
      console.log(json)
      localStorage.setItem('token', json.authtoken);
      localStorage.setItem('User Email', data.email);
      navigate('/');
      navigate(0);
    }
    else {
      alert("Invalid credentials");
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
                  <h1 className="text-[color:#6f00fe] dark:text-white text-xl lg:text-2xl font-bold"> Login Account </h1>
                </div>
              </div>
              <div className="flex-auto px-4 sm:px-10 md:px-20 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-[color:#6f00fe] dark:text-white text-xs font-bold mb-2" htmlFor="email">
                      <i className="fa-solid fa-user"></i> Email <span className="text-red-500 font-bold">*</span> </label>
                    <input type="email" value={data.email} onChange={onChange} name="email" id="email" placeholder="yash@itzzzyashu.dev" autoComplete="true" className="border-0 px-3 py-3 text-gray-700 dark:text-gray-500 placeholder-gray-400 dark:bg-gray-900 bg-white rounded text-sm shadow focus:outline-none lg:focus:border-[color:#6f00fe] lg:focus:border-b-2 w-full" required />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-[color:#6f00fe] dark:text-white text-xs font-bold mb-2" htmlFor="password">
                      <i className="fa-solid fa-lock"></i> Password <span className="text-red-500 font-bold">*</span> </label>
                    <input type="password" value={data.password} onChange={onChange} name="password" id="password" placeholder="itzzzyashu@idk#123" autoComplete="true" className="border-0 px-3 py-3 text-gray-700 dark:text-gray-500 placeholder-gray-400 dark:bg-gray-900 bg-white rounded text-sm shadow focus:outline-none lg:focus:border-[color:#6f00fe] lg:focus:border-b-2 w-full" required />
                  </div>
                  <div className="text-center mt-6">
                    <button type="submit" className="bg-[color:#6f00fe] text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">Login</button>
                  </div>
                  <p className='text-xs md:text-sm mt-4 text-black dark:text-white'> Don't have any account? <Link to="/account/signup" className="text-[color:#6f00fe]">Signup Here</Link>.</p>
                  <hr className="my-1 border-b-1 border-[color:#6f00fe]" />
                  <div className="text-gray-400 text-center mb-3 font-bold">
                    <small>Or Login with</small>
                  </div>
                  <div className="text-center">
                    <button className="bg-white active:bg-gray-100 text-black px-4 py-1 rounded outline-none focus:outline-none m-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button">
                      <svg className="h-5 w-5 m-1 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Github
                    </button>
                    <button className="bg-white active:bg-gray-100 text-black px-4 py-1 rounded outline-none focus:outline-none m-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button">
                      <svg className="h-5 w-5 m-1 text-gray-100" fill="currentColor" viewBox="0 0 48 48" aria-hidden="true">
                        <path fillRule="evenodd" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                      </svg>
                      Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
