import React, { useEffect, useRef } from 'react'
import { Fbtn } from './fbutn'
import profile from './profile.jfif'
import M from "materialize-css";
const Carousel = () => {
    const carousel = useRef();
    const carousel2 = useRef();
    const carousel3 = useRef();
    useEffect(() => {
        M.Carousel.init(carousel2.current, {
            fullWidth: true,
            indicators: true
        })
        M.Carousel.init(carousel.current, {
            numVisible: 5
        });
        M.Carousel.init(carousel3.current, {
            fullWidth: true,
            indicators: true
        });
    }, [carousel])
    return (
        <div className="container">
            <h1 className="center-align">Carousel</h1>
            <Fbtn />
            <div className="carousel" ref={carousel}>
                <a className="carousel-item" href="#one!"><img src={profile}/></a>
                <a className="carousel-item" href="#two!"><img src={profile}/></a>
                <a className="carousel-item" href="#three!"><img src={profile}/></a>
                <a className="carousel-item" href="#four!"><img src={profile}/></a>
                <a className="carousel-item" href="#five!"><img src={profile}/></a>
                <a className="carousel-item" href="#six!"><img src={profile}/></a>
            </div>
            <div className="carousel carousel-slider" ref={carousel2}>
                <a className="carousel-item" href="#one!"><img src={profile}/></a>
                <a className="carousel-item" href="#two!"><img src={profile}/></a>
                <a className="carousel-item" href="#three!"><img src={profile}/></a>
                <a className="carousel-item" href="#four!"><img src={profile}/></a>
                <a className="carousel-item" href="#five!"><img src={profile}/></a>
                <a className="carousel-item" href="#six!"><img src={profile}/></a>
            </div>
            <div className="carousel carousel-slider center" ref={carousel3}>
                <div class="carousel-fixed-item center">
                    <a class="btn waves-effect white grey-text darken-text-2">button</a>
                </div>
                <div class="carousel-item red white-text" href="#one!">
                    <h2>First Panel</h2>    
                    <p class="white-text">This is your first panel</p>
                </div>
                <div class="carousel-item amber white-text" href="#two!">
                    <h2>Second Panel</h2>
                    <p class="white-text">This is your second panel</p>
                </div>
                <div class="carousel-item green white-text" href="#three!">
                    <h2>Third Panel</h2>
                    <p class="white-text">This is your third panel</p>
                </div>
                <div class="carousel-item blue white-text" href="#four!">   
                    <h2>Fourth Panel</h2>
                    <p class="white-text">This is your fourth panel</p>
                </div>
            </div>
        </div>
    );
}
export { Carousel }