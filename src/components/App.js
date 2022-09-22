import React from "react";
import blog from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

export default  App =>
	
		<>
			<div className="App">
				<Header name={blog.name} />
				<About image={blog.image} about={blog.about} />
				<ArticleList />
			</div>
		</>
	


