import React, {Component} from "react";

class MainContent extends Component {
    render() {
        return (
            <div id="mainContent">
                <div id="choices">Top Choices</div>
                {/*hard coded images, later retrieve from db or something*/}
                <div className="gallery">
                    <img src={require('../../images/landing/burrito.jpeg')} alt="burrito" width="400" height="300"/>
                    <div className="desc">Delicious Burrito</div>
                </div>
                <div className="gallery">
                    <img src={require('../../images/landing/pizza.jpeg')} alt="burrito" width="400" height="300"/>
                    <div className="desc">Combination Pizza</div>
                </div>
                <div className="gallery">
                    <img src={require('../../images/landing/salmon.jpeg')} alt="burrito" width="400" height="300"/>
                    <div className="desc">Fresh Salmon</div>
                </div>
                <div className="gallery">
                    <img src={require('../../images/landing/shrimp.jpeg')} alt="burrito" width="400" height="300"/>
                    <div className="desc">Authentic shrimp</div>
                </div>
                <div className="gallery">
                    <img src={require('../../images/landing/stir-fry.jpeg')} alt="burrito" width="400" height="300"/>
                    <div className="desc">Grandma&#39;s Stir fry</div>
                </div>
                <div className="gallery">
                    <img src={require('../../images/landing/pancake.jpeg')} alt="burrito" width="400" height="300"/>
                    <div className="desc">Mouth watering pancakes</div>
                </div>
            </div>
        );
    }
}

export default MainContent;
