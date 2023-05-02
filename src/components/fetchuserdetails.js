import React,{useState} from 'react'
import './fetchuserdetails.css'
export function FetchUserDetails(){
    const [email,setemail]=useState([])
    async function getuser(){
         const request=await fetch( 'https://reqres.in/api/users/')
         const response=await request.json()
         setemail(response.data)
         
    }
    
    return (
        <div className='parent'>
            
            <button onClick={getuser}>get user</button>
            <ul>
            {email.map((user)=>{
                
                return <li key={user.id}>
                    <div className='child'>
                     <h3>User Id: {user.id}</h3>
                      <h3>Email Id: {user.email}</h3>
                     <h3>Full Name:{user.first_name+' '+user.last_name}</h3>
                     <img src={user.avatar} height={'200px'} width={'200px'} className='image'/>
                     </div>
                </li>
                
            })}
            </ul>
           </div>
           
    )
    }