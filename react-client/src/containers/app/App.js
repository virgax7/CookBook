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
                <div class="spacer"></div>
                <SideBar/>
                <MainContent/>
            </div>
        );
    }
}

export default App;
