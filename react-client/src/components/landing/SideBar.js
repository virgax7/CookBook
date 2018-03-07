import React, {Component} from "react";

class SideBar extends Component {
    render() {
        return (
            <div id="sideBar">
                <h1 id="categoryTitle">Category</h1>
                <ul class="categories">
                    {/*just some mock data for now...*/}
                    <li class="categoryContent">On the Go</li>
                    <li class="categoryContent">Family</li>
                    <li class="categoryContent">Health Friendly</li>
                    <li class="categoryContent">Italian</li>
                    <li class="categoryContent">Chinese</li>
                    <li class="categoryContent">Romantic</li>
                </ul>
            </div>
        );
    }
}

export default SideBar;
