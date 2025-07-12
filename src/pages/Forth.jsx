import React from 'react'
import pannier from '../media/img/pannier.jpg'
import montre from '../media/img/montre.png'
import Button from'../components/Button'

const Forth = () => {
    return (
        <div className="w-full relative bg-gray-100">
            <div className="container block lg:flex mx-auto px-5">
                <div className="w-full lg:w-1/2">
                    <img src={pannier} alt="" className="" />
                </div>
                <div className="w-full lg:w-1/2">
                </div>
            </div>


            <div className="container absolute top-[400px] lg:top-[150px] left-1/2 transform -translate-x-1/2  block lg:flex px-5">
                <div className="w-full lg:w-1/2">
                    
                </div>
                <div className="w-full lg:w-1/2">
                    <div className=" mx-5 lg:mx-0 bg-white shadow-lg  mb-16 p-8">
                        <div className="w-full flex">
                            <div className="w-1/2 flex justify-start">
                                <h2 className="open-bold text-orange-500">Hold amra set immo</h2>
                            </div>
                            <div className="w-1/2 flex justify-start">
                                <h2 className="open-bold text-orange-500">Dala idar solrm</h2>
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 block lg:flex mt-8">
                            <img src={montre} alt="" className="w-full lg:w-1/2 my-auto" />
                            <div className="w-full p-5">
                                <h3 className="text-orange-500 open-bold">Perspiciatis id quos commodi.</h3>
                                <p className="text-sm text-gray-900 my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sint quidem ipsa maxime quasi laborum placeat alias blanditiis! Illum voluptate fugiat ipsam expedita magni perferendis pariatur. Perferendis inventore molestias similique.</p>
                                <div className="w-full flex justify-center">
                                    <Button text="By now" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Forth;