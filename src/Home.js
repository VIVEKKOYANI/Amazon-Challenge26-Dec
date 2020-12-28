import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* https://i.pinimg.com/originals/3b/61/4b/3b614b5ec8752d0ea6a33137d141bf18.jpg */}
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/3b/61/4b/3b614b5ec8752d0ea6a33137d141bf18.jpg"
          alt="Image"
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          {/* Product */}
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={29.99}
            image="https://tse4.mm.bing.net/th?id=OIP.i8n8xCYXS9-3wSaCOT1CfgAAAA&pid=Api&P=0&w=300&h=300"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="2344530"
            title="Amazon Echo (3rd generations | Smart speaker with Alexa, Charcoal Fabric)"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={4}
          />
          <Product
            id="3254354345"
            title="New Apple ipad pro (12.9-inch, wi-fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
