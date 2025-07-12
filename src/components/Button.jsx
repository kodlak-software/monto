import React from 'react';

const Button = (props) => {


    const text = props.text;
    return (
        <div>
             <button className="bg-[#EC8737] my-10 text-gray-100 px-8 py-2  hover:bg-gray-900">{text}</button>
        </div>
    );
};

export default Button;