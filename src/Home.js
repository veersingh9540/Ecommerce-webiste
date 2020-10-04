import React from 'react';
import Product from "./Product";
import './Home.css';
function Home() {
    return (
        <div className="Home">
           <img
           className="Home_image" 
           src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/August/GW/V239386255_IN_HETV_LG_Launch_English_GW_PC_1500x600._CB407857790_.jpg" 
           alt=""
           />
           <div className="Home_product_row">
                        {/* Products Id,Price,Title,Ratings,Image */}
                        <Product
                        id="123"
                        title="OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)"
                        price={59999}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg"
                        />
                         <Product
                        id="123"
                        title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
                        price={117100}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"
                        />
                       

                        {/* Products */}
           </div>
           <div className="Home_product_row">
                        {/* Products Id,Price,Title,Ratings,Image */}
                        <Product
                        id="123"
                        title="Strauss Anti Skid Yoga Mat)"
                        price={1200}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71192DDAbsL._SL1500_.jpg"
                        />
                         <Product
                        id="123"
                        title="Alienware Gaming AW17R5-7405SLV-PUS " 
                        
                        price={345556}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61D0JaKs7uL._SL1280_.jpg"
                        />
                         <Product
                        id="123"
                        title="Sony PS4 PRO 1TB Console with Death Stranding Pasted Outside box"
                        price={36990}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg"
                        />
                        

                        {/* Products */}
           </div>
           <div className="Home_product_row">
                        {/* Products Id,Price,Title,Ratings,Image */}
                        <Product
                        id="123"
                        title="The Power of Your Subconscious Mind"
                        price={399}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/9138VXjBfPL.jpg"
                        />
                        
                       

                        {/* Products */}
           </div>
          
        </div>
    )
}

export default Home
