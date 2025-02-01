import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Footer from "../../components/Footer/Footer";
import Navbar2 from "./../../components/navbar/Navbar2";
import { addBook } from "./BooksSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [Comment, setComment] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, Comment };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };

  const handleShowComments = () => {
    navigate("/show-books");
  };

  return (
    <div>
      <Navbar2 />
      <div className="container mx-auto mb-10 mt-10 max-w-lg rounded-lg bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-purple-500">
          Add Comments
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 p-3 text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="Comment"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Comment:
            </label>
            <input
              type="text"
              id="Comment"
              name="Comment"
              value={Comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 p-3 text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Comments
          </button>
        </form>
        <div className="mt-5 flex justify-between">
          <button
            onClick={handleShowComments}
            className="mr-2 w-full animate-bounce rounded-lg bg-green-600 px-4 py-3 font-semibold text-white shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Show Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddBook;
