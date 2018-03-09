import React, {Component} from "react";
import "../reset.css";
import "./App.css";
import NavBar from "../../components/common/NavBar";
import SideBar from "../../components/landing/SideBar";
import MainContent from "../../components/landing/MainContent";
import Footer from "../../components/common/Footer";

class App extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="mainWrapper">
                <NavBar/>
                <div className="spacer"></div>
                <div id="sideBarWrapper">
                    <SideBar/>
                    <MainContent/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
