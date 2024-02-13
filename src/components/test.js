import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              Apna Bazaar
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/categories`}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button
            className="lg:hidden block text-white focus:outline-none"
            type="button"
          >
            <span className="text-2xl">&#9776;</span>
          </button>

          <Link to="/" className="text-2xl font-bold">
            Apna Bazaar
          </Link>

          <div className="hidden lg:flex items-center space-x-4">
            <SearchInput />

            <NavLink to="/" className="hover:text-gray-300">
              Home
            </NavLink>

            <div className="group">
              <Link
                className="group-hover:text-gray-300 hover:text-gray-300"
                to="/categories"
              >
                Categories
              </Link>
              <ul className="hidden group-hover:block absolute bg-gray-800 text-white p-2 space-y-2">
                <li>
                  <Link to={`/categories`}>All Categories</Link>
                </li>
                {categories?.map((c) => (
                  <li key={c._id}>
                    <Link to={`/category/${c.slug}`}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {!auth?.user ? (
              <>
                <NavLink to="/register" className="hover:text-gray-300">
                  Register
                </NavLink>
                <NavLink to="/login" className="hover:text-gray-300">
                  Login
                </NavLink>
              </>
            ) : (
              <div className="group">
                <NavLink
                  className="group-hover:text-gray-300 hover:text-gray-300"
                  to="#"
                >
                  {auth?.user?.name}
                </NavLink>
                <ul className="hidden group-hover:block absolute bg-gray-800 text-white p-2 space-y-2">
                  <li>
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleLogout} to="/login">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}

            <NavLink to="/cart" className="hover:text-gray-300">
              Cart (0)
            </NavLink>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
