import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/typography">Typography</Link>
                </li>
                <li>
                    <Link to="/color">Color</Link>
                </li>
                <li>
                    <Link to="/buttonsAndIcons">Buttons and Icons</Link>
                </li>
                <li>
                    <Link to="/actionButtons">Action Buttons</Link>
                </li>
                <li>
                    <Link to="/navbar">NavBar</Link>
                </li>
                <li>
                    <Link to="/collection">Collection</Link>
                </li>
            </ul>
        </div>
    )
}
