import React, { useEffect, useState } from "react";

import { Link, Outlet, useParams } from "react-router-dom";
import { AgencyNavbar } from "./AgencyNavbar";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const AgencySidebar = () => {
  const status = useParams().status;

  //for closing sidebar...
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (status === "loggedin") {
      toast.success("Logged In Successfully!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }, []);

  return (
    <>
      {" "}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <AgencyNavbar toggleSidebar={toggleSidebar} />
      <aside
        className={`app-sidebar bg-body-secondary shadow ${
          isSidebarOpen ? "open" : "d-none"
        }`}
        data-bs-theme="dark"
      >
        <div className="sidebar-brand">
          <Link to="/" className="brand-link">
            <span className="brand-text fw-light">E-Advertisement</span>
          </Link>
        </div>

        <div
          className=""
          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
          tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="displayHoarding" className="nav-link active">
                      <i className="nav-icon bi bi-speedometer" />
                      <p>
                        VIEW MY SCREENS
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="hordingForm" className="nav-link active">
                      <i className="nav-icon bi bi-speedometer" />
                      <p>
                        ADD SCREEN
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="bookingdetail" className="nav-link active">
                      <i className="nav-icon bi bi-speedometer" />
                      <p>
                        BOOKING DETAILS
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon bi bi-box-seam-fill" />
                  <p>
                    Widgets
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./widgets/small-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Small Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/info-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>info Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/cards.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Cards</p>
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
        </div>
      </aside>
      <main class="app-main">
        <Outlet></Outlet>
      </main>
    </>
  );
};
