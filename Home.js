import React from 'react'
import './home.css'
import amazon_prime from './AmazonImages/amazon_prime_full_new_2.jpg';
import lean_startup from './AmazonImages/lean_startup.jpg'
import ipadAir from './AmazonImages/ipadAir1.jpg'
import samsungTv from './AmazonImages/samsungTv.jpg'



import Product from './Product'
function Home() {
    return (
        <div className="home">
           <div className="home_container">
               <img src={amazon_prime} alt="" className='home_image' name="Amazon Prime" />
               <div className="home_row">
                <Product id="123" title="The Lean Startup" image={lean_startup} rating={4} price={29.99} />
                <Product id="234" title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Space Grey (4th Generation)" image={ipadAir} rating={5} price={1129.99} />


                
               </div>
               <div className="home_row">
               <Product id="235"title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Space Grey (4th Generation)" image={ipadAir} rating={5} price={1129.99} />
               <Product id="236"title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Space Grey (4th Generation)" image={ipadAir} rating={5} price={1129.99} />
               <Product id="297"title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Space Grey (4th Generation)" image={ipadAir} rating={5} price={1129.99} />

                
                   
               </div>
               <div className="home_row">
               <Product id="3234"title="Samsung 138 cm (55 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA55AUE70AKLXL (Black) (2021 Model)" image={samsungTv} rating={4} price={679.99} />

                   
               </div> 
           </div> 
        </div>
    )
}

export default Home
