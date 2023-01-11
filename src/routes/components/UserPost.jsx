import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/components.css";
import "../../assets/css/tailwind.css";

export default class UserPost extends Component {
  render() {
    const {
      content_pic,
      content_url,
      content_title,
      content_description,
      content_posted_on,
    } = this.props;
    // Get current date and time when blog was published on.
    let time = new Date(content_posted_on);
    let content_posted_minute = time.getMinutes();
    let content_posted_hour = time.getHours();
    let content_posted_date = time.getDate();
    let content_posted_month = time.getMonth() + 1;
    let content_posted_year = time.getFullYear();
    content_posted_hour =
      content_posted_hour > 12
        ? (content_posted_hour = content_posted_hour - 12)
        : content_posted_hour;
    let am_pm = content_posted_hour > 12 ? "PM" : "AM";
    content_posted_hour =
      content_posted_hour < 10
        ? "0" + content_posted_hour
        : content_posted_hour;
    content_posted_minute =
      content_posted_minute < 10
        ? "0" + content_posted_minute
        : content_posted_minute;
    content_posted_date =
      content_posted_date < 10
        ? "0" + content_posted_date
        : content_posted_date;
    content_posted_month =
      content_posted_month < 10
        ? "0" + content_posted_month
        : content_posted_month;
    let strdate = `${content_posted_month}/${content_posted_date}/${content_posted_year}`;
    function get_day(strdate, locale) {
      return time.toLocaleDateString(locale, { weekday: "long" });
    }
    let content_posted_day = get_day(strdate, "en-EN");
    // let content_title_no_hyphen_in_lowecase = content_title.replace(/\s+/g, '-').toLowerCase();

    // let content_url = `./${content_posted_year}/${content_posted_month}/${content_posted_date}/${content_title_no_hyphen_in_lowecase}`;

    return (
      <>
        <div className="h-[24rem] flex flex-col justify-between sm:w-1/2 md:w-1/3 lg:w-1/4 pb-1 p-4 my-4 rounded-xl bg-transparent transition">
          <img className="h-52 object-cover rounded-xl hover:object-center duration-200" src={content_pic} alt="Blog pic" />
          <div className="items-start p-1 text-left">
            <Link rel="noreferrer" to={content_url}>
              <h1 className="text-black dark:text-white font-bold text-lg pt-2 post-title selection:bg-gray-200 dark:selection:bg-gray-900"> {content_title} </h1>
            </Link>
            <p className="text-gray-400 text-xs mt-1 mb-1 selection:bg-gray-200 dark:selection:bg-gray-900">
              Updated on <span className="post-date-font"> {content_posted_day} {content_posted_date}- {content_posted_month}-{content_posted_year} / {content_posted_hour}:{content_posted_minute} {am_pm} </span>
            </p>
            <p className="text-gray-700 dark:text-gray-500 text-sm selection:bg-gray-200 dark:selection:bg-gray-900">{content_description}...</p>
            <Link rel="noreferrer" to={content_url} className="py-1 inline-flex w-fit cursor-pointer text-sm bg-transparent font-bold hover:ml-3 duration-200"> ⪼ View</Link>
          </div>
        </div>
      </>
    );
  }
}
