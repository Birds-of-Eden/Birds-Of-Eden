import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@splidejs/react-splide/css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.jsx";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
