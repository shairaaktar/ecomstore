const FormInput=({label,name,type,value,onChange,placeholder,size})=>{
    return(
        <label className="form-control">
  <div className="label">
    <span className="label-text">{label}</span>
   
  </div>
  <input
   type={type}
   name={name} 
   value={value}
   onChange={onChange}
  className={`input input-bordered ${size}`}
  placeholder={placeholder}
    />
 
</label>
    )
}
export default FormInput;