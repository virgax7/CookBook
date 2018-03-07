import React, {Component} from "react";

class NavBar extends Component {
    render() {
        return (
            <div id="navBar">
                <a href="#" class="navBarContents" id="cookBookTitle">CookBook</a>
                <a href="#" class="navBarContents">News</a>
                <a href="#" class="navBarContents">Contact</a>
                <a href="#" class="navBarContents"></a>
                <div id="searchWrapper">
                    <form>
                        <input type="text" placeholder="Search.." name="search" id="searchInputText"/>
                        <button type="submit" id="searchSubmitButton"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default NavBar;
