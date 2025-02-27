import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";

const Blogs = () => {
  const { t } = useTranslation();

  // Fetch blogs from translation JSON
  const blogData = t("home.blogPage.blogs", {
    returnObjects: true,
  });

  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <main data-aos="fade-up" data-aos-offset="200">
        <section className="container mb-10 py-8">
          <h1 className="heading mb-8 text-center text-3xl font-bold">
            {t("home.blogPage.title")}
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-slate-950"
              >
                {/* Image with Overlay */}
                <div className="relative">
                  <img
                    src={`../src/assets/${blog.image}`}
                    alt={blog.title}
                    className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-20"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between text-sm text-gray-500">
                    <p>{blog.date}</p>
                    <p>
                      {t("home.blogPage.by")} {blog.author}
                    </p>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
                    {blog.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">
                    {blog.description}
                  </p>

                  {/* Read More Button */}
                  <Link
                    to={`/blog/${blog.id}`}
                    className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:underline dark:text-blue-400"
                  >
                    {t("home.blogPage.readMore")} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blogs;
