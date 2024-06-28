import React from "react";
import Blog from "./Blog.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AddMessages from "./AddMessages.jsx";
import Show from "./Show.jsx";
import Edit from "./Edit.jsx";
import Header from "./Header.jsx";
import NotFound from "./NotFound.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />}></Route>
     <Route path="/blog" element={<Blog/>}></Route>
     <Route path="/message" element={<AddMessages/>}></Route>
      <Route path="/show" element={<Show />}></Route>
      <Route path="/edit/:idToEdit" element={<Edit />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
