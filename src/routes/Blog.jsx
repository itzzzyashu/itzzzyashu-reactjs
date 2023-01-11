import React, { Component } from "react";
import BlogItem from "./components/BlogItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Blog extends Component {
  static defaultProps = {
    country: "in",
    no_of_posts: 12,
    category: "general",
    content_pic:
      "https://t4.ftcdn.net/jpg/04/25/04/31/360_F_425043151_fEW5PV5rZ5MX9LxcQd3sewzetmoooIpJ.jpg",
    content_title:
      "Real Madrid vs Barcelona Highlights: Madrid win 3-1, goals from Benzema, Valverde and Rodrygo - The Indian Express",
    content_description:
      "Real Madrid vs Barcelona Highlights: Real Madrid won the first “clásico” of the season to move three points ahead of Barcelona in the league standings",
    content_posted_on: "2022-10-16T19:40:30Z",
    content_url:
      "https://indianexpress.com/article/sports/football/real-madrid-vs-barcelona-el-clasico-live-score-streaming-8212057/",
  };

  static propTypes = {
    country: PropTypes.string,
    no_of_posts: PropTypes.number,
    category: PropTypes.string,
    content_pic: PropTypes.string,
    content_title: PropTypes.string,
    content_description: PropTypes.string,
    content_posted_on: PropTypes.string,
    content_url: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    this.props.setProgress(10);
    let api_url = `https://newsapi.org/v2/top-headlines?q=${this.props.category}&apiKey=${this.props.news_api_key}&page=${this.state.page}&pageSize=${this.props.no_of_posts}`;
    this.setState({ loading: true });
    let data = await fetch(api_url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let api_url = `https://newsapi.org/v2/top-headlines?q=${this.props.category}&apiKey=${this.props.news_api_key}&page=${this.state.page}&pageSize=${this.props.no_of_posts}`;
    this.setState({ loading: true });
    let data = await fetch(api_url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    const { url_title } = this.props;
    document.title = url_title;
    return (
      <>
        <div className="py-20 container px-2 mx-auto">
          <InfiniteScroll
            style={{height: "auto", overflow: "hidden"}}
            dataLength={this.state.articles.length}
            hasMore={this.state.articles.length < this.state.totalResults}
            next={this.fetchMoreData}
            loader={<></>}
          >
            <div className="flex flex-wrap sm:-m-4">
              {this.state.articles.map((element) => {
                return (
                  <BlogItem
                    key={element.url}
                    content_url={element.url ? element.url : "/"}
                    content_pic={element.urlToImage ? element.urlToImage : ""}
                    content_title={
                      element.title ? element.title.slice(0, 20) : ""
                    }
                    content_description={
                      element.description
                        ? element.description.slice(0, 160)
                        : ""
                    }
                    content_posted_on={element.publishedAt}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
