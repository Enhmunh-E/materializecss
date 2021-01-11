import React, { useEffect, useRef } from 'react'
import { Fbtn } from './fbutn'
import profile from './profile.jfif'
import M from "materialize-css";
const ChipsPagination = () => {
    const chips = useRef();
    useEffect(() => {
        M.Chips.init(chips.current, {
            placeholder: 'Enter a tag',
            secondaryPlaceholder: '+Tag',
            autocompleteOptions: {
                data: {
                  'Apple': null,
                  'Microsoft': null,
                  'Google': null
                },
                limit: Infinity,
                minLength: 1
            }
        });
    }, [chips])
    return (
        <div className="container">
            <h1 className="center-align">Chips & Pagination</h1>
            <Fbtn />
            <div className="row s12">
                <div className="chip">Web Development</div>
                <div className="chip">Web Design</div>
                <div className="chip">Programming</div>
            </div>
            <div className="row s12">
                <div className="chip">
                    Web Development
                    <i className="close material-icons">close</i>    
                </div>
                <div className="chip">
                    Web Design
                    <i className="close material-icons">close</i>    
                </div>
                <div className="chip">
                    Programming
                    <i className="close material-icons">close</i>    
                </div>
            </div>
            <div className="row s12">
                <div className="chip"><img src={profile} alt="Contact Person" />John Doe</div>
                <div className="chip"><img src={profile} alt="Contact Person" />Brian Jackson</div>
                <div className="chip"><img src={profile} alt="Contact Person" />Lori Smith</div>
            </div>
            <div className="row s12">
                <div className="chips chips-placeholder chips-autocomplete" ref={chips}>
                    <input className="custom-class"/>
                </div>
            </div>
            <ul className="pagination">
                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li className="waves-effect"><a href="#!">1</a></li>
                <li className="active"><a href="#!">2</a></li>
                <li className="waves-effect"><a href="#!">3</a></li>
                <li className="waves-effect"><a href="#!">4</a></li>
                <li className="waves-effect"><a href="#!">5</a></li>
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    );
}
export { ChipsPagination }