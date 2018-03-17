import React, {Component} from "react";
import {Route, HashRouter} from "react-router-dom";

import "../reset.css";
import "./App.css";

import {NavBar} from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import SurpriseMe from "../../components/surprise/SurpriseMe";
import {Landing} from "../../components/landing/Landing";
import Trending from "../../components/trending/Trending";
import Contact from "../../components/contact/Contact";

import * as firebase from "firebase";
import {firebaseConfig} from "./CredsConstants";

firebase.initializeApp(firebaseConfig);

class App extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <HashRouter>
                <div id="mainWrapper">
                    <NavBar/>
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
