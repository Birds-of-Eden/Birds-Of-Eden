import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar2 from "../../components/navbar/Navbar2";
import Footer from "./../../components/Footer/Footer";
import { updateBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [Comment, setComment] = useState(location.state.Comment);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, Comment }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <Navbar2 />
      <div className="container mx-auto mb-10 mt-10 max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Edit Comments</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
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
              className="block text-sm font-medium text-gray-700"
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
            Update Comment
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditBook;
