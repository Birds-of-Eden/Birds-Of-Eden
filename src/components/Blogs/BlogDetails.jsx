import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../../data/blogData"; // Importing blog data

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h1 className="text-center text-xl font-bold">Blog Not Found</h1>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mx-auto max-w-4xl">
        <img
          src={blog.image}
          alt="Blog Cover"
          className="h-[400px] w-full rounded-lg object-cover"
        />
        <h1 className="mt-6 text-3xl font-bold">{blog.title}</h1>
        <p className="mt-2 text-gray-600">
          {blog.date} | By {blog.author}
        </p>
        <p className="mt-6 text-lg">{blog.content}</p>
        <Link
          to="/blogs"
          className="mt-6 inline-block text-blue-500 hover:underline"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
