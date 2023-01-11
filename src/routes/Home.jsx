import React, { Component } from 'react'
import UserPost from './components/UserPost';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    const { url_title, description, recommended_courses} = this.props;
    document.title = url_title;

    return (
      <>
        <section id="home">
          <div className="text-center m-auto py-2.5 md:py-6 lg:py-12 h-[90%] bg-[url(https://cdn.wallpapersafari.com/98/10/5kmO9f.png)] bg-black object-center scale-90 bg-no-repeat bg-cover bg-center">
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex flex-col justify-center px-10 m-auto">
                <h1 className="pt-5 xl:pb-10 font-bold text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2x:text-8xl cursor-default text-white"> {description} </h1>
                <div className="flex my-5 justify-center">
                  <Link to='/courses' className='lg:inline-block py-2 px-3 mx-2.5 text-sm md:text-xs lg:py-4 lg:px-6 lg:mx-5 lg:text-xl hover:shadow-xl border-l-8 border-b-2 border-white shadow-opacity-100 hover:scale-105 bg-gradient-to-bl from-transparent to-black hover:bg-opacity-40 text-white shadow-black font-bold duration-500'> Explore Courses </Link>
                  <Link to='/blog' className='lg:inline-block py-2 px-3 mx-2.5 text-sm md:text-xs lg:py-4 lg:px-6 lg:mx-5 lg:text-xl hover:shadow-xl border-r-8 border-t-2 border-white shadow-opacity-100 hover:scale-105 bg-gradient-to-tr from-transparent to-black hover:bg-opacity-40 text-white shadow-black font-bold duration-500'> Explore Blog </Link>
                </div>
              </div>
              <div className='w-[100%] md:w-[60%] lg:w-[30%] px-10 pt-5 m-auto'>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QyUyMFByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""
                  className='object-bottom  rounded-sm sm:rounded-md md:rounded-xl lg:rounded-3xl' />
              </div>
            </div>
          </div>
        </section>

        <section id="recommended">
          <div className="text-center h-[90%] py-2.5 md:py-6 lg:py-12">
            <h1 className="text-black dark:text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl cursor-default">
              Recommended Courses</h1>
            <div className="items-center sm:px-5 md:px-10 lg:px-20">
                <div className="flex flex-wrap" >
                  <UserPost content_pic={recommended_courses[0].thumbnail} content_title={recommended_courses[0].title} content_description={recommended_courses[0].description} content_url={recommended_courses[0].url} content_posted_on={recommended_courses[0].uploaded_on} />
                  <UserPost content_pic={recommended_courses[1].thumbnail} content_title={recommended_courses[1].title} content_description={recommended_courses[1].description} content_url={recommended_courses[1].url} content_posted_on={recommended_courses[1].uploaded_on} />
                  <UserPost content_pic={recommended_courses[2].thumbnail} content_title={recommended_courses[2].title} content_description={recommended_courses[2].description} content_url={recommended_courses[2].url} content_posted_on={recommended_courses[2].uploaded_on} />
                  <UserPost content_pic={recommended_courses[3].thumbnail} content_title={recommended_courses[3].title} content_description={recommended_courses[3].description} content_url={recommended_courses[3].url} content_posted_on={recommended_courses[3].uploaded_on} />
                </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <div className="text-left h-[90%] py-2.5 md:py-6 lg:py-12 max-w-[90%] m-auto">
            <h1 className="text-black dark:text-white m-10 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl cursor-default text-center">
              Testimonials</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded dark:bg-black mx-5 shadow-lg ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-8 h-8 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 dark:text-gray-300 italic">
                    I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.
                  </p>
                  <span className="inline-flex items-center top-3">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="font-semibold text-gray-900 dark:text-white">Mohit Kumar</span>
                      <span className="text-gray-500 text-sm dark:text-gray-400">Web Developer</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded dark:bg-black mx-5 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-8 h-8 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 dark:text-gray-300 italic">
                    For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.
                  </p>
                  <span className="inline-flex items-center top-3">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="font-semibold text-gray-900 dark:text-white">Rakesh Shetty</span>
                      <span className="text-gray-500 text-sm dark:text-gray-400">Web Developer</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
