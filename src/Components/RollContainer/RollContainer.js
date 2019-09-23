import React, { Component }  from 'react';
import Button from '../Button/Button';
import LookupList from '../LookupList/LookupList';
import classes from './RollContainer.module.css';

export default class RollContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            ingredients:['chicken', 'pears'],
            newIngredient:''
        }
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.addIngredient();
        }
      }

    newIngredientHandler = (event) => {
        this.setState({newIngredient:event.target.value})
    }

    addIngredient = () => {
        console.log(this.state.ingredients)
        let ingredients = this.state.ingredients;
        ingredients.push(this.state.newIngredient);
        this.setState({ingredients:ingredients, newIngredient:''})
    }

    render(){
        return(
            <div>
                <input onKeyPress={this.handleKeyPress} className={classes.inputStyle} placeholder='Ingredient' value={this.state.newIngredient} onChange={(e)=>this.newIngredientHandler(e)}/>
                <Button click={this.addIngredient} title='Add ingredient' />
                <LookupList ingredients={this.state.ingredients} />
            </div>
        )
    }
}