import React, { Component } from 'react'

export default class About extends Component {
  render() {
    const {title, url_title, setProgress} = this.props;
    document.title = url_title;
    return (
      <>
        <div className="text-center items-center gap-4 flex flex-col">
          <h1 className="font-bold text-xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl cursor-default">{title}</h1>
          <button onClick={()=> {setProgress(10)}}>10</button>
          <button onClick={()=> {setProgress(70)}}>70</button>
          <button onClick={()=> {setProgress(100)}}>100</button>
        </div>
      </>
    )
  } 
}
