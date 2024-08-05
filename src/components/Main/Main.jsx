import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Card from "./Card";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <h1 className="blogtitle">Blogs</h1>
          <div className="search-box"><img src="search-icon.png" className="searchIcon"/>
          <input type="search" placeholder="Search blogs" className="search-input" />
          </div>
        </div>
        <div className="header-right">
          <img src="editpic.png"className="imgpic"/>
          <img src="savepic.png"className="imgpic"/>
          <img src="propic.png" className="imgpic"/>
        </div>
      </header>
      <div className="border"></div>
      <div className="container">
        <h1 className="descripton-header text-xl">
          Explore our latest articles, guides, and insights on a variety of topics to stay informed and inspired
        </h1>
        <div className="blog-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <img src="Vector 2.png" alt="Vector" className="footer-img" />
    </div>
  );
}

export default Main;
