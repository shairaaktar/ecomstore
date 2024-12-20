import React,{useState} from 'react';
import axios from 'axios'

const AdminNotificationForm=()=>{
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{

            await axios.post(`http://localhost:8001/api/send-offer-notification`,{
                subject,
                message,
            });
            alert('Notification sent successfully!')

        }catch(error){
            console.error('Error sending notification:', error);
            alert('Failed to send notification.');
        }
    }

    return(
        <form onSubmit={handleSubmit}>

            <div>
            <label>Subject:</label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />

            </div>
            <div>
                <label>Message:</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Send Notification</button>
        </form>
    )
}


export default AdminNotificationForm