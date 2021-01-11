import React from 'react'
import { Fbtn } from './fbutn'
export default function ButtonsAndIcons() {
    return (
        <div>
            <h1 className="center-align">Buttons & Icons</h1>
            <Fbtn />
            <a style={{margin: '10px'}} className="waves-effect waves-light btn-large">button
                <i className="material-icons right">cloud</i>
            </a>
            <div className="row">
                <a style={{margin: '10px'}} className="waves-effect waves-light btn">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn red-text white">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn teal-text white">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn green-text white">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn grey-text white">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn purple-text white">read more</a>
            </div>
            <div className="row" style={{margin: '10px'}}>
                <i className="material-icons">shopping_cart</i>
                <i className="material-icons red-text">settings</i>
                <i className="material-icons light-blue-text">search</i>
                <i className="material-icons">stars</i>
            </div>
            <div className="row" style={{margin: '10px'}}>
                <i className="material-icons tiny">check</i>
                <i className="material-icons small">check</i>
                <i className="material-icons medium">check</i>
                <i className="material-icons large">check</i>
            </div>
            <div className="row">
                <a style={{margin: '10px'}} className="waves-effect waves-light btn"><i className="material-icons left">shopping_cart</i>Buy Now</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn"><i className="material-icons right">shopping_cart</i>Buy Now</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn"><i className="material-icons left">shopping_cart</i>Buy Now</a>
            </div>
            <div className="row">
                <a style={{margin: '10px'}} className="waves-effect waves-light btn red">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn purple">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn orange">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn black">read more</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn yellow">read more</a>
            </div>
            <div className="row">
                <a style={{margin: '10px'}} className="waves-effect waves-light btn-large">Large Button</a>
                <a style={{margin: '10px'}} className="waves-effect waves-light btn-large disabled">Disabled Button</a>
            </div>
        </div>
    )
}
