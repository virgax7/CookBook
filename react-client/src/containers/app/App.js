import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";

import "../reset.css";
import "./App.css";

import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import SurpriseMe from "../../components/surprise/SurpriseMe";
import {Landing} from "../../components/landing/Landing";
import Trending from "../../components/trending/Trending";
import Contact from "../../components/contact/Contact";

class App extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <HashRouter>
                <div id="mainWrapper">
                    {/*<NavBar/>*/}
                    {/*--start tmp replacement for navbar*/}
                    <div id="navBar">
                        <a className="navBarContents" id="cookBookTitle">
                            <NavLink className="navBarLink" to="/">CookBook</NavLink>
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
                    {/*--end tmp replacement for navbar*/}
                    <div className="spacer"></div>
                    <div className="content">
                        <Route exact path="/" component={Landing} />
                        <Route path="/trending" component={Trending} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/surpriseMe" component={SurpriseMe} />
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
