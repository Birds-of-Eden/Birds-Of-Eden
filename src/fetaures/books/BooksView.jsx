import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar2 from "./../../components/navbar/Navbar2";
import { deleteBook } from "./BooksSlice";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <Navbar2 />
      <div className="container mx-auto mb-10 mt-10 max-w-6xl rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          List of Comments
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white text-gray-800">
            <thead>
              <tr>
                <th className="border-b px-6 py-4 text-left text-sm font-semibold">
                  Title
                </th>
                <th className="border-b px-6 py-4 text-left text-sm font-semibold">
                  Comment
                </th>
                <th className="border-b px-6 py-4 text-left text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((book) => {
                  const { id, title, Comment } = book;
                  return (
                    <tr key={id} className="border-b">
                      <td className="px-6 py-4">{title}</td>
                      <td className="px-6 py-4">{Comment}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-2">
                          <Link to="/edit-book" state={{ id, title, Comment }}>
                            <button className="animate-pulse rounded-lg bg-yellow-500 px-4 py-2 text-white shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                              Edit
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDeleteBook(id)}
                            className="animate-pulse rounded-lg bg-red-500 px-4 py-2 text-white shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BooksView;
