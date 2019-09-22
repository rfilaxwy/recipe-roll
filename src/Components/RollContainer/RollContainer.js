import React, { Component }  from 'react';
import LookupList from '../LookupList/LookupList';

export default class RollContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            ingredients:['chicken', 'pears'],
            newIngredient:''
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
                <input value={this.state.newIngredient} onChange={(e)=>this.newIngredientHandler(e)}/>
                <button onClick={this.addIngredient}> Add ingredient </button>
                <LookupList ingredients={this.state.ingredients} />
            </div>
        )
    }
}