import React from 'react';

 const Button = (props) => {
    return <button onClick={props.click}>{props.title}</button>
}

export default Button;