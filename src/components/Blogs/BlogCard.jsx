// src/components/Blogs/BlogCard.jsx
import React from "react";

const BlogCard = ({ title, summary, image, date, author }) => {
  return (
    <div className="mx-auto my-4 max-w-md overflow-hidden rounded-xl bg-white shadow-md dark:bg-slate-700 md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-8">
          <h2 className="mt-1 block text-lg font-medium leading-tight text-black dark:text-white">
            {title}
          </h2>
          <p className="mt-2 text-gray-500 dark:text-white">{summary}</p>
          <div className="mt-4 text-gray-400 dark:text-white">
            <p>{date}</p>
            <p>By {author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
