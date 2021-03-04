import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" alt=""
                />
                <div className="home__row">
                    <Product
                        id="1"
                        title="The Book of Secrets"
                        price={33.24}
                        image="https://m.media-amazon.com/images/I/71iQSkrLL7L._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product
                        id="2"
                        title="Soft Skills"
                        price={15.35}
                        image="https://m.media-amazon.com/images/I/91BpmgVRWZL._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title="The lean Startup"
                        price={29.99}
                        image="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png"
                        rating={4}
                    />
                    <Product
                        id="4"
                        title="The Clean Coder"
                        price={39.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41-%2Bg1a2Y1L._AC_UL600_SR453,600_.jpg"
                        rating={5}
                    />
                    <Product
                        id="5"
                        title="Freedom from the Known"
                        price={24.00}
                        image="https://m.media-amazon.com/images/I/71YJQwFT3GL._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">                   
                    <Product
                        id="6"
                        title="Lyrics to Love"
                        price={24.00}
                        image="https://m.media-amazon.com/images/I/81VOCC-GI0L._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
