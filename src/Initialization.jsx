import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// Import css files
import "./assets/css/components.css";
import "./assets/css/tailwind.css";

// Utility Components
import Navbar from "./routes/components/Navbar";
import Footer from "./routes/components/Footer";
import PageNotFound from "./routes/PageNotFound";
import CourseVideo from "./routes/components/CourseVideo";

// Routes Components
import Home from "./routes/Home";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Courses from "./routes/Courses";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import SignUp from "./routes/Signup";
import DeleteAccount from "./routes/DeleteAccount";

export default class Initialization extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: Number(progress) });
  };
  render() {
    let Config = {
      website: {
        name: "itzzzyashu",
        descripion: "</codeNeverLies>",
        url: "itzzzyashu.dev",
      },
      json_data_api: {
        news_api_key: "5b625473ba9246bfb496e90c08434005",
        // news_api_key: process.env.NEWS_API_KEY,
      },
      routes: {
        home: {
          recommended_courses: [
            {
              thumbnail:
                "https://www.mytaskpanel.com/wp-content/uploads/2021/05/2021-05-14-1.webp",
              title: "Python Programming",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam pariatur laborum autem praesentium velit? Quibusdam ab numquam excepturi iste ad sed repellendus nemo? Lorem ipsum dolor sit",
              url: "/courses/python-course/Introduction-to-Python-Programming",
              uploaded_on: "2022-11-18T16:00:00Z",
            },
            {
              thumbnail:
                "https://media.istockphoto.com/id/518002738/photo/java-button-on-computer-keyboard.jpg?b=1&s=170667a&w=0&k=20&c=JLfZo-jB94h7gw6ia8SdkxzVwEHVTvnIx-S_uoYlpr4=",
              title: "Java Programming",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam pariatur laborum autem praesentium velit? Quibusdam ab numquam excepturi iste ad sed repellendus nemo? Lorem ipsum dolor sit",
              url: "/courses/java-course/Introduction-to-Java-Programming",
              uploaded_on: "2022-11-18T16:00:00Z",
            },
            {
              thumbnail:
                "https://history-computer.com/wp-content/uploads/2022/03/C-language.jpg",
              title: "C++ Programming",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam pariatur laborum autem praesentium velit? Quibusdam ab numquam excepturi iste ad sed repellendus nemo? Lorem ipsum dolor sit",
              url: "/courses/cplusplus-course/Introduction-to-Cplusplus-Programming",
              uploaded_on: "2022-11-18T16:00:00Z",
            },
            {
              thumbnail:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4khJx-_3XlrOBA4_H6x_tiWqp1BiamZRcw&usqp=CAU",
              title: "Web Development",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam pariatur laborum autem praesentium velit? Quibusdam ab numquam excepturi iste ad sed repellendus nemo? Lorem ipsum dolor sit",
              url: "/courses/html-course/Introduction-to-HTML-Programming",
              uploaded_on: "2022-11-18T16:00:00Z",
            },
          ],
        },
      },
      navitems: [
        ["Itzzzyashu", "http://localhost:5500/public/favicon/android-chrome-512x512.png"],
        ["Home", "/"],
        ["About", "about"],
        ["Blog", "blog"],
        ["Courses", "courses"],
        ["Contact", "contact"],
        ["Login", "/account/login"],
        ["SignUp", "/account/signup"],
        ["Delete Account", "/account/delete"],
        ["404 Not Found", "notfound"],
      ],
      footer: {
        auther: {
          photo: "http://localhost:5500/public/favicon/android-chrome-192x192.png",
          note: "\"You have to go the way your blood beats. If you don't live the only life you have, you won't live some other life, you won't live any life at all.\"",
        },
        social_links: {
          facebook_link: "https://www.facebook.com/itzzzyashu/",
          instagram_link: "https://www.instagram.com/itzzzyashu/",
          twitter_link: "https://www.twitter.com/itzzzyashu/",
          telegram_link: "https://telegram.me/itzzzyashu",
          messenger_link: "https://m.me/itzzzyashu/",
          github_link: "https://www.github.com/itzzzyashu/",
          tiktok_link: "https://www.tiktok.com/@itzzzyashu1/",
          linkedin_link: "https://www.linkedin.com/in/itzzzyashu/",
          quora_link: "https://www.quora.com/profile/itzzzyashu/",
          reddit_link: "https://www.reddit.com/user/Itzzzyashu/",
          snapchat_link: "https://www.snapchat.com/add/itzzzyashu/",
          youtube_link: "https://www.youtube.com/channel/UC64MxAX6jr2dgNU-VlPghQg/",
          pinterest_link: "https://in.pinterest.com/aleciento/",
        },
        footer_links: [
          ["NavLinks",
            ["Home", "./"],
            ["About", "./about"],
            ["Blog", "./blog"],
            ["Courses", "./courses"],
            ["Contact", "./contact"],
          ],
          ["Most Active on",
            ["Telegram", "https://telegram.me/itzzzyashu/"],
            ["Instagram", "https://www.instagram.com/itzzzyashu/"],
            ["Psychology", "./interests/psychology"],
            ["Spirituality", "./interests/spirituality"],
            ["Sometimes Nowhere", "./interests/sometimes-nowhere"],
          ],
          ["Main Focus",
            ["Humanity", "./main-focus/explore/humanity"],
            ["Science", "./main-focus/learn/science"],
            ["Programming", "./main-focus/learn/programming"],
            ["Introversion", "./main-focus/learn/introversion"],
            ["Social Helping", "./main-focus/explore/social-helping"],
          ],
          ["Other Links",
            ["Roadmap", "/roadmap"],
            ["Privacy Policy", "/privacy-policy"],
            ["User Policy", "/user-policy"],
            ["Instructions", "/instructions"],
            ["Terms & Condition", "/terms-and-conditions"],
          ],
        ],
      },
    };
    return (
      <>
        <Router basename="/">
          <LoadingBar
            height={3}
            color=""
            className="bg-gradient-to-r from-white via-indigo-600 to-[color:#6f00fe]"
            progress={this.state.progress}
          />

          <Navbar navlinks={Config.navitems} logo_title={Config.website.name} website_url={Config.website.url} />
          <div className="bg-white dark:bg-[#151515] text-black dark:text-white">
            <Routes>
              <Route
                exact
                path={Config.navitems[1][1]}
                element={
                  <Home
                    title={Config.navitems[1][0]}
                    url_title={
                      Config.navitems[1][0] + " • " + Config.website.name
                    }
                    description={Config.website.descripion}
                    setProgress={this.setProgress}
                    recommended_courses={Config.routes.home.recommended_courses}
                  />
                }
              ></Route>
              <Route
                exact
                path={Config.navitems[2][1]}
                element={
                  <About
                    title={Config.navitems[2][0]}
                    url_title={
                      Config.navitems[2][0] + " • " + Config.website.name
                    }
                    setProgress={this.setProgress}
                  />
                }
              ></Route>
              <Route
                exact
                path={Config.navitems[3][1]}
                element={
                  <Blog
                    title={Config.navitems[3][0]}
                    url_title={
                      Config.navitems[3][0] + " • " + Config.website.name
                    }
                    category="sports"
                    country="in"
                    no_of_posts={20}
                    news_api_key={Config.json_data_api.news_api_key}
                    setProgress={this.setProgress}
                  />
                }
              ></Route>
              <Route
                exact
                path={Config.navitems[4][1]}
                element={
                  <Courses
                    title={Config.navitems[4][0]}
                    url_title={
                      Config.navitems[4][0] + " • " + Config.website.name
                    }
                    setProgress={this.setProgress}
                  />
                }
              ></Route>
              <Route
                exact
                path={Config.navitems[5][1]}
                element={
                  <Contact
                    title={Config.navitems[5][0]}
                    url_title={
                      Config.navitems[5][0] + " • " + Config.website.name
                    }
                    setProgress={this.setProgress}
                  />
                }
              ></Route>
              <Route
                exact
                path={Config.navitems[6][1]}
                element={
                  <Login
                    title={Config.navitems[6][0]}
                    url_title={
                      Config.navitems[6][0] + " • " + Config.website.name
                    }
                    setProgress={this.setProgress}
                  />
                }
              ></Route>
              <Route
                exact
                path={Config.navitems[7][1]}
                element={
                  <SignUp
                    title={Config.navitems[7][0]}
                    url_title={
                      Config.navitems[7][0] + " • " + Config.website.name
                    }
                    setProgress={this.setProgress}
                  />
                }
              ></Route>
              <Route
                exact
                path={Config.navitems[8][1]}
                element={
                  <DeleteAccount
                    title={Config.navitems[8][0]}
                    url_title={
                      Config.navitems[8][0] + " • " + Config.website.name
                    }
                    setProgress={this.setProgress}
                  />
                }
              ></Route>
              <Route
                exact
                path={Config.navitems[9][1]}
                element={
                  <PageNotFound
                    title={Config.navitems[9][0]}
                    url_title={
                      Config.navitems[9][0] + " • " + Config.website.name
                    }
                    setProgress={this.setProgress}
                  />
                }
              ></Route>
              <Route exact path="/course-name/course-video" element= {<CourseVideo />} ></Route>
            </Routes>
          </div>

          <Footer
            website_url={Config.website.url}
            owner_photo={Config.footer.auther.photo}
            owner_note={Config.footer.auther.note}
            social_links={Config.footer.social_links}
            footer_links={Config.footer.footer_links}
          />
        </Router>
      </>
    );
  }
}
