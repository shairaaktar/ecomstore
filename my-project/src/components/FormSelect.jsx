// const FormSelect=({label,name,list,defaultValue,size})=>{
//     return(
//         <div className="form-control">
//             <label htmlFor={name} className="label">
//                 <span className="label-text capitalize">
//                     {label}
//                 </span>
//                 </label>
//                 <select 
//                 name={name}
//                 id={name}
//                 className={`select select-bordered ${size}`}
//                 defaultValue={defaultValue}
//                 list={list}
                
//                 >
//                     {/* {list.map((item)=>{
//                         return(
//                             <option key={item} value={item}>
//                                 {item}

//                             </option>
//                         )
//                     })} */}
                  

//                 </select>
            

//         </div>
//     )

// }
// export default FormSelect;

// const FormSelect = ({ label, name, list, defaultValue, size, onChange }) => {
//     return (
//       <div className="form-control">
//         <label htmlFor={name} className="label">
//           <span className="label-text capitalize">{label}</span>
//         </label>
//         <select
//           name={name}
//           id={name}
//           className={`select select-bordered ${size}`}
//           defaultValue={defaultValue}
//           onChange={onChange}
//         >
//           <option value="" disabled>
//             -- Select {label} --
//           </option>
//           {list.map((item) => (
//             <option key={item.value} value={item.value}>
//               {item.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   };
  
//   export default FormSelect;
  

const FormSelect = ({ label, name, list, defaultValue, size, onChange }) => {
    return (
      <div className="form-control">
        <label htmlFor={name} className="label">
          <span className="label-text capitalize">{label}</span>
        </label>
        <select
          name={name}
          id={name}
          className={`select select-bordered ${size}`}
          defaultValue={defaultValue}
          onChange={onChange}
        >
          <option value="" disabled>
            -- Select {label} --
          </option>
          {list.map((item) => (
            <option key={item.value} value={item.value}>
              
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default FormSelect;
  