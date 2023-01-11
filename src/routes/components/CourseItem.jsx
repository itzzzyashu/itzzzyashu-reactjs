import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CourseItem extends Component {
    render() {
        const { content_pic, content_url, content_title, content_description } = this.props;
        // Get current date and time when gear was published on.
        let time = new Date();
        let content_posted_minute = time.getMinutes();
        let content_posted_hour = time.getHours();
        let content_posted_date = time.getDate();
        let content_posted_month = time.getMonth() + 1;
        let content_posted_year = time.getFullYear();
        content_posted_hour = content_posted_hour > 12 ? content_posted_hour = content_posted_hour - 12 : content_posted_hour;
        let am_pm = content_posted_hour > 12 ? "PM" : "AM";
        content_posted_hour = content_posted_hour < 10 ? "0" + content_posted_hour : content_posted_hour;
        content_posted_minute = content_posted_minute < 10 ? "0" + content_posted_minute : content_posted_minute;
        content_posted_date = content_posted_date < 10 ? "0" + content_posted_date : content_posted_date;
        content_posted_month = content_posted_month < 10 ? "0" + content_posted_month : content_posted_month;

        let strdate = `${content_posted_month}/${content_posted_date}/${content_posted_year}`;
        function get_day(strdate, locale) {
            return time.toLocaleDateString(locale, { weekday: 'long' });
        }
        let content_posted_day = get_day(strdate, "en-EN");
        // let content_title_no_hyphen_in_lowecase = content_title.replace(/\s+/g, '-').toLowerCase();

        // let content_url = `./${content_posted_year}/${content_posted_month}/${content_posted_date}/${content_title_no_hyphen_in_lowecase}`;

        return (
            <>
                <div className="w-72 sm:w-80 lg:w-96 h-fit m-10 mx-10 my-10 bg-white items-start text-left rounded-xl outline-none border-none hover:scale-105 shadow-lg shadow-gray-400 transition duration-200 cursor-pointer post-title-hover-highlight">
                    <img className='w-full h-52 rounded-tr-xl rounded-tl-xl' src={content_pic} alt="Blog pic" />
                    <div className="items-start p-3">
                        <Link to={content_url}>
                            <h1 className='text-black font-bold text-xl pt-2 post-title'> {content_title} </h1>
                        </Link>
                        <p className='blog-date-time text-gray-500 text-sm mt-1 mb-1'>
                            Updated on {content_posted_day} {content_posted_date}-{content_posted_month}-{content_posted_year} / {content_posted_hour}:{content_posted_minute} {am_pm}
                        </p>
                        <p className='text-gray-700 text-sm mb-1'> {content_description}...</p>
                        <Link target="_blank" to={content_url} className='bottom-0 inline-block py-1.5 px-3 mt-2 text-sm hover:scale-105 hover:shadow-lg shadow-black font-bold rounded-lg blackish-indigo-gradient-button'> ⪼ View Item </Link>
                    </div>
                </div>
            </>
        )
    }
}