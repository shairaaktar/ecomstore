import React from "react";
import { FaShippingFast, FaShieldAlt, FaHeadset,FaExchangeAlt } from "react-icons/fa";

const Incentives = () => {
  const incentives = [
    {
      icon: <FaShippingFast size={48} className="text-blue-500" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders with no minimum purchase required.",
    },
    {
      icon: <FaHeadset size={48} className="text-green-500" />,
      title: "24/7 Support",
      description: "Our customer service team is available around the clock to assist you.",
    },
    {
      icon: <FaShieldAlt size={48} className="text-red-500" />,
      title: "100% Safe Shopping",
      description: "Shop with confidence. Your data and transactions are completely secure.",
    },
    {
         icon: <FaExchangeAlt size={48} className="text-blue-500" />,
        
        title: "Free Return",
        description: "Track or off orders",
      },
  ];

  return (
    <div className="mt-20 mb-8 px-4 sm:px-8 lg:px-16">
      {/* <h1 className="text-3xl font-semibold text-center mb-12">Enjoy exclusive benefits with our premium services</h1> */}
      
      <div className="grid grid-cols-2  md:grid-cols-4 gap-4 gap-8">
        {incentives.map((incentive, index) => (
          <div
            key={index}
            // className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            className={`
              bg-white shadow-lg rounded-lg p-4 lg:p-6 
              flex flex-col items-center text-center
              ${!incentive.showOnMobile ? 'hidden md:flex' : 'flex'}
            `}
          >
            <div className="mb-3 lg:mb-4">{incentive.icon}</div>
            <h2
            //  className="text-xl font-semibold mb-2"
            className="text-lg lg:text-xl font-semibold mb-2"
             >{incentive.title}</h2>
            <p 
            // className="text-gray-600"
            className="text-sm lg:text-base text-gray-600"
            >
              {incentive.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Incentives;
