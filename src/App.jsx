import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/loading/Loading";
import Courses from "./pages/courses/Courses";
import CourseDescription from "./pages/coursedescription/CourseDescription";
import PaymentSuccess from "./pages/paymentsuccess/PaymentSuccess";
import Dashboard from "./pages/dashboard/Dashboard";
import CourseStudy from "./pages/coursestudy/CourseStudy";
import Lecture from "./pages/lecture/Lecture";
import AdminDashboard from "./admin/Dashboard/AdminDashboard";
import AdminCourses from "./admin/Courses/AdminCourses";
import AdminUsers from "./admin/Users/AdminUsers";
const App = () => {
  const { isAuth, user, loading } = UserData();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header isAuth={isAuth} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />
            <Route
              path="/login"
              element={isAuth ? <Home /> : <Login />}
            ></Route>
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            ></Route>
            <Route
              path="/verify"
              element={isAuth ? <Home /> : <Verify />}
            ></Route>

            <Route
              path="/course/:id"
              element={isAuth ? <CourseDescription user={user} /> : <Login />}
            ></Route>
            <Route
              path="/payment-success/:id"
              element={isAuth ? <PaymentSuccess user={user} /> : <Login />}
            ></Route>
            <Route
              path="/:id/dashboard"
              element={isAuth ? <Dashboard user={user} /> : <Login />}
            ></Route>
            <Route
              path="/course/study/:id"
              element={isAuth ? <CourseStudy user={user} /> : <Login />}
            ></Route>
            <Route
              path="/lectures/:id"
              element={isAuth ? <Lecture user={user} /> : <Login />}
            ></Route>
            <Route
              path="/admin/dashboard"
              element={isAuth ? <AdminDashboard user={user} /> : <Login />}
            ></Route>
            <Route
              path="/admin/course"
              element={isAuth ? <AdminCourses user={user} /> : <Login />}
            ></Route>
            <Route
              path="/admin/users"
              element={isAuth ? <AdminUsers user={user} /> : <Login />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;