import React from 'react';
import Cheer from '../media/img/vent.jpg'
import cup from '../media/img/cup.jpg'
import flamon from '../media/img/flamon.jpg'
import plante from '../media/img/plante.jpg'
import fleur from '../media/img/zest.jpg'

const Second = () => {
    return (
        <div className='relative my-16'>

            
                <div className="w-full block lg:flex">
                    <div className="w-full lg:w-1/3 bg-gray-100  h-[1350px] lg:h-[500px]">
                        
                       
                    </div>
                    <div className="w-full lg:w-2/3 lg:bg-gray-100 ] lg:h-[500px] ">
                        
                        
                    </div>

                </div>

                <div className="container absolute left-1/2 transform -translate-x-1/2 top-0 block lg:flex  lg:h-64">

                    
                        <div className=" lg:w-1/3 my-auto py-10 lg:py-0 px-5 lg:px-0">
                            
                            <img src={fleur} alt="" className=" lg:h-[450px] lg:mx-5 my-5 " />
                           
                        </div>
                        <div className="w-full lg:w-2/3 items-center lg:mx-5 py-10 lg:py-0 px-5 lg:px-0  block lg:flex justify-end p-10  lg:h-[500px]">
                            <div className="w-full   px-0 lg:px-5">
                                <div className="">
                                    <h2 className="open-bold text-orange-500 mb-5"> Consectetur adipisicing.</h2>
                                    <p className="mb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing.</p> 
                                </div>
                                <div className="w-full py-5 flex justify-around shadow-sm mb-5">
                                    <img src={cup} alt="" className="w-1/4" />
                                    <img src={flamon} alt="" className="w-1/4" />
                                    <img src={plante} alt="" className="w-1/4" />
                                </div>
                                <div className="w-full py-5 ">
                                    <div className="flex justify-start">
                                        <p className="text-xs mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <a href="" className="text-sm text-orange-500 hover:text-gray-900">More ...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full  my-auto ">
                                <img src={Cheer} alt="" className="  " />
                            </div>
                            
                        </div>
                 
                </div>
            
            </div>
    );
};

export default Second;