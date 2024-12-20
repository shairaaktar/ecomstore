// import React from "react";

// const ShowPaymentInfo=({order,showStatus=true})=>{
//     return(
//         <div>
//         <p>
           
//             <span>
                
//                 {order?.paymentIntent?.payment_method_types[0]}
//             </span>
//             <br/>
//             <span>
//                 Recevied Amount:{order?.paymentIntent?.
// amount_received}
//             </span>

//         </p>

//     </div>
//     )
   
// }

// export default ShowPaymentInfo;

import React from "react";

const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const ShowPaymentInfo = ({ order, showStatus = true }) => {
  // Check if paymentIntent exists, otherwise set defaults
//   const paymentMethod = order?.paymentIntent?.payment_method_types?.[0] || "Cash";
//   const amountReceived = order?.paymentIntent?.amount_received;

const paymentMethodRaw = order?.paymentIntent?.payment_method_types?.[0];
  const paymentMethod = paymentMethodRaw ? capitalizeFirstLetter(paymentMethodRaw) : "Cash On Delivery";
  const amountReceived = order?.paymentIntent?.amount_received;

  return (
    <div>
      <p>
        <span>{paymentMethod}</span>
        {paymentMethod !== "Cash On Delivery" && (
          <>
            <br />
            <span>Received Amount: {amountReceived}</span>
          </>
        )}
      </p>
    </div>
  );
}

export default ShowPaymentInfo;
