import React from 'react';

function Display(props) {
    return (
        <div id="display">
            {props.sound}
            <p>**sound name here**</p>
        </div>
    )
}

export default Display