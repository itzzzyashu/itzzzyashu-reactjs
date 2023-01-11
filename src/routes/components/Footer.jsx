import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/components.css'
import '../../assets/css/tailwind.css'

export default class Footer extends Component {
  render() {
    const {
      owner_photo,
      owner_note,
      website_url,
      social_links,
      footer_links
    } = this.props;

    return (
      <>
        <footer aria-label="Site Footer" className="w-full relative bottom-0 z-10 bg-[#dec5ff] dark:bg-black">
          <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div>
                <div className="sm:flex">
                  <Link to='./' className='p-1 rounded-full bg-gradient-to-tr from-red-500 via-[#6f00fe] to to-blue-500'>
                    <img className="sm:block lg:hidden xl:block h-40 w-40 mx-auto rounded-full bg-gray-200 object-cover object-top" src={owner_photo} alt='' />
                  </Link>
                  <div className="px-5 py-3 sm:flex-1">
                    <div className="md:mt-0 flex-1 text-gray-500 dark:text-gray-300">
                      <div className="flex justify-center sm:justify-start lg:justify-center">
                        <a className="hover:opacity-75" href={social_links.facebook_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-facebook m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.instagram_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-instagram m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.twitter_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-twitter m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.telegram_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-telegram m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.messenger_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-facebook-messenger m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.quora_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-quora m-1 text-gray-600"></i>
                        </a>
                      </div>
                      <div className="flex justify-center sm:justify-start lg:justify-center">
                        <a className="hover:opacity-75" href={social_links.tiktok_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-tiktok m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.reddit_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-reddit m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.snapchat_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-snapchat m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.youtube_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-youtube m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.pinterest_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-pinterest m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.github_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-github m-1 text-gray-600"></i>
                        </a>
                        <a className="hover:opacity-75" href={social_links.linkedin_link} target="_blank" rel="noreferrer">
                          <i className="fa-brands fa-linkedin m-1 text-gray-600"></i>
                        </a>
                      </div>
                      <div className="flex justify-center sm:justify-start lg:justify-center">
                      </div>
                    </div>
                    <p className="mt-4 max-w-xs text-sm m-auto sm:mx-0 text-center lg:text-center sm:text-left text-gray-500"> {owner_note} </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                <div>
                  <p className="inline-block font-bold text-black dark:text-white indigo-underline"> {footer_links[0][0]} </p>
                  <nav className="pb-2 mt-2 lg:mt-3 flex flex-col space-y-2 text-sm text-gray-500">
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[0][1][1]}> {footer_links[0][1][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[0][2][1]}> {footer_links[0][2][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[0][3][1]}> {footer_links[0][3][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[0][4][1]}> {footer_links[0][4][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[0][5][1]}> {footer_links[0][5][0]} </Link>
                  </nav>
                </div>
                <div>
                  <p className="inline-block font-bold text-black dark:text-white indigo-underline"> {footer_links[1][0]} </p>
                  <nav className="pb-2 mt-2 lg:mt-3 flex flex-col space-y-2 text-sm text-gray-500">
                    <a target='_blank' rel='noreferrer' className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" href={footer_links[1][1][1]}> {footer_links[1][1][0]} </a>
                    <a target='_blank' rel='noreferrer' className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" href={footer_links[1][2][1]}> {footer_links[1][2][0]} </a>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[1][3][1]}> {footer_links[1][3][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[1][4][1]}> {footer_links[1][4][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[1][5][1]}> {footer_links[1][5][0]} </Link>
                  </nav>
                </div>
                <div>
                  <p className="inline-block font-bold text-black dark:text-white indigo-underline"> {footer_links[2][0]} </p>
                  <nav className="pb-2 mt-2 lg:mt-3 flex flex-col space-y-2 text-sm text-gray-500">
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[2][1][1]}> {footer_links[2][1][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[2][2][1]}> {footer_links[2][2][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[2][3][1]}> {footer_links[2][3][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[2][4][1]}> {footer_links[2][4][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[2][5][1]}> {footer_links[2][5][0]} </Link>
                  </nav>
                </div>
                <div>
                  <p className="inline-block font-bold text-black dark:text-white indigo-underline"> {footer_links[3][0]} </p>
                  <nav className="pb-2 mt-2 lg:mt-3 flex flex-col space-y-2 text-sm text-gray-500">
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[3][1][1]}> {footer_links[3][1][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[3][2][1]}> {footer_links[3][2][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[3][3][1]}> {footer_links[3][3][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[3][4][1]}> {footer_links[3][4][0]} </Link>
                    <Link className="w-[75%] hover:opacity-75 hover:text-black hover:font-bold dark:hover:text-gray-300 hover:scale-105 duration-200" to={footer_links[3][5][1]}> {footer_links[3][5][0]} </Link>
                  </nav>
                </div>
              </div>
            </div>
            <hr className='mt-5 border-gray-500 dark:border-gray-700' />
            <p className="my-4 text-xs text-gray-400 flex flex-col md:flex-row">
             <span>Copyright © {new Date().getFullYear()} • <Link to={website_url} className='text-green-500'>{website_url}</Link>, &nbsp;</span>
             <span>All rights reserved.</span>
            </p>
          </div>
        </footer>
      </>
    )
  }
}
