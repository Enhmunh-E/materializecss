import React, { useEffect, useRef } from 'react'
import M from 'materialize-css'
import { Fbtn } from './fbutn'
import cardImg1 from './card-image-network.jpg'
import cardImg2 from './Computer-Coding-Laptop.jpg'
import cardImg3 from './coding-img.jpg'
import cardImg4 from './image-asset.jpeg'
const Cards = () => {
    const Tab1 = useRef();
    const Tab2 = useRef(); 
    useEffect(() => {
        M.Tabs.init(Tab1.current, {});
        M.Tabs.init(Tab2.current, {});
    }, [Tab1, Tab2])
    return (
        <div className="container">
            <h1 className="center-align">Cards</h1>
            <Fbtn />
            <div className="row">
                <div className="col s12 m6">
                    <div className="card-panel white">
                        <span>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                        </span>
                    </div>
                    <div className="card-panel red darken-2">
                        <span className="white-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ea voluptas laudantium ab asperiores, quaerat hic minima. Aspernatur sit veniam animi doloribus nam aliquid? Voluptas, maxime architecto. Nulla, cum. Sint.
                        </span>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Card with Title</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem minus consequatur libero? Aut consectetur placeat eligendi adipisci doloribus vitae architecto rerum officiis dolorem magni nam optio provident, non dolorum!</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Read more</a>
                            <a href="#">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={cardImg1}/>
                            <span className="card-title">Card Image</span>
                        </div>
                        <div className="card-content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nesciunt quae aliquid incidunt voluptas sapiente quia architecto quibusdam distinctio reiciendis aut qui, rem amet hic. Excepturi hic sed voluptatibus eum.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card grey lighten-2">
                        <div className="card-image">
                            <img src={cardImg2}/>
                            <span className="card-title">Image & Button</span>
                            <a className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quisquam pariatur excepturi perferendis nulla dignissimos odit incidunt, eveniet, dolor harum aliquid? Quaerat eos sunt dolor consectetur voluptatum ipsa quisquam eum!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={cardImg3}/>
                        </div>
                        {/* <div className="card-stacked"> */}
                            <div className="card-content">
                                <h4>Horizontal</h4>
                                <p>Lorem ipsum, dolor adipisicing elit.</p>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={cardImg4}/>
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">Read More</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat repellat, molestiae soluta doloribus ratione eos culpa velit mollitia laboriosam magnam possimus voluptatem alias nisi quos sed totam, quisquam delectus!</p>
                        </div>
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width" ref={Tab1}>
                                <li className="tab"><a className="active" href="#tab1">Tab 1</a></li>
                                <li className="tab"><a href="#tab2">Tab 2</a></li>
                                <li className="tab"><a href="#tab3">Tab 3</a></li>
                            </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                            <div id="tab1">Tab 1</div>
                            <div id="tab2">Tab 2</div>
                            <div id="tab3">Tab 3</div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="card orange">
                        <div className="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat repellat, molestiae soluta doloribus ratione eos culpa velit mollitia laboriosam magnam possimus voluptatem alias nisi quos sed totam, quisquam delectus!</p>
                        </div>
                        <div className="card-tabs orange">
                            <ul className="tabs tabs-fixed-width orange black-text" ref={Tab2}>
                                <li className="tab"><a className="black-text" href="#tab4">Tab 1</a></li>
                                <li className="tab"><a className="black-text" href="#tab5">Tab 2</a></li>
                                <li className="tab"><a className="black-text" href="#tab6">Tab 3</a></li>
                            </ul>
                        </div>
                        <div className="card-content black white-text">
                            <div id="tab4">This is the content of tab 1</div>
                            <div id="tab5">This is the content of tab 2</div>
                            <div id="tab6">This is the content of tab 3</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card small">
                        <div className="card-image">
                            <img src={cardImg1}/>
                            <span className="card-title">Card imgae</span>
                        </div>
                        <div className="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates expedita veritatis minus? Quo labore aliquam, harum quibusdam nemo culpa distinctio voluptatibus laborum, sed non reprehenderit sequi, atque deleniti unde!</p>
                        </div>
                        <div class="card-action">
                            <a href="#">read more</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={cardImg1}/>
                            <span className="card-title">Card imgae</span>
                        </div>
                        <div className="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates expedita veritatis minus? Quo labore aliquam, harum quibusdam nemo culpa distinctio voluptatibus laborum, sed non reprehenderit sequi, atque deleniti unde!</p>
                        </div>
                        <div class="card-action">
                            <a href="#">read more</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card large">
                        <div className="card-image">
                            <img src={cardImg1}/>
                            <span className="card-title">Card imgae</span>
                        </div>
                        <div className="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates expedita veritatis minus? Quo labore aliquam, harum quibusdam nemo culpa distinctio voluptatibus laborum, sed non reprehenderit sequi, atque deleniti unde!</p>
                        </div>
                        <div class="card-action">
                            <a href="#">read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m3">
                    <div class="card light-blue">
                        <div class="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vero illum delectus ipsa odit dolor consequuntur, ex, quod nulla corrupti fugiat asperiores incidunt sequi doloremque similique ipsum dicta pariatur blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cum possimus laudantium voluptatibus iusto distinctio aliquid! Facilis nostrum velit praesentium beatae, iste obcaecati optio rerum, autem voluptate placeat sequi vel!</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m3">
                    <div class="card indigo white-text">
                        <div class="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vero illum delectus ipsa odit dolor consequuntur, ex, quod nulla corrupti fugiat asperiores incidunt sequi doloremque similique ipsum dicta pariatur blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cum possimus laudantium voluptatibus iusto distinctio aliquid! Facilis nostrum velit praesentium beatae, iste obcaecati optio rerum, autem voluptate placeat sequi vel!</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m3">
                    <div class="card cyan">
                        <div class="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vero illum delectus ipsa odit dolor consequuntur, ex, quod nulla corrupti fugiat asperiores incidunt sequi doloremque similique ipsum dicta pariatur blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cum possimus laudantium voluptatibus iusto distinctio aliquid! Facilis nostrum velit praesentium beatae, iste obcaecati optio rerum, autem voluptate placeat sequi vel!</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m3">
                    <div class="card amber">
                        <div class="card-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vero illum delectus ipsa odit dolor consequuntur, ex, quod nulla corrupti fugiat asperiores incidunt sequi doloremque similique ipsum dicta pariatur blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cum possimus laudantium voluptatibus iusto distinctio aliquid! Facilis nostrum velit praesentium beatae, iste obcaecati optio rerum, autem voluptate placeat sequi vel!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Cards }