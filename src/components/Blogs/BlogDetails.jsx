import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

const BlogDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation(); // Initialize useTranslation

  // Assuming you have blogData available in your translations or from an external source
  const blogData = t("home.blogPage.blogs", { returnObjects: true });

  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <h1 className="text-center text-xl font-bold">
        {t("blogDetails.notFound")}
      </h1>
    ); // Use translation for "Blog Not Found"
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mx-auto max-w-4xl">
        <img
          src={`/assets/${blog.image}`}
          alt={blog.title}
          className="h-[400px] w-full rounded-lg object-cover"
        />
        <h1 className="mt-6 text-3xl font-bold">{blog.title}</h1>
        <p className="mt-2 text-gray-600">
          {blog.date} | {t("home.blogPage.by")} {blog.author}{" "}
          {/* Use translation for "By" */}
        </p>
        <p className="mt-6 text-lg">{blog.description}</p>{" "}
        {/* using description instead of content, change to content if you intended to use content*/}
        <Link
          to="/blogs"
          className="link boxshadow mt-6 inline-block text-blue-500 hover:underline"
        >
          {t("home.erpProjects.button")}

          {/* Use translation for "Back to Blogs" */}
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
