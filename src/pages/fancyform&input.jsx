import React, { useEffect, useRef } from 'react'
import { Fbtn } from './fbutn'
import M from "materialize-css"
const FancyFormInput = () => {
    const slider = useRef();
    const datePicker = useRef();
    const hourPicker = useRef();
    const ltext = useRef();
    const fruit = useRef();
    useEffect(() => {
        M.Range.init(slider.current);
        M.Datepicker.init(datePicker.current, {});
        M.Timepicker.init(hourPicker.current, {});
        M.CharacterCounter.init(ltext.current, {});
        M.Autocomplete.init(fruit.current, {
            data: {
                "Apple": null,
                "Banana": null,
                'ACÉROLA':null,
                'Acerola': null,
                'West Indian Cherry': null,
                'Pomme': null,
                'Apple': null,
                'Apricots': null,
                'Avocado': null,
                'Banana': null,
                'Blackberries': null,
                'Blackcurrant': null,
                'Blueberries': null,
                'Breadfruit': null,
                'Cantaloupe': null,
                'Carambola': null,
                'Cherimoya': null,
                'Cherries': null,
                'Clementine': null,
                'Coconut Meat': null,
                'Cranberries': null,
                'Custard-Apple': null,
                'Date Fruit': null,
                'Durian': null,
                'Elderberries': null,
                'Feijoa': null,
                'Figs': null,
                'Gooseberries': null,
                'Grapefruit': null,
                'Grapes': null,
                'Guava': null,
                'Honeydew Melon': null,
                'Jackfruit': null,
                'Java-Plum': null,
                'Jujube Fruit': null,
                'Kiwifruit': null,
                'Kumquat': null,
                'Lemon': null,
                'lime': null,
                'Lime': null,
                'Longan': null,
                'Loquat': null,
                'Lychee': null,
                'Mandarin': null,
                'Mango': null,
                'Mangosteen': null,
                'Mulberries': null,
                'Nectarine': null,
                'Olives': null,
                'Orange': null,
                'Papaya': null,
                'Passion Fruit': null,
                'Peaches': null,
                'Pear': null,
                'Persimmon – Japanese': null,
                'Pitaya (Dragonfruit)': null,
                'Pineapple': null,
                'Pitanga': null,
                'Plantain': null,
                'Plums': null,
                'Pomegranate': null,
                'Prickly Pear': null,
                'Prunes': null,
                'Pummelo': null,
                'Quince': null,
                'Raspberries': null,
                'Rhubarb': null,
                'Rose-Apple': null,
                'Sapodilla': null,
                'Sapote, Mamey': null,
                'Soursop': null,
                'Strawberries': null,
                'Sugar-Apple': null,
                'Tamarind': null,
                'Tangerine': null,
                'Watermelon': null,
              }
        });
    }, [slider, ltext, fruit, hourPicker, datePicker])
    return (
        <div className="container">
            <h1 className="center-align">Fancy Form & Input</h1>
            <Fbtn />
            <form className="col s12">
                <div className="switch">
                    <label>
                        Disable
                        <input type="checkbox"/>
                        <span className="lever"></span>
                        Enable
                    </label>
                </div>
                <div className="switch">
                    <label>
                        Disable 
                        <input type="checkbox" disabled/>
                        <span className="lever"></span>
                        Enable
                    </label>
                </div>
                <div className="col s12 file-field input-field">
                    <div className="btn-large">
                        <span>Upload File</span>
                        <input type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                </div>
                <p className="range-field">
                    <input type="range" id="test5" min="0" max="100" ref={slider}/>
                </p>
                <div className="input-field col s12">
                    <input type="text" className="datepicker" ref={datePicker} placeholder="Choose a Date"/>
                </div>
                <div className="input-field col s12">
                    <input className="timepicker" type="text" ref={hourPicker} />
                    <span className="helper-text" >Choose a Time</span>
                </div>
                <div className="input-field col s12">
                    <textarea className="materialize-textarea" data-length="120" ref={ltext}></textarea>
                </div>
                <div className="input-field col s12">
                    <input type="text" id="autocomplete-input" className="autocomplete" ref={fruit}/>
                    <span className="helper-text" data-error="wrong" data-success="right">Type a Fruit</span>
                </div>
                <a className="btn waves-effect waves-light">submit</a>
            </form>
        </div>
    );
} 
export { FancyFormInput }