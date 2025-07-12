import React from 'react';
import image_1 from '../media/img/plan.jpg'
import image_2 from '../media/img/salle.jpg'

const Five = () => {
    return (
        <div className="w-full relative  flex h-[600px] lg:h-[450px]">
            <div className="w-full block lg:flex h-full">

                <div className="w-full lg:w-1/2  h-full">
                
                </div>
                <div className="w-full lg:w-1/2 bg-gray-100 h-full">
                
                </div>

            </div>
            <div className="container absolute top-0 left-1/2 transform -translate-x-1/2  block lg:flex px-5">

                <div className="block lg:flex">
                    <div className="w-full lg:w-1/2 py-10 mr-5">
                        <h2 className="text-lg text-orange-500 open-bold">Nano delemer of gaurding</h2>
                        <p className="text-base text-gray-900 mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid labore molestias praesentium, blanditiis dignissimos architecto recusandae a. Maiores voluptatibus nihil, sapiente laborum impedit deserunt ducimus nostrum ad. Quo, cumque explicabo.
                            Omnis commodi tempora ullam sequi soluta hic corrupti corporis repellendus expedita nemo architecto nam itaque accusantium, nisi reprehenderit voluptatem delectus, distinctio sapiente harum odio praesentium laboriosam eligendi. Doloremque, facilis repellendus?
                        </p>

                        <h2 className="text-lg text-orange-500 open-bold mt-5">Aliquid labore molestias praesentium</h2>
                        <p className="text-base text-gray-900 mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid labore molestias praesentium, blanditiis dignissimos architecto recusandae a. Maiores voluptatibus nihil, sapiente laborum impedit deserunt ducimus nostrum ad. Quo, cumque explicabo.
                        </p>

                    </div>
                    <div className="w-full lg:w-1/2  py-10">
                        <div className="w-full px-5">
                            <h3 className="text-orange-500 open-bold text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                            <p className="text-sm text-gray-900 mt-3 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, ullam. Molestiae magni atque, at libero tenetur ipsum aliquid voluptates architecto tempore harum natus asperiores sint enim, excepturi minima nobis voluptate?</p>
                        </div>
                        <div className="w-full block lg:flex justify-end shadow-md">
                            <div className="w-full lg:w-1/2 block lg:flex px-0 lg:px-3 py-5">
                                <img src={image_1} alt="" className="px-3" />
                            </div>
                            <div className="w-full lg:w-1/2 block lg:flex px-0 lg:px-3 py-5">
                                <img src={image_2} alt="" className="px-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Five;