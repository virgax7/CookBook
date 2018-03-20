import React, {Component} from "react";
import SimCookSearch from "./SimCookSearch";
import SimCookKitchen from "./SimCookKitchen";

export default class SimCook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: "",
            directions: [],
            ingredients: [],
            kitchenTools: [],
            isSearchPage: true,
            simCookSearchRecipeContent: <div></div>
        };
        this.changePageToSimCookKitchen = this.changePageToSimCookKitchen.bind(this);
    }

    changePageToSimCookKitchen(food, directions, ingredients, kitchenTools) {
        let ingredientList = [];
        ingredients.forEach(ingredient => {
            ingredientList.push(<li>{ingredient.key}: {ingredient.val()}</li>)
        });
        let toolList = [];
        kitchenTools.forEach(tool => {
            toolList.push(<li>{tool.key}</li>)
        });
        let simCookSearchRecipeContent = (
            <div id={"searchRecipeContent"} className={"center centerText"}>
                <h1 id={"foodTitle"}>{food}</h1>
                <div id={"ingredients"}>
                    <h2>Ingredients Required</h2>
                    <ul>{ingredientList}</ul>
                </div>
                <div id={"kitchenTools"}>
                    <h2>Kitchen Tools Required</h2>
                    <ul>{toolList}</ul>
                </div>
                <button>Start Cooking!</button>
            </div>
        );
        this.setState({
            food: food,
            directions: directions,
            ingredients: ingredients,
            kitchenTools: kitchenTools,
            isSearchPage: false,
            simCookSearchRecipeContent : simCookSearchRecipeContent
        });
    }

    componentWillMount() {
    }

    render() {
        if (this.state.isSearchPage) {
            return <SimCookSearch showRecipePage={false} onStartKitchen={this.changePageToSimCookKitchen}/> ;
        }
        return (
            <SimCookSearch showRecipePage={true} searchRecipeContent={this.state.simCookSearchRecipeContent}/>
        );
    }
}

