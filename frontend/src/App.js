import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./pages/styles.css";

import Loader from "./pages/Loader";
import Navbar from "./pages/Navbar";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatHome from "./pages/ChatHome";
import AdminDashboard from "./pages/AdminDashboard";
import UserProfile from "./pages/UserProfile";
import History from "./pages/History";
import { Suspense } from "react";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <Suspense
        fallback={
          <div className="no-response-container">
            <Loader />
          </div>
        }
      ></Suspense>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<ChatHome />} />
              <Route path="history" element={<History />} />
              <Route path="admin-pannel" element={<AdminDashboard />} />
              <Route path="user-profile/:id" element={<UserProfile />} />
              <Route path="login" element={<Login />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
