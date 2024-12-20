import { useNavigate } from "react-router-dom"

const SubmitBtn=({text,onClick})=>{
    const navigate=useNavigate()
    const isSubmitting=navigate.state==='submitting'
    return(
       <button 
       type="submit"
       className="btn btn-primary btn-block"
        disabled={isSubmitting}
        onClick={onClick}
        >
        {
            isSubmitting ?<>
            <span className="loading loading-spinner"></span>
            sending....
            </>: text || 'submit'

        }
       
        </button> 
    )
}

export default SubmitBtn