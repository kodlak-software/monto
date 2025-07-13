import React from 'react';
import Button from '../components/Button'
import image from '../media/img/woman.jpg'

const Six = () => {
    return (

            <div className="container  mx-auto mt-32 px-5">

                <div className="block lg:flex items-center">
                    <div className="w-full lg:w-1/2 py-5 mr-5">
                        <h2 className="text-lg text-orange-500 open-bold">Nano delemer of gaurding</h2>
                        <p className="text-sm text-gray-900 mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid labore molestias praesentium, blanditiis dignissimos architecto recusandae a. Maiores voluptatibus nihil, sapiente laborum impedit deserunt ducimus nostrum ad. Quo, cumque explicabo.
                            Omnis commodi tempora ullam sequi soluta hic corrupti corporis repellendus expedita nemo architecto nam itaque accusantium, nisi reprehenderit voluptatem delectus, distinctio sapiente harum odio praesentium laboriosam eligendi. Doloremque, facilis repellendus?
                        </p>
                        <div className="w-full flex justify-end">
                            <Button text="Good now it" />
                        </div>

                    </div>
                    <div className="w-full lg:w-1/2  py-10 border border-gray-200 px-5 shadoww-lg">
                        <div className="w-full block lg:flex items-center justify-center">
                            <div className="w-full lg-w-1/2">
                                <h3 className="text-orange-500 open-bold text-base text-center">Hundle request</h3>
                                <p className="text-gray-900 text-sm my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur reprehenderit rerum, minus voluptatum perspiciatis veritatis totam dolorum commodi tenetur ab excepturi eveniet non vitae, unde vel saepe incidunt laudantium debitis.</p>
                                <div className="w-full flex justify-center">
                                    <Button text="Join us now" />
                                </div>
                            </div>
                            <div className="w-full lg-w-1/2">
                                <img src={image} alt="" className="w-full lg:w-1/2 mx-auto" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
   
    );
};

export default Six;