import React, {Component} from "react";

class SideBar extends Component {
    render() {
        return (
            <div id="sideBar">
                <h1 id="categoryTitle">Category</h1>
                <ul className="categories">
                    {/*just some mock data for now...*/}
                    <button style={{ height: 50, width: 200, fontWeight:150 }}
                            className="categoryContent">On the Go</button>

                    <button style={{ height: 50, width: 200, fontWeight:150 }}
                        className="categoryContent">Family</button>

                    <button style={{ height: 50, width: 200, fontWeight:150 }}
                        className="categoryContent">Health Friendly</button>

                    <button style={{ height: 50, width: 200, fontWeight:150 }}
                        className="categoryContent">Italian</button>

                    <button style={{ height: 50, width: 200, fontWeight:150 }}
                        className="categoryContent">Chinese</button>

                    <button  style={{ height: 50, width: 200, fontWeight:150 }}
                        className="categoryContent">Romantic</button>
                </ul>
            </div>
        );
    }
}

export default SideBar;
