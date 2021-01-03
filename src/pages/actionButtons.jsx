import React, { useState, useRef, useEffect } from 'react' 
import M from 'materialize-css'
const ActionButtons = () => {
    const btn = useRef();
    useEffect(() => {
        M.FloatingActionButton.init(btn.current, {
            toolbarEnabled: true
        });
    }, [btn])

    return (
        <div>
            <a className="btn-floating red pulse" style={{margin: '10px'}}><i className="material-icons">add</i></a>
            <a className="btn-floating blue pulse" style={{margin: '10px'}}><i className="material-icons">create</i></a>
            <a className="btn-floating green pulse" style={{margin: '10px'}}><i className="material-icons">publish</i></a>
            <div class="fixed-action-btn toolbar" ref={btn}>
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><a class="btn-floating"><i class="material-icons">insert_chart</i></a></li>
                    <li><a class="btn-floating"><i class="material-icons">format_quote</i></a></li>
                    <li><a class="btn-floating"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div>
        </div>
    );
}
export { ActionButtons }