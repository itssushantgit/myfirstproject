import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Navbar({ cart, setShow }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div class="container">
          <a
            class="navbar-brand fw-bold fs-4"
            onClick={(event) => {
              event.preventDefault();
              setShow(true);
            }}
            href="#"
          >
            E-pasal
            {console.log(cart)}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <input
              className="searchbar mx-auto mb-2 mg-lg-0"
              placeholder="    search "
            />
            {/* <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Offer
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Items
                </a>
              </li>
            </ul> */}
            <div className="button">
              <a href="" className="btn btn-outline-dark ">
                <i className="fa fa-user-plus me-1"></i>{" "}
              </a>
              <a
                onClick={(event) => {
                  event.preventDefault();
                  setShow(false);
                }}
                href=""
                className="btn btn-outline-dark ms-2"
              >
                {cart.length}
                <i className="fa fa-shopping-cart me-1"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
