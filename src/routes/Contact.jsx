import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    if (!localStorage.getItem('token')) {
        document.location.pathname = '/'
        // alert("To send a message you need to login first");
      }
    const [data, setData] = useState({ name: "", age: "", email: "", phone: "", message: "" })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    return (<>
        <div className="w-full h-full px-4 py-10">
            <div className="container px-4 m-auto">
                <div className="items-center justify-center content-center h-full">
                    <div className="w-full">
                        <div className="w-full px-4">
                            <div className="relative min-w-0 break-words flex flex-row w-full my-6 shadow-lg rounded-lg border-0 ">
                                <img className="object-cover w-3/4.5 hidden xl:inline-block bg-black" src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="img" width={900} height={1600} />
                                <div className="flex flex-col flex-auto bg-white dark:bg-gray-900">
                                    <div className="rounded-t mb-0 px-6 py-6">
                                        <div className="text-center mb-3">
                                            <h1 className="text-black dark:text-white text-xl lg:text-3xl font-bold"> Let&acute;s start Talking </h1>
                                        </div>
                                    </div>
                                    <div className="flex-auto px-4 sm:px-10 md:px-20 lg:px-10 py-10 pt-0">
                                        <form>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-[color:#6f00fe] dark:text-white text-xs font-bold mb-2" htmlFor="name">
                                                    <i className="fa-solid fa-user"></i> Name <span className="text-red-500 font-bold">*</span> </label>
                                                <input type="text" name="name" id="name" onChange={onChange} value={data.name} placeholder="Yash" className="border-0 px-3 py-3 text-gray-700 dark:text-gray-500 placeholder-gray-400 dark:bg-gray-900 bg-white text-sm shadow focus:outline-none lg:focus:border-[color:#6f00fe] lg:focus:border-b-2 w-full rounded-none" required />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-[color:#6f00fe] dark:text-white text-xs font-bold mb-2" htmlFor="age">
                                                    <i className="fa-solid fa-at"></i> Age <span className="text-red-500 font-bold">*</span> </label>
                                                <input type="number" name="age" id="age" onChange={onChange} value={data.age} placeholder="24" className="border-0 px-3 py-3 text-gray-700 dark:text-gray-500 placeholder-gray-400 dark:bg-gray-900 bg-white text-sm shadow focus:outline-none lg:focus:border-[color:#6f00fe] lg:focus:border-b-2 w-full rounded-none" required />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-[color:#6f00fe] dark:text-white text-xs font-bold mb-2" htmlFor="email">
                                                    <i className="fa-solid fa-envelope-circle-check"></i> Email <span className="text-red-500 font-bold">*</span> </label>
                                                <input type="email" name="email" id="email" onChange={onChange} value={data.email} placeholder="yash@itzzzyashu.dev" className="border-0 px-3 py-3 text-gray-700 dark:text-gray-500 placeholder-gray-400 dark:bg-gray-900 bg-white text-sm shadow focus:outline-none lg:focus:border-[color:#6f00fe] lg:focus:border-b-2 w-full rounded-none" required />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-[color:#6f00fe] dark:text-white text-xs font-bold mb-2" htmlFor="phone">
                                                    <i className="fa-solid fa-envelope-circle-check"></i> Phone Number <span className="text-red-500 font-bold">*</span> </label>
                                                <input type="phone" name="phone" id="phone" onChange={onChange} value={data.phone} placeholder="+1 345 565 6754" className="border-0 px-3 py-3 text-gray-700 dark:text-gray-500 placeholder-gray-400 dark:bg-gray-900 bg-white text-sm shadow focus:outline-none lg:focus:border-[color:#6f00fe] lg:focus:border-b-2 w-full rounded-none" required />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-[color:#6f00fe] dark:text-white text-xs font-bold mb-2" htmlFor="message">
                                                    <i className="fa-solid fa-earth-asia"></i> Enter your Message </label>
                                                <textarea type="text" name="message" id="message" onChange={onChange} value={data.message} placeholder="Hello, I'm yash, 17 y/o, from India." className="border-0 px-3 py-3 text-gray-700 dark:text-gray-500 placeholder-gray-400 dark:bg-gray-900 bg-white text-sm shadow focus:outline-none lg:focus:border-[color:#6f00fe] lg:focus:border-b-2 w-full rounded-none" />
                                            </div>

                                            <div className="text-center my-6">
                                                <button type="submit" className="bg-[color:#6f00fe] text-white active:bg-gray-700 text-sm lg:text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full mr-1 mb-1"> Send Message </button>
                                            </div>
                                            <p className='text-xs md:text-sm mt-4 text-black dark:text-white'> You can Email me on itzzzyashu@gmail.com </p>
                                            <hr className="my-1 border-b-1 border-[color:#6f00fe]" />
                                            <div className="text-gray-400 text-center mb-3 font-bold">
                                                <small>I&apos;m most active on</small>
                                            </div>
                                            <div className="text-center">
                                                <Link href="https://telegram.me/itzzzyashu" className="bg-white active:bg-gray-100 text-black px-3 py-1 rounded outline-none focus:outline-none m-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button">
                                                    <svg className="h-5 w-5 m-1 text-blue-500" fill="currentColor" viewBox="0 0 496 512">
                                                        <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
                                                    </svg>
                                                    Telegram
                                                </Link>
                                                <Link href="https://www.instagram.com/itzzzyashu" className="bg-white active:bg-gray-100 text-black px-3 py-1 rounded outline-none focus:outline-none m-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button">
                                                    <svg className="h-5 w-5 m-1 text-[#6f00fe]" fill="currentColor" viewBox="0 0 448 512">
                                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                                    </svg>
                                                    Instagram
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Contact;