import React, {Component} from "react";
import "./cook.css";
import * as firebase from "firebase";

export default class SimCookSearch extends Component {
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.updateSearchValue = this.updateSearchValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchValue: "",
            searchFailedMsg: ""
        };
    }

    handleStart() {
        this.props.onStartKitchen("Mac", [], [], []);
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
        firebase.database().ref("Recipes").on("value", snap => {
            snap.forEach(user => {
                user.forEach(recipe => {
                    if (recipe.key.toUpperCase().includes(this.state.searchValue.toUpperCase())) {
                        console.log(recipe);
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
                                <li className={"searchResultItem"} key={detail.val()}>
                                    <b className={"recipeTitle"}>{recipe.key}</b>: {detail.val()} - {name}
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
        return (
            <div id={"simCookSearch"}>
                <div id="searchSpacer"/>
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
                </div>
                {/*<div id={"searchAndSelectSimCookSearch"}>*/}
                {/*<button onClick={this.handleStart}>Start</button>*/}
                {/*</div>*/}
            </div>
        );
    }
}
