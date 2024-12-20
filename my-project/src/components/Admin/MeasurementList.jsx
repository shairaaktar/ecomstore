 import React,{useEffect,useState} from 'react'


 const MeasurementList=()=>{

     return(

         <div className='overflow-x-auto'>
             <table className='table table'>
                 <thead>
                     <tr>
                         <th>Size</th>
                         <th>Chest</th>
                         <th>Length</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>XS</td>
                         <td>34 inch</td>
                         <td>25 inch</td>
                     </tr>
                     <tr>
                         <td>S</td>
                         <td>35 inch</td>
                         <td>25 inch</td>
                     </tr>
                     <tr>
                         <td>M</td>
                         <td>36 inch</td>
                         <td>25 inch</td>
                     </tr>
                     <tr>
                         <td>L</td>
                         <td>38 inch</td>
                         <td>26 inch</td>
                     </tr>
                     <tr>
                         <td>XL</td>
                         <td>40 inch</td>
                         <td>26 inch</td>
                     </tr>
                 </tbody>

             </table>

         </div>

     )

 }

 export default MeasurementList


