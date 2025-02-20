import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    { id: uuidv4(), title: "About Website", Comment: "Looks Good" },
    { id: uuidv4(), title: "Beautify", Comment: "Try to more improve" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, Comment } = action.payload;
      const book = state.books.find((book) => book.id === id);
      if (book) {
        book.title = title;
        book.Comment = Comment;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
