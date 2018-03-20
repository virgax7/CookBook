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
        let simCookSearchRecipeContent = (
            <div id={"searchRecipeContent"} className={"center"}>
                NEW STUFF
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

