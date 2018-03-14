import React, {Component} from "react";

class NavBar extends Component {
    render() {
        return (
            <div id="navBar">
                <a href="#" className="navBarContents" id="cookBookTitle">CookBook</a>
                <a href="#" className="navBarContents">Trending</a>
                <a href="#" className="navBarContents">Contact</a>
                <a href="#" className="navBarContents">CookTable</a>
                <div id="searchWrapper">

                    <form method="POST" action="/post-feedback">
                        <input type="text" placeholder="Search.." name="search" id="searchInputText"/>
                        <button type="submit" id="searchSubmitButton"/>
                    </form>
                    <a href="/view-feedback">View Feedback</a>

                </div>
            </div>
        );
    }
}

export default NavBar;
