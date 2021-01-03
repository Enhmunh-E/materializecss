import React, { useEffect, useRef } from "react";
import { Fbtn } from './fbutn'
import M from 'materialize-css'

const Collection = () => {
    const dropdown = useRef();
    useEffect(() => {
        M.Dropdown.init(dropdown.current, {
            hover: true,
            coverTrigger: false,
            constrainWidth: true
        });
    }, [dropdown])
  return (
    <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', width: '100vw'}}>
      <div style={{ width: "60vw" }}>
        <div>
            <h1 className='center-align'>Collection & Badges</h1>
        </div>
        <Fbtn />
        <ul class="collection">
          <li class="collection-item">First Item</li>
          <li class="collection-item">Second Item</li>
          <li class="collection-item">Third Item</li>
          <li class="collection-item">Fourth Item</li>
        </ul>
        <div class="collection">
          <a class="collection-item">First Item</a>
          <a class="collection-item">Second Item</a>
          <a class="collection-item">Third Item</a>
          <a class="collection-item">Fourth Item</a>
          <a className="collection-item">
            <span class="badge">44</span>Fifth Item
          </a>
          <a className="collection-item">
            <span class="new badge">3</span>Sixth Item
          </a>
        </div>
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>Items</h4>
          </li>
          <li class="collection-item">First Item</li>
          <li class="collection-item">Second Item</li>
          <li class="collection-item">Third Item</li>
          <li class="collection-item">Fourth Item</li>
        </ul>
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>Items</h4>
          </li>
          <li class="collection-item">
            First Item
            <a href="#!" class="secondary-content">
              <i class="material-icons">close</i>
            </a>
          </li>
          <li class="collection-item">
            Second Item
            <a href="#!" class="secondary-content">
              <i class="material-icons">close</i>
            </a>
          </li>
          <li class="collection-item">
            Third Item
            <a href="#!" class="secondary-content">
              <i class="material-icons">close</i>
            </a>
          </li>
          <li class="collection-item">
            Fourth Item
            <a href="#!" class="secondary-content">
              <i class="material-icons">close</i>
            </a>
          </li>
        </ul>
        <ul class="collection">
          <li class="collection-item avatar">
            <i class="material-icons circle blue">contacts</i>
            <span class="title">John Doe</span>
            <p>
              jdoe@gmail.com <br />
              555-555-5555
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle blue">contacts</i>
            <span class="title">Steve Smith</span>
            <p>
              steve@gmail.com <br />
              555-555-5555
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle blue">contacts</i>
            <span class="title">Karen Johnson</span>
            <p>
              karen@gmail.com <br />
              555-555-5555
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle blue">contacts</i>
            <span class="title">Mary Williams</span>
            <p>
              mary@gmail.com <br />
              555-555-5555
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </li>
        </ul>
        <ul id="dropdown2" class="dropdown-content">
          <li>
            <a href="#!">
              one<span class="badge">1</span>
            </a>
          </li>
          <li>
            <a href="#!">
              two<span class="new badge">1</span>
            </a>
          </li>
          <li>
            <a href="#!">three</a>
          </li>
        </ul>
        <a class="btn dropdown-trigger" href="#!" data-target="dropdown2" ref={dropdown}>
          Dropdown<i class="material-icons right">arrow_drop_down</i>
        </a>
      </div>
    </div>
  );
};
export { Collection };
