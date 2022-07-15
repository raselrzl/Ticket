import React from 'react'
import '../CSS/Success.css'

export default function Success({success}) {
    return (
        <div className='success-container'>
            
               <span>{success}</span> 
          
        </div>
    )
}
