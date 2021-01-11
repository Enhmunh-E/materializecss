import React, { useEffect, useRef } from "react";
import { Fbtn } from "./fbutn";
import M from "materialize-css";
const Forms = () => {
  const message = useRef();
  const select = useRef();
  const select2 = useRef();
  const select3 = useRef();
  useEffect(() => {
    M.FormSelect.init(select.current, {});
    M.FormSelect.init(select2.current, {});
    M.FormSelect.init(select3.current, {});
    M.textareaAutoResize(message);
  }, [message, select]);
  return (
    <div className="row container">
      <h1 className="center-align">Forms & Input</h1>
      <Fbtn />
      <form className="col s12">
        <div className="input-field col s12">
          <input id="first_name" type="text" className="validate" />
          <label for="first_name">Name</label>
        </div>
        <div className="input-field col s12">
          <input
            disabled
            value="john@gmail.com"
            id="disabled"
            type="text"
            className="validate"
          />
          <label for="disabled">Email</label>
        </div>

        <div className="input-field col s12">
          <textarea
            id="message"
            className="materialize-textarea"
            ref={message}
            placeholder="Message"
          ></textarea>
          <label for="message">Message</label>
        </div>
        <div className="col s12">
          Number of users:
          <div className="input-field inline">
            <input type="number" className="validate" placeholder="#" />
          </div>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">call</i>
          <textarea
            id="icon_prefix2"
            className="materialize-textarea"
          ></textarea>
          <label for="icon_prefix2">Phone number</label>
        </div>
        <div className="input-field col s12">
          <input
            className="validate"
            type="text"
            id="email"
            placeholder="Email"
          />
          <label for="email">Email</label>
        </div>
        <div className="input-field col s12">
          <select ref={select}>
            <option value="" disabled selected>Select Option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Select List</label>
        </div>
        <div className='input-field col s12'>
          <select ref={select2} multiple>
            <option value="1" selected>Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </select>
          <label>Option Group Select</label>
        </div>
        <div className="input-field col s12">
          <select multiple ref={select3}>
            <optgroup label="list 1">
              <option value="" selected disabled>Select Option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </optgroup>
            <optgroup label="list 2">
              <option value="3">Option 3</option>
              <option value="3">Option 4</option>
            </optgroup>
          </select>
          <label>Select List</label>
        </div>
        <div className="input-field col s12">
          <p>
            <label>
              <input name="yourchoice" type="radio" checked />
              <span>Male</span>
            </label>
          </p>
          <p>
            <label>
              <input name="yourchoice" type="radio" />
              <span>Female</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span>HTML</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" checked="checked" />
              <span>CSS</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" class="filled-in" checked="checked" />
              <span>Javascript</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" className="filled-in" disabled/>
              <span>PHP</span>
            </label>
          </p>
        </div>
      </form>
    </div>
  );
};
export { Forms };
