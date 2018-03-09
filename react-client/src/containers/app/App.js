import React, {Component} from "react";
import "../reset.css";
import "./App.css";
import NavBar from "../../components/landing/NavBar";
import SideBar from "../../components/landing/SideBar";
import MainContent from "../../components/landing/MainContent";

class App extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="mainWrapper">
                <NavBar/>
                <div className="spacer"></div>
                <div id="sideBarWrapper">
                    <div id="mainContentWrapper">
                        <SideBar/>
                        <MainContent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
