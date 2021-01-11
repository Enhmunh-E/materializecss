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
                <li>
                    <Link to="/grid">Grid</Link>
                </li>
                <li>
                    <Link to="/cards">Cards</Link>
                </li>
                <li>
                    <Link to="/breadcrumbs&footer">Breadcrumbs & Footer</Link>
                </li>
                <li>
                    <Link to="/forms">Forms & Input</Link>
                </li>
                <li>
                    <Link to="/fancyform&input">Fancy Form & Input</Link>
                </li>
                <li>
                    <Link to="/chips&pagination">Chips & Pagination</Link>
                </li>
                <li>
                    <Link to="/carousel">Carousel</Link>
                </li>
            </ul>
        </div>
    )
}
