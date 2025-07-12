import React from 'react';
import Button from '../components/Button'

const Hero = () => {
    return (
            <header className=" header-home h-[800px] lg:h-screen ">
                <div className="container flex justify-start items-center mx-auto  h-full px-5">
                    <div className="w-full lg:w-1/2 text-start ">
                        <h2 className="text-lg lg:text-2xl text-gray-900 open-light">by Creative <span className="text-orange-500"> Tim</span></h2>
                        <h1 className="text-4xl lg:text-6xl text-gray-900 uppercase mt-4 mb-10 open-light">monto</h1>
                        <hr className="w-full border-orange-500 " />
                        <p className=" text-base  text-gray-900 mt-16 open-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quas nemo id fugit nisi. Ex eaque inventore ab, iste ipsa quidem quod possimus! Voluptas animi reiciendis nesciunt libero rem dolorem?</p>
                        <div className="w-full flex justify-center ">
                           <Button text="Travel with us" />
                        </div>
                        
                    </div>
                </div>
            </header>

    );
};

export default Hero;