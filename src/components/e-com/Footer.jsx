import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div class="container pad">
      <footer class=" footer">
        <ul class="nav justify-content-center border-bottom pb-3 ">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-bg color">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-bg">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-bg">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-bg">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-bg">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-body-bg bottom">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
