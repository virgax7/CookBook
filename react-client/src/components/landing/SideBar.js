import React, {Component} from "react";

class SideBar extends Component {
    render() {
        return (
            <div id="sideBar">
                <h1 id="categoryTitle">Category</h1>
                <ul className="categories">
                    {/*just some mock data for now...*/}
                    <li className="categoryContent">On the Go</li>
                    <li className="categoryContent">Family</li>
                    <li className="categoryContent">Health Friendly</li>
                    <li className="categoryContent">Italian</li>
                    <li className="categoryContent">Chinese</li>
                    <li className="categoryContent">Romantic</li>
                </ul>
            </div>
        );
    }
}

export default SideBar;
