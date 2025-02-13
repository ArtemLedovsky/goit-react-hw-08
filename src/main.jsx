import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import "modern-normalize";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster position="bottom-right" reverseOrder={false} />
    </Provider>
  </BrowserRouter>
);
