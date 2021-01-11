import React from 'react'
import { Fbtn } from './fbutn'
export default function Typography() {
    return (
        <div className="container">
            <h1 className="center-align">Typography</h1>
            <Fbtn />
            <h1>Heading One</h1>
            <h2>Heading Two</h2>
            <h3>Heading Three</h3>
            <h4>Heading Four</h4>
            <h5>Heading FIve</h5>
            <h6>Heading Six</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <blockquote>
                This is an example quotation that uses the blockquote tag.
            </blockquote>
            <p className="flow-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget dui urna. Phasellus diam leo, posuere a turpis et, tempus sodales orci.</p>
            <div>
                <h5 className="left-align">Left aligned text</h5>
            </div>
            <div>
                <h5 className="right-align">Right aligned text</h5>
            </div>
            <div>
                <h5 className="center-align">Center aligned text</h5>
            </div>
            <div className="valign-wrapper grey lighten-2" style={{height: '300px'}}>
                <h5>This should be vertically aligned</h5>
            </div>
            <div className="row">
                <div className="left">left</div>
                <div className="right">right</div>
                <div className="left">left</div>
            </div>
        </div>
    )
}