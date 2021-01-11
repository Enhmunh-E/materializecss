import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'
const Fbtn = () => {
    const btn = useRef();
    useEffect(() => {
        M.Dropdown.init(btn.current, {
            hover: true,
            // alignment: 'bottom',
            coverTrigger: false,
            constrainWidth: false
        });
    }, [btn])
    return (
        <div className='row valign-wrapper'>
            <div className='col s3 center-align'>
                <a className='btn btn-large green'>CSS 2</a>
            </div>
            <div className='col s3 center-align'>
                <a className='btn btn-large blue'>CSS 1</a>
            </div>
            <div className='col s3 center-align'>
                <a className='btn btn-large yellow black-text'>JS 1</a>
            </div>
            <div className='col s3 center-align'>
                <a className='btn btn-large red dropdown-trigger' data-target='dropdown1' ref={btn}>JS 2</a>
            </div>
            <ul id='dropdown1' className='dropdown-content'>
                <li><a>one</a></li>
                <li><a>two</a></li>
                {/* <li class="divider" tabindex="-1"></li> */}
                <li><a>three</a></li>
                <li><a>four</a></li>
                <li><a>five</a></li>
            </ul>
        </div>
    );
}
export { Fbtn }