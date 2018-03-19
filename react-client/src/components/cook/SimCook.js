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
            isSearchPage: true
        };
        this.changePageToSimCookKitchen = this.changePageToSimCookKitchen.bind(this);
    }

    changePageToSimCookKitchen(food, directions, ingredients, kitchenTools) {
        this.setState({
            food: food,
            directions: directions,
            ingredients: ingredients,
            kitchenTools: kitchenTools,
            isSearchPage: false
        });
    }

    componentWillMount() {
    }

    render() {
        if (this.state.isSearchPage) {
            return <SimCookSearch onStartKitchen={this.changePageToSimCookKitchen}/> ;
        }
        return (
            <SimCookKitchen/>
        );
    }
}

