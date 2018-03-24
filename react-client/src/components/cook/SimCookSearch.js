import React, {Component} from "react";
import "./cook.css";
import * as firebase from "firebase";

export default class SimCookSearch extends Component {
    constructor(props) {
        super(props);
        this.handleShowConfirmation = this.handleShowConfirmation.bind(this);
        this.updateSearchValue = this.updateSearchValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchValue: "",
            searchFailedMsg: "",
            chosenRecipe: {}
        };
    }

    handleShowConfirmation() {
        const listText = this.div.innerText;
        let food = listText.match(/^[^:]*:/g).toString().substring(2);
        food = food.slice(0, food.length - 1);
        const userName = listText.match(/[^-]+$/g).toString().substring(1);
        let directions;
        let ingredients;
        let kitchenTools;
        firebase.database().ref("Recipes").once("value", snap => {
           snap.forEach(user => {
             if (user.key === userName) {
                user.forEach(recipe => {
                    if (recipe.key === food) {
                        recipe.forEach(child => {
                            if (child.key === "Directions") {
                                directions = child;
                            }else if (child.key === "Ingredients") {
                                ingredients = child;
                            }else if (child.key === "Kitchen Tools") {
                                kitchenTools = child;
                            }
                        });
                        this.props.onShowConfirmation(food, directions, ingredients, kitchenTools);
                        return;
                    }
                 });
             }
           });
        });
    }

    updateSearchValue(event) {
        this.setState({
            searchValue: event.target.value,
            searchFailedMsg: "",
            searchList: []
        });
    }

    handleSubmit(event) {
        if (this.state.searchValue === "") {
            return;
        }
        event.preventDefault();
        const searchMap = new Map();
        firebase.database().ref("Recipes").once("value", snap => {
            snap.forEach(user => {
                user.forEach(recipe => {
                    if (recipe.key.toUpperCase().includes(this.state.searchValue.toUpperCase())) {
                        if (!searchMap.get(user.key)) {
                            searchMap.set(user.key, [recipe])
                        } else {
                            searchMap.get(user.key).push(recipe);
                        }
                    }
                });
            });
            if (searchMap.size === 0) {
                this.setState({
                    searchFailedMsg: this.state.searchValue + " didn't match any recipes, please try again..."
                });
            }
            const searchList = [];
            searchMap.forEach((recipes, name) => {
                recipes.forEach(recipe => {
                    recipe.forEach(detail => {
                        if (detail.key === "Description") {
                            searchList.push(
                                <li className={"searchResultItem"} key={detail.val()} onClick={this.handleShowConfirmation}>
                                    <div ref={r => { this.div = r; }}>
                                        <b className={"recipeTitle"}>&gt; {recipe.key}</b>: {detail.val()} - {name}
                                    </div>
                                </li>
                            );
                        }
                    });
                });
            });
            this.setState({
                searchList: searchList
            });
        });
    }

    render() {
        let content;
        if (this.props.showRecipePage) {
            content = this.props.searchRecipeContent;
        } else {
            content =
            <div id={"searchDiv"} className={"center"}>
                <form id={"searchForm"} className={"center"} onSubmit={this.handleSubmit}>
                    <input className={"center"} type={"text"} placeholder={"Search..."} name={"search"}
                           onChange={this.updateSearchValue}/>
                    <button className={"center"} type={"submit"}>Submit</button>
                    <div className={"center"}>{this.state.searchFailedMsg}</div>
                </form>
                <ul className={"center"}>
                    {this.state.searchList}
                </ul>
            </div>;
        }
        return (
            <div id={"simCookSearch"}>
                <div id="searchSpacer"/>
                {content}
            </div>
        );
    }
}
