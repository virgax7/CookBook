import React, {Component} from "react";
import SimCookSearch from "./SimCookSearch";

export default class SimCook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            directions: [],
            ingredients: [],
            kitchenTools: [],
            isSearchPage: true
        }
        this.changePageToSimCookKitchen = this.changePageToSimCookKitchen.bind(this);
    }

    changePageToSimCookKitchen(title, directions, ingredients, kitchenTools) {
        this.setState({
            title: title,
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
            <div>
                HI
            </div>
        );
    }
}

