import React from 'react';

const lookupList = (props) => {
    const ingredients = props.ingredients.map((ingred, index ) =>{
       return <li key={index}>{ingred}</li>
    });
    return(
        <ul>
            {ingredients}
        </ul>
    )
}

export default lookupList;