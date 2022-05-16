import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "components/Loading/Loading";

// components
const Wall = React.lazy(() => import("pages/Wall/Wall"));
const Home = React.lazy(() => import("pages/Home/Home"));
const NotFound = React.lazy(() => import("pages/NotFound/NotFound"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/wall"
          element={
            <React.Suspense fallback={<Loading />}>
              <Wall />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading />}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
