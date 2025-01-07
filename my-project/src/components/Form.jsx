// const FormInput=({label,name,type,value,onChange,placeholder,size})=>{
//     return(
//         <label className="form-control">
//   <div className="label">
//     <span className="label-text">{label}</span>
   
//   </div>
//   <input
//    type={type}
//    name={name} 
//    value={value}
//    onChange={onChange}
//   className={`input input-bordered ${size}`}
//   placeholder={placeholder}
//     />
 
// </label>
//     )
// }
// export default FormInput;

const FormInput = ({ label, name, type, value, onChange, placeholder, size }) => {
  const handleTextAreaInput = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto'; // Reset the height to auto to recalculate
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight
  };

  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>

      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input input-bordered ${size} resize-none overflow-hidden`}
          onInput={handleTextAreaInput} // Trigger height adjustment on input
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`input input-bordered ${size}`}
          placeholder={placeholder}
        />
      )}
    </label>
  );
};

export default FormInput;
