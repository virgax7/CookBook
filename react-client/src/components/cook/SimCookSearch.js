import React, {Component} from "react";
import "./cook.css";

export default class SimCookSearch extends Component {
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
    }

    handleStart() {
        this.props.onStartKitchen("Mac", [], [], []);
    }

    render() {
        return (
            <div id={"simCookSearch"}>
                <div id="searchSpacer"/>
                <div id={"searchDiv"} className={"center"}>
                    <form id={"searchForm"} className={"center"}>
                        <input className={"center"} type={"text"} placeholder={"Search..."} name={"search"}/>
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
