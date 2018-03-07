import React, {Component} from "react";

class MainContent extends Component {
    render() {
        return (
            <div id="mainContent">
                <div id="choices">Choices</div>
                {/*hard coded images, later retrieve from db or something*/}
                <div class="gallery">
                    <img src={require('../../images/landing/burrito.jpeg')} alt="burrito" width="400" height="300"/>
                    <div class="desc">Delicious Burrito</div>
                </div>
                <div class="gallery">
                    <img src={require('../../images/landing/pizza.jpeg')} alt="burrito" width="400" height="300"/>
                    <div class="desc">Combination Pizza</div>
                </div>
                <div class="gallery">
                    <img src={require('../../images/landing/salmon.jpeg')} alt="burrito" width="400" height="300"/>
                    <div class="desc">Fresh Salmon</div>
                </div>
                <div class="gallery">
                    <img src={require('../../images/landing/shrimp.jpeg')} alt="burrito" width="400" height="300"/>
                    <div class="desc">Authentic shrimp</div>
                </div>
                <div class="gallery">
                    <img src={require('../../images/landing/stir-fry.jpeg')} alt="burrito" width="400" height="300"/>
                    <div class="desc">Grandma's Stir fry</div>
                </div>
                <div class="gallery">
                    <img src={require('../../images/landing/pancake.jpeg')} alt="burrito" width="400" height="300"/>
                    <div class="desc">Mouth watering pancakes</div>
                </div>
            </div>
        );
    }
}

export default MainContent;
