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
            searchValue: ""
        };
    }

    handleStart() {
        this.props.onStartKitchen("Mac", [], [], []);
    }

    updateSearchValue(event) {
        this.setState({
           searchValue: event.target.value
        });
    }

    handleSubmit(event) {
        if (this.state.searchValue === "") {
            return;
        }
        event.preventDefault();
        const searchResults = [];
        firebase.database().ref("Recipes").on("value", snap => {
            snap.forEach(user => {
                user.forEach(recipe => {
                    if (recipe.key.toUpperCase().includes(this.state.searchValue.toUpperCase())) {
                        searchResults.push(<li className="searchContent" key={recipe.key}>{recipe.key}</li>);
                    }
                });
            });
        });
    }

    render() {
        return (
            <div id={"simCookSearch"}>
                <div id="searchSpacer"/>
                <div id={"searchDiv"} className={"center"}>
                    <form id={"searchForm"} className={"center"} onSubmit={this.handleSubmit}>
                        <input className={"center"} type={"text"} placeholder={"Search..."} name={"search"} onChange={this.updateSearchValue}/>
                        <button className={"center"} type={"submit"}>Submit</button>
                    </form>
                </div>
                {/*<div id={"searchAndSelectSimCookSearch"}>*/}
                {/*<button onClick={this.handleStart}>Start</button>*/}
                {/*</div>*/}
            </div>
        );
    }
}
