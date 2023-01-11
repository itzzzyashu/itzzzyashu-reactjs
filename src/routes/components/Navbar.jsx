import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const
      { 
        website_url,
        logo_title,
        navlinks
      } = this.props;

    // Log out the user
    const Logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('User Email');
      window.location.reload(false);
    }

    // Set theme From location storage.
    // Save it to location storage.
    let darkMode = localStorage.getItem("dark-mode");

    const enableDarkMode = () => {
      document.body.classList.add("dark");
      localStorage.setItem("dark-mode", "enabled");
    };

    const disableDarkMode = () => {
      document.body.classList.remove("dark");
      localStorage.setItem("dark-mode", "disabled");
    };

    if (darkMode === "enabled") {
      enableDarkMode(); // set state of darkMode on page load
    }

    const toggle = () => {
      darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
      const themebtnpc = document.getElementById('theme-toggle-pc');
      const themebtnmob = document.getElementById('theme-toggle-mob');

      if (darkMode === "disabled") {
        enableDarkMode();
        themebtnpc.innerHTML = '☀'
        themebtnmob.innerHTML = '☀'
      }
      else if (!darkMode) {
        enableDarkMode();
      }
      else {
        disableDarkMode();
        themebtnpc.innerHTML = '<i class="fa-sharp fa-solid fa-moon"></i>';
        themebtnmob.innerHTML = '<i class="fa-sharp fa-solid fa-moon"></i>';
      }
    };

    function show_hamburger_nav() {
      document.getElementById('nav-menu').classList.remove('hidden')
    }

    function hide_hamburger_nav() {
      document.getElementById('nav-menu').classList.add('hidden')
    }

    return (
      <>
        {/* Nav-burgur configuration
        id="navbar-menu-open" => htmlFor="navbar-menu-open" 
        id="navbar-menu-close => htmlFor="navbar-menu-close"
        */}

        <nav id="navbar" className='sticky top-0 z-20'>
          <div className="sticky p-2 flex justify-between items-center bg-[#f1e7ff] dark:bg-black shadow-lg dark:shadow-black">
            <Link className="font-bold flex leading-none" to="/">
              <img className='mx-5 rounded-full w-10 h-10 object-cover object-top' src={`${navlinks[0][1]}`} alt="Logo" />
              <h1 className="text-[color:#6f00fe] dark:text-white date-time-font items-center text-xl lg:text-3xl">{logo_title}</h1>
            </Link>
            <button id='theme-toggle-pc' onClick={toggle} title='Toggle Theme' className="px-2 mx-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white hidden lg:block text-xl">
              <i className="fa-sharp fa-solid fa-moon"></i>
            </button>
            <ul className="hidden absolute top-1/2 lg:left-1/2 lg:mx-auto transform -translate-y-1/2 -translate-x-1/2 lg:flex xl:items-center lg:w-auto lg:space-x-4">
              <li><Link className="nav text-sm shadow-sm text-gray-400 hover:[border-color:#6f00fe] hover:text-gray-900 dark:hover:text-gray-100 duration-500" to={navlinks[1][1]}>{navlinks[1][0]}</Link></li>
              <li><Link className="nav text-sm shadow-sm text-gray-400 hover:[border-color:#6f00fe] hover:text-gray-900 dark:hover:text-gray-100 duration-500" to={navlinks[2][1]}>{navlinks[2][0]}</Link></li>
              <li><Link className="nav text-sm shadow-sm text-gray-400 hover:[border-color:#6f00fe] hover:text-gray-900 dark:hover:text-gray-100 duration-500" to={navlinks[3][1]}>{navlinks[3][0]}</Link></li>
              <li><Link className="nav text-sm shadow-sm text-gray-400 hover:[border-color:#6f00fe] hover:text-gray-900 dark:hover:text-gray-100 duration-500" to={navlinks[4][1]}>{navlinks[4][0]}</Link></li>
              <li><Link className="nav text-sm shadow-sm text-gray-400 hover:[border-color:#6f00fe] hover:text-gray-900 dark:hover:text-gray-100 duration-500" to={navlinks[5][1]}>{navlinks[5][0]}</Link></li>
            </ul>
            <div className="lg:hidden">
              <button onClick={show_hamburger_nav} className="flex items-center text-[color:#6f00fe] p-3 cursor-pointer">
                <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            {
              !localStorage.getItem('token') ?
                <div className='hidden lg:ml-auto mr-5 lg:inline-block'>
                  <Link className="lg:mr-3 lg:ml-auto py-2 px-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 text-sm font-bold rounded-md transition duration-200" to={navlinks[6][1]}>{navlinks[6][0]}</Link>
                  <Link className="py-2 px-6 text-sm font-bold rounded-md blackish-indigo-gradient-button" to={navlinks[7][1]}>{navlinks[7][0]}</Link>
                </div> :
                <div className="hidden lg:ml-auto lg:inline-block">
                  <button className="py-2 px-4 mr-5 text-sm text-black dark:text-white font-bold border-b-2 border-[#6f00fe] hover:mr-0 duration-300" type="submit" onClick={Logout}>Logout</button>
                </div>
            }
          </div>
          <div id='nav-menu' className="hidden relative z-50 w-full">
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm border-r overflow-y-auto bg-white dark:bg-black">
              <div className="flex px-2 py-1">
                <Link className="mr-auto text-2xl items-center font-bold leading-none flex" to={navlinks[0][1]}>
                  <img className='mx-5 rounded-full' src="./favicon/favicon-32x32.png" alt="" />
                  <h1 className="text-[color:#6f00fe] dark:text-white date-time-font text-xl lg:text-3xl">Itzzzyashu</h1>
                </Link>
                <button id='theme-toggle-mob' onClick={toggle} title='Toggle Theme' className="ml-2 my-2 px-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white lg:hidden block text-xl ">
                  <i className="fa-sharp fa-solid fa-moon"></i>
                </button>
                <button onClick={hide_hamburger_nav} className="p-3">
                  <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className='p-2'>
                <ul>
                  <li className="mb-1"><Link className="block p-2 text-sm font-semibold text-gray-400 hover:bg-gray-100 hover:text-[color:#6f00fe] dark:hover:bg-gray-900 dark:hover:text-gray-100 duration-1000 rounded" to={navlinks[1][1]}>{navlinks[1][0]}</Link></li>
                  <li className="mb-1"><Link className="block p-2 text-sm font-semibold text-gray-400 hover:bg-gray-100 hover:text-[color:#6f00fe] dark:hover:bg-gray-900 dark:hover:text-gray-100 duration-1000 rounded" to={navlinks[2][1]}>{navlinks[2][0]}</Link></li>
                  <li className="mb-1"><Link className="block p-2 text-sm font-semibold text-gray-400 hover:bg-gray-100 hover:text-[color:#6f00fe] dark:hover:bg-gray-900 dark:hover:text-gray-100 duration-1000 rounded" to={navlinks[3][1]}>{navlinks[3][0]}</Link></li>
                  <li className="mb-1"><Link className="block p-2 text-sm font-semibold text-gray-400 hover:bg-gray-100 hover:text-[color:#6f00fe] dark:hover:bg-gray-900 dark:hover:text-gray-100 duration-1000 rounded" to={navlinks[4][1]}>{navlinks[4][0]}</Link></li>
                  <li className="mb-1"><Link className="block p-2 text-sm font-semibold text-gray-400 hover:bg-gray-100 hover:text-[color:#6f00fe] dark:hover:bg-gray-900 dark:hover:text-gray-100 duration-1000 rounded" to={navlinks[5][1]}>{navlinks[5][0]}</Link></li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="pt-6">
                  {
                    !localStorage.getItem('token') ?
                      <div className='flex'>
                        <Link className="block px-4 py-2 mb-2 mx-2 leading-loose text-xs text-center font-semibold bg-gray-200 dark:bg-gray-600 text-black dark:text-gray-100 rounded-xl" to={navlinks[6][1]}>{navlinks[6][0]}</Link>
                        <Link className="block px-4 py-2 mb-2 mx-2 leading-loose text-xs text-center font-semibold rounded-xl blackish-indigo-gradient-button" to={navlinks[7][1]}>{navlinks[7][0]}</Link>
                      </div> :
                      <div className="flex">
                        <button onClick={Logout} className="block px-4 py-2 mb-2 mx-2 leading-loose text-xs text-center font-semibold rounded-xl blackish-indigo-gradient-button">Logout</button>
                        <Link className='block px-4 py-2 mb-2 mx-2 leading-loose text-xs text-center font-bold rounded-xl bg-red-500 text-white' to={navlinks[8][1]}>{navlinks[8][0]}</Link>
                      </div>
                  }
                </div>
                <p className="my-4 text-xs text-center text-gray-400">
                  <span>Copyright © {new Date().getFullYear()} • <Link to={website_url} className='text-green-500'>{website_url}</Link> </span><br />All rights reserved.
                </p>
              </div>
            </nav>
          </div>
        </nav>
      </>
    );

  }
}

