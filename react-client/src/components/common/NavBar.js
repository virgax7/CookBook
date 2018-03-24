import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export const NavBar = () => (
        <div id="navBar">
            <NavLink className="navBarContents navBarLink" id={"cookBookTitle"}exact to="/">CookBook</NavLink>
            <NavLink className="navBarContents navBarLink" to="/trending">Trending</NavLink>
            <NavLink className="navBarContents navBarLink" to="/contact">Contact</NavLink>
            <NavLink className="navBarContents navBarLink" to="/surpriseMe">Surprise Me</NavLink>
            <NavLink className="navBarContents navBarLink" to="/simCook">Cook Interactively</NavLink>
            <div id="searchWrapper">
                <form>
                    <input type="text" placeholder="Search.." name="search" id="searchInputText"/>
                    <button type="submit" id="searchSubmitButton"/>
                </form>
            </div>
        </div>
);

