import React from "react";
import { Fbtn } from "./fbutn";
const Bfooter = () => {
  return (
    <div>
        <h1 className="center-align">Breadcrumbs & Footer</h1>
        <Fbtn />
        <nav>
          <div className="nav-wrapper row grey">
            <div className="col s2 grey"/>
            <div className="col s10 grey">
              <a href="#!" className="breadcrumb">
                Home
              </a>
              <a href="#!" className="breadcrumb">
                Users
              </a>
              <a href="#!" className="breadcrumb">
                Brad
              </a>
            </div>
          </div>
        </nav>
        <footer className="page-footer grey" style={{marginTop: '100px'}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About Us</h5>
                <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus error cum ad! Labore, quasi debitis quas aperiam voluptatibus quisquam. Tempora, illo eligendi sit dignissimos corporis quod rerum eveniet asperiores.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
                Copyright © 2020
              <a className="grey-text text-lighten-4 right" href="#!">
                Terms and Coditions
              </a>
            </div>
          </div>
        </footer>
    </div>
  );
};
export { Bfooter };
