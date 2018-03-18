import React, {Component} from "react";
import * as firebase from "firebase";

class SideBar extends Component {
    constructor() {
       super();
       this.state = {
           categories: []
       }
    }

    componentWillMount() {
        const sideBarTopicListRef = firebase.database().ref("SideBarTopicList");
        sideBarTopicListRef.on("value", sideBarList => {
            const categories = [];
            sideBarList.forEach(category => {
                categories.push(<li className="categoryContent" key={category.key}>{category.key}</li>);
            });
            this.setState({
                categories: categories
            });
        });
    }

    render() {
        return (
            <div id="sideBar">
                <h1 id="categoryTitle">Category</h1>
                <ul className="categories">
                    {this.state.categories}
                </ul>
            </div>
        );
    }
}

export default SideBar;
