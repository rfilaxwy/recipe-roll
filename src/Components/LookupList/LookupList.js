import React from 'react';
import classes from './LookupList.module.css';

const lookupList = (props) => {
    const ingredients = props.ingredients.map((ingred, index ) =>{
       return <li key={index}>{ingred}</li>
    });
    return(
        <ul className={classes.ingList} >
            {ingredients}
        </ul>
    )
}

export default lookupList;