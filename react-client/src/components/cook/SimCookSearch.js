import React, {Component} from "react";

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
               <div id={"searchAndSelectSimCookSearch"}>
                   <button onClick={this.handleStart}>Start</button>
               </div>
           </div>
       );
    }
}
