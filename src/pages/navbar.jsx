import React, { useEffect, useRef } from 'react'
import logo from './logo-primary.svg'
import M from 'materialize-css'
import { Fbtn } from './fbutn'
const NavBar = () => {
    const dropdown = useRef();
    useEffect(() => {
        M.Dropdown.init(dropdown.current, {
            hover: true,
            coverTrigger: false,
            constrainWidth: true
        });
    }, [dropdown])
    return (
        <div>
            <div>
                <h1 className='center-align'>Navbar</h1>
            </div>
            <Fbtn />
            <nav style={{margin: '20px 0px'}}>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo"><img src={logo}/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
                </div>
            </nav>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            <nav style={{margin: '20px 0px'}} className='blue darken-4'>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><img src={logo}/></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1" ref={dropdown}>Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a className='btn'>LOGIN</a></li>
                        <li><a className='material-icons'>person</a></li>
                    </ul>
                </div>
            </nav>
            <nav style={{margin: '20px 0px'}} className='black'>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo"><img src={logo}/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
                </div>
            </nav>
            <nav className='green'>
                <div class="nav-wrapper">
                    <form>
                        <div class="input-field">
                            <input id="search" type="search" required/>
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}
export { NavBar }