import React from 'react';

function Test2(props) {

    return(
        <div>
            <p>duplicated {props.counter} times!</p>
            <button onClick={props.handleClick}>click me (duplicate)</button>
        </div>
    )
}

export default Test2;