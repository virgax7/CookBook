import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export const NavBar = () => (
        <div id="navBar">
            <a className="navBarContents" id="cookBookTitle">
                <NavLink className="navBarLink" exact to="/">CookBook</NavLink>
            </a>
            <a className="navBarContents">
                <NavLink className="navBarLink" to="/trending">Trending</NavLink>
            </a>
            <a className="navBarContents">
                <NavLink className="navBarLink" to="/contact">Contact</NavLink>
            </a>
            <a className="navBarContents">
                <NavLink className="navBarLink" to="/surpriseMe">Surprise Me</NavLink>
            </a>
            <div id="searchWrapper">
                <form>
                    <input type="text" placeholder="Search.." name="search" id="searchInputText"/>
                    <button type="submit" id="searchSubmitButton"/>
                </form>
            </div>
        </div>
);

