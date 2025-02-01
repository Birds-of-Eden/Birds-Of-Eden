// src/components/Blogs/BlogsList.jsx
import React from "react";
import BlogCard from "./BlogCard";

const BlogsList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 ">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          summary={blog.summary}
          image={blog.image}
          date={blog.date}
          author={blog.author}
        />
      ))}
    </div>
  );
};

export default BlogsList;
