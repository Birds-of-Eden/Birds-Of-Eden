// src/pages/BlogsPage.jsx
import React from "react";

import blog1 from "./../assets/blog1.jpg";
import blog2 from "./../assets/blog2.jpg";
import blog3 from "./../assets/blog3.jpg";
import BlogsList from "./../components/Blogs/BlogsList";

const blogsData = [
  {
    title: "Blog Post 1",
    summary: "This is a summary of blog post 1.",
    image: blog1,
    date: "April 24, 2022",
    author: "Zulfiker",
  },
  {
    title: "Blog Post 2",
    summary: "This is a summary of blog post 2.",
    image: blog2,
    date: "Jan 3, 2023",
    author: "Zisan",
  },
  {
    title: "Blog Post 3",
    summary: "This is a summary of blog post 3.",
    image: blog3,
    date: "April 24, 2024",
    author: "Md. Hossain",
  },
  // Add more blog posts here
];

const BlogsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow bg-gray-100 py-10 dark:bg-slate-800">
        <div className="container mx-auto">
          <h1 className="heading">Blogs</h1>
          <BlogsList blogs={blogsData} />
        </div>
      </main>
    </div>
  );
};

export default BlogsPage;
