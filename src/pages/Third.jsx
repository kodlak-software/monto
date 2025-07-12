import React from 'react';

const Third = () => {
    return (
        <div className="container block lg:flex mx-auto items-center  my-16 ">
            <div className="w-full lg:w-1/2 px-5">
                <h2 className="open-bold text-gray-900 text-base">Lorem ipsum dolor sit, amet consectetur <span className="text-orange-500">adipisicing elit.</span></h2>
                <p className="text-sm text-orange-500 mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quasi cupiditate expedita obcaecati blanditiis.</p>
                <p className="text-sm text-gray-900 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quasi.</p>
            </div>
            <div className="w-full block lg:flex justify-end lg:w-1/2 ">
                <div className="text-center border border-orange-500 px-5 py-5 mx-5 my-3">
                    <span className="text-sm open-bold text-gray-600">Lorem ipsum dolor sit</span>
                    <p className="text-sm text-orange-500 mt-5">expedita obcaecati &nbsp;<span className="text-gray-900 open-bold">200</span></p>
                </div>
                <div className="text-center border border-orange-500 px-5 py-5 mx-5 my-3">
                    <span className="text-sm open-bold text-gray-600">Mona quali verdi</span>
                    <p className="text-sm text-orange-500 mt-5">lochita dero and self &nbsp;<span className="text-gray-900 open-bold">200</span></p>
                </div>
                <div className="text-center border border-orange-500 px-5 py-5 mx-5 my-3">
                    <span className="text-sm open-bold text-gray-600">Abana des colitar</span>
                    <p className="text-sm text-orange-500 mt-5">Olita derosa bana &nbsp;<span className="text-gray-900 open-bold">200</span></p>
                </div>
            </div>
        </div>
    );
};

export default Third;