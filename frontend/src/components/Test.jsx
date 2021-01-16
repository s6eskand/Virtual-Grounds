import React, { useState } from 'react';

import Test2 from './Test2';

function Test(props) {
    const [state, setState] = useState({
        counter: 0,
    })

    const handleClick = () => {
        console.log(state.counter)
        setState({
            ...state,
            counter: state.counter + 1
        });
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p>you clicked me {state.counter} times</p>
            <button onClick={handleClick}>click me</button>
            <Test2 counter={state.counter} handleClick={handleClick} />
        </div>
    )
}

export default Test;