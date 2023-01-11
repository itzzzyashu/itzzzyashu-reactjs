function Posted_Time() {
    const time = new Date();
    const get_current_second = time.getSeconds();
    const get_current_minute = time.getMinutes();
    const get_current_hour = time.getHours();
    const get_current_day = time.getDay();
    const get_current_date = time.getDate();
    const get_current_month = time.getMonth() + 1;
    const get_current_year = time.getFullYear();
    get_current_hour = get_current_hour > 12 ? get_current_hour = get_current_hour-12 : get_current_hour;

    const am_pm = get_current_hour > 12 ? "PM" : "AM";
    const current_hour = get_current_hour < 10 ? "0" + get_current_hour : get_current_hour;
    const current_minute = get_current_minute < 10 ? "0" + get_current_minute : get_current_minute;
    const current_second = get_current_second < 10 ? "0" + get_current_second : get_current_second;
    const current_date = get_current_date < 10 ? "0" + get_current_date : get_current_date;
    const current_month = get_current_month < 10 ? "0" + get_current_month : get_current_month;    
}
export default Posted_Time;